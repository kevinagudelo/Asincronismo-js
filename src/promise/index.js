
// COMO FUNCIONAN LAS PROMSEAS
const somethingsWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve('hey')
        }else {
            reject('error')
        }
    })
}


 // esta promesa en el reject da mas informacion sobre el error 
somethingsWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err))

const somethingsWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(()=> {
                resolve('True')
            },2000)
        } else {
            const error = new Errpr ('Error')
            reject (error)
        }
    })
}
somethingsWillHappen2()
.then(response => console.log(response))
.catch(err => console.log(err))

// Llamar varias promesas
Promise.all([somethingsWillHappen(), somethingsWillHappen2()])
.then(response => {
    console.log('Array of result', response)
})
.catch(err => console.log(err))