/// <reference path="../../typings/main.d.ts" />
import chai = require("chai")

import {greeter} from '../../src/main'
import Models from '../../src/modules/Models'

let expect = chai.expect

describe('Models', () => {
  describe('User', () => {
    let user: Models.User;

    beforeEach(() => {
      user = {firstName: 'Max', lastName: 'Tax'}
    })

    it('should greeter', () => {
      expect(greeter(user)).to.equal('Hello, Max Tax')
    })
  })

  describe('2 + 4', () => {
    it('should be 6', (done) => {
      expect(2 + 4).to.equals(6)
      done()
    })

    it('should not be 7', (done) => {
      expect(2 + 4).to.not.equals(7)
      done()
    })
  })
})
