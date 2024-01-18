/* Asynchronous Approach */
const {readFile, writeFile} = require('fs')

// First file
console.log('Task start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    // Second file
    // Nested due to callbacks
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result

        // Create resulting text file
        writeFile(
            './content/result-async.txt',
            `Here is the result:\n\t${first}\n\t${second}`,
            (err, result) => {
                if (err) { 
                    console.log(err)
                    return
                }
                console.log('Task finished')
            }
        )
    })
})
console.log('Moving to next task')

/* Notes on Asynchronous Tasks:
In comparison to synchronous tasks, other users can still utilize Node when it is
given an asynchronous task. It offloads the asynchronous task immediately,
then jumps straight to the next task.

Process: Task1 start -> Offload Task1 -> Move to Task2 -> **Finish Task1 sometime**
*/