const ENDPOINT = 'https://yesno.wtf/api'

async function fetchYesNoAsync() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    // console.log('async', data.answer)
}

fetchYesNoAsync()

function fetchYesNoPromise() {
    return fetch(ENDPOINT).then((res) => res.json())
}

fetchYesNoPromise()

function fetchErrorPromise() {
    fetch('https://knajskdskj.jasdk').catch((error) => {
        console.log('we got it! ', error)
    })
}

fetchErrorPromise()

new Promise((resolve, reject) => {
    fetchYesNoPromise().then((data) => {
        const answer = data.answer

        if (answer === 'yes') {
            resolve(answer)
        } else {
            reject(answer)
        }
    })
})
    .then((answer) => console.log('it resolved:', answer))
    .catch((answer) => console.log('it rejected: ', answer))
