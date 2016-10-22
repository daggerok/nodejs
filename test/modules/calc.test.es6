// example app Calc module test

import Calc from '../../lib/modules/calc'
import {expect, should} from '../helper'

describe('Calc', () => {
	let calc;
	
  beforeEach(() => {
		calc = new Calc()
	})

	it('expect 1 add 2 to equal 3', () => {
    expect(calc.add(1, 2)).to.equal(3)
	})

  it('1 sub 2 should equal -1', () => {
    calc.sub(1, 2).should.equal(-1)
	})

	it('expect 1 mul 2 to equal 2', () => {
    expect(calc.mul(1, 2)).to.equal(2)
	})

	it('1 div 2 should equal 0.5', () => {
    calc.div(1, 2).should.equal(0.5)
	})
	
	it('expect 0 div 0 to deep equal NaN', () => {
		expect(calc.div(0, 0)).to.deep.equal(NaN)
	})
	
  it('1 div 0 should equal Infinity', () => {
    calc.div(1, 0).should.equal(Infinity)
	})
})
