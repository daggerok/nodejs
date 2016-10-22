import chai from 'chai'
import path from 'path'

chai.should()

import RectangleES6 from '../../src/modules/RectangleES6'

describe('RectangleES6', () => {
  describe('#width es6', () => {
    let rectangleEs6

    beforeEach(() => {
      rectangleEs6 = new RectangleES6(10, 20)
    })

    it('returns the width es6', () => {
      rectangleEs6.width.should.equal(10)
    })

    it('can be changed es6', () => {
      rectangleEs6.width = 30
      rectangleEs6.width.should.equal(30)
    })

    it('only accepts numerical values es6', () => {
      (() => {
        rectangleEs6.width = 'foo'
      }).should.throw(Error)
    })
  })
})
