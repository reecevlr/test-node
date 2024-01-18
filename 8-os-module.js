// Node built-in module
const os = require('os')

// Information about current user
const user = os.userInfo()
console.log(user)

console.log(`The system uptime is: ${os.uptime()} seconds.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)