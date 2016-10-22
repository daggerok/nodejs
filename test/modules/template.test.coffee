# use that snippet from new test

# chai = require 'chai'
# expect = chai.expect
# do chai.should # chai.should()
{expect, should} = require '../helper'

describe 'template test', ->

  it 'expect', ->
    expect 'some string'
      .to.equal 'some string'

  it 'should', ->
    'some string'.should.to.equal 'some string'
