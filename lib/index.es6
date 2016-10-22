// app entry point

import Calc from './modules/calc'

let	calc = new Calc(),
		div = calc.div

console.log(`1 + 2 = ${calc.add(1, 2)}`)
console.log(`1 / 2 = ${div(1, 2)}`)
