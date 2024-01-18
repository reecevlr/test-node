const path = require('path')

// Separator for this device
console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// Provides absolute path
// Inputs default separator for various
// devices and/or systems
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)