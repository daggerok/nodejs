/**
 * ugly jquery client code ...sorry :)
 */

(function() {

  var socket = io(), anonymous = 'anonymous',
  template = 'id="username" style="display: none;"',
  key = 'com.daggerok.nodejs-fundamentals', id = 0,
  name = getFromStorage('#username') || anonymous;

  /**
   * local storage
   */

  // helpers
  function putInStorage(value, theKey) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem(k(theKey), value)
    }
  }

  function getFromStorage(theKey) {
    if (typeof(Storage) !== 'undefined') {
      return localStorage.getItem(k(theKey))
    }
    return null
  }

  function k(theKey) {
    return key.concat(theKey)
  }

  // restore from local storage
  $(document).ready(function() {
    var username = getFromStorage('#username'),
    messages = getFromStorage('#messages'),
    curr = getFromStorage('#id');

    if (username == 'null') {
      name = anonymous
    }
    $('#username').val(name);

    if (messages != 'null') {
      $('#messages').html(messages)
    }

    if (curr != 'null' && !isNaN(parseInt(curr))) {
      id = parseInt(curr) || 0
    }
  });

  // save to local storage
  $(window).on('beforeunload', function() {
    putInStorage($('#username').val(), '#username');
    putInStorage($('#messages').html(), '#messages');
    putInStorage(id, '#id')
  });

  // clear local storage
  $('#clear').click(function() {
    if (typeof(Storage) !== 'undefined') {
      localStorage.clear()
    }
  }).attr('title', 'clear data from local storage');

  /**
   * update username
   */

  // begin update username
  $('#username').click(function() {
    $(this).fadeOut('fast', function() {
      name = this.vslue;
      this.value = '';
      $(this).fadeIn('fast')
    })
  });

  // save username
  $('#username').change(function() {
    name = this.value;
    console.log(name, this.value);

    var $new = $('<input id="username" autocomplete="off" value="' + name + '"disabled/>')

    $(this).fadeOut('fast', function() {
      $(this).replaceWith($new);
      $(this).fadeIn('fast')
    });
    putInStorage($('#username').val(), '#username');
    return false
  });

  /**
   * socket messages
   */

  // send output message
  $('#input').change(function() {
    var $input = $('#input'),
        message = name + ': ' + $input.val();

    socket.emit('chat message', message);
    $input.fadeOut(function() {
      $(this).val('').fadeIn()
    });
    return false
  });

  // render new input message
  return socket.on('chat message', function(message) {
    var grey = (++id % 2 == 0) ? 'zebra' : '',
    $new = $('<li class="row ' + grey + '"' + template + '><div class="col-sm-12">' + message + '</div></li>');

    $new.prependTo($('#messages'));
    $new.show('fast')
  })

})();
