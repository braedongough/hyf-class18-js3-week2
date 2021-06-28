console.log('exercise 4')

const resolvedValue = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello')
        // reject('REJECTED!')
    }, 4000)
})
    .then((res) => console.log(res))
    .catch((e) => console.log(e))

console.log(resolvedValue) // Why is this not 'hello'?
