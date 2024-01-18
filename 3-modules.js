// CommonJS -> every file is module (by default)
// Modules -> Encapsulated Code (only share minimum)

/* NO MODULE APPLICATION
const firstName = 'John'
const secondName = 'Arthur'

const sayHi = (name) => {
    console.log(`Greetings, ${name}!`)
}

sayHi('Susan')
sayHi(firstName)
sayHi(secondName)
*/

// This method is cumbersome, and it shares 
// other details we may not want to.
// Instead, we can encapsulate these variables and 
// other functions in separate files and simply export, i.e.,
// 'encapsulate' them.

/* Encapsulation Method */
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-exports')

sayHi(names.firstName)
sayHi(names.secondName)
sayHi('Sadie')

console.log(data)

require('./7-mind-grenade')