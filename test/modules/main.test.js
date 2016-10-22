import chai, {expect, assert} from 'chai'
import {greeting} from '../../src/modules/main'

chai.should()

describe('client side testing', () => {
  it('should expect correct greeting', () => {
    greeting('Max').should.equal('hello, Max!')
  })
})
