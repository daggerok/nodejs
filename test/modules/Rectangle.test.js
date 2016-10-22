// in this tests we make sure that we also can import nodule modules
// Import chai.
import chai from 'chai'
import path from 'path'

// Telling chai that we are using the "should" style assertions:
chai.should()

// Import the Rectangle class.
import Rectangle from '../../src/modules/Rectangle'
// but you also can combine with require if from some reasons you want...
// let Rectangle = require('../../src/modules/Rectangle')

// The fat arrow (=>) syntax is a new way to define
// functions in ES6. One feature that is different
// from the usual "function" keyword is that the scope
// is inherited from the parent, so there is no need to write
//
//   function() {
//     ...
//   }.bind(this)
//
// anymore. In this case we are not using "this" so the new
// syntax is just used for brevity.
describe('Rectangle', () => {
  describe('#width', () => {
    let rectangle

    beforeEach(() => {
      // Create a new Rectangle object before every test.
      rectangle = new Rectangle(10, 20)
    })

    it('returns the width', () => {
      // This will fail if "rectangle.width" does
      // not equal 10.
      rectangle.width.should.equal(10)
    })

    it('can be changed', () => {
      // Assert that the width can be changed.
      rectangle.width = 30
      rectangle.width.should.equal(30)
    })

    it('only accepts numerical values', () => {
      // Assert that an error will be thrown if
      // the width it set to a non-numerical value.
      (() => {
        rectangle.width = 'foo'
      }).should.throw(Error)
    })
  })
})
