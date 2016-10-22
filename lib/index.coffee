# app entry point

{div} = calc = new
  Calc = require './modules/calc'

console.log "1 + 2 = #{calc.add(1, 2)}"
console.log "1 / 2 = #{div(1, 2)}"
