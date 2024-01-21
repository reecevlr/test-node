/* Links 
    https://www.boredapi.com/api/activity/
    https://httpstat.us/404
*/

const axiosRequest = require('axios')

// await-async method

async function getActivity() {
    try {
        let response = await axiosRequest.get('https://www.boredapi.com/api/activity')
        console.log(`You can... ${response.data.activity}`)
    } 
    catch (error) {
        console.log(`Oops! ${error}`)
    }
}

getActivity()


/* Attempt 1:
    This will not work. This returns a Promise object,
    which cannot be printed onto the console.

    let response = axiosRequest.get('https://www.boredapi.com/api/activity')
    console.log(`You could... ${response.data.activity}`)
*/


/* Attempt 2: then-catch 
    Fully functional. The issue is readability and the possibility of
    the callbacks going into callback hell.

    axiosRequest
    .get('https://www.boredapi.com/api/activity/')
    .then(response => {
        console.log(`You could... ${response.data.activity}`)
    })
    .catch(error => {
        console.log(`Oops! ${error}`)
    })
*/