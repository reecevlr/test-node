const {readFileSync, writeFileSync} = require('fs')

console.log('Task start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `This is the result of this function:\n${first}\n${second}`,
    {flag: 'a'} // append instead of overwrite
)
console.log('Task finished')
console.log('Moving to next task')

/* Notes on Synchronous Tasks:
Node is 'down' when it is accomplishing a synchronous task, meaning, 
other users are unable to use Node until it finishes the synchronous task first.

Process: Task start -> Task finish -> Next task
*/