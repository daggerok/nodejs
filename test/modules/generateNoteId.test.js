import chai, {expect, assert} from 'chai'
import generateNoteId from '../../src/modules/generateNoteId'

let should = chai.should()

describe('generateNoteId', () => {
  it('should remove now first line', () => {
    let line = 'one\ntwo'
    
    generateNoteId(line).should.to.equal('one')
  })
  
  it('should lower case', () => {
    let line = 'OneTwo'
    
    generateNoteId(line).should.to.equal('onetwo')
  })
  
  it('should replace spaces by dashes', () => {
    let line = 'one two'
    
    generateNoteId(line).should.to.equal('one-two')
  })
  
  it('should return null with null arg', () => {
    expect(generateNoteId(null)).to.be.null
  })
})
