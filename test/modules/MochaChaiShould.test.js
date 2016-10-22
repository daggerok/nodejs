import chai, {expect, assert} from 'chai'

chai.should()

describe('chai', () => {
  let one = 1
  describe('should testing assertions style', () => {
    it('testing should.be.a', () => {
      one.should.be.a('number')
    })
    
    it('testing expect', () => {
      expect(one).to.be.a('number')
    })
    
    it('testing assert', () => {
      assert.typeOf(one, 'number')
    })
  })
})

