// new test snippet

// import chai, {expect} from 'chai'
// chai.should()
import {expect, should} from '../helper'

describe('template test', () => {
  it('expect', () => {
    expect('some string').to.equal('some string')
	})

  it('should', () => {
    'some string'.should.to.equal('some string')
	})
})
