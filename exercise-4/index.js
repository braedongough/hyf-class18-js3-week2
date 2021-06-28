function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getLoggedInUsers() {
    console.log('loading...')
    return new Promise((resolve, reject) => {
        const shouldResolve = getRandomInt(2)

        setTimeout(() => {
            if (shouldResolve) {
                resolve(['benna', 'magdy', 'carolina'])
            } else {
                reject('Internal server error!!!')
            }
        }, 1000)
    })
}

async function renderLoggedInUser() {
    try {
        const users = await getLoggedInUsers()
        console.log(users)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('finished loading')
    }
}

renderLoggedInUser()

// getLoggedInUsers()
//     .then((users) => console.log(users))
//     .catch((errMessage) => console.log(errMessage))
//     .finally(() => {
//         console.log('finished loading')
//     })
