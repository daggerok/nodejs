(function main() {
  'use strict';

  document.addEventListener('DOMContentLoaded', DOMContentLoaded);

  function DOMContentLoaded() {
    document.getElementById('app')
            .addEventListener('click', inclementNumber);
  }

  function inclementNumber(event) {
    event.preventDefault();
    const element = event.target;
    //const value = +element.textContent;
    const value = parseInt(element.textContent) || 0;

    element.textContent = value + 1;
  }

})();
