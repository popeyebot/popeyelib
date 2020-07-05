var p = require('popeyelib')
var shuffleArray = p.shuffleArray
var wait = p.wait
var makeId = p.makeId


var e = ["0", "1", "2"]

p.shuffleArray(e)
console.log(e)

async function start(us) {
   return new Promise(async function(resolve, reject) {
      console.log(p.makeId(10))
      await wait(1000)
      console.log(p.makeId(10))
   })
}
start()