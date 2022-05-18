const doSomthingAsync = () => {
    return new Promise ((resolve, reject)=> {
        (true)
        ? setTimeout (() => resolve ('Do someting Async'), 3000)
        : reject(new Error('test Error'))
    });
}

// llamar funcion pero capturando errores

const anotherFunction = async () => {
    try {
        const something = await doSomthingAsync();
        console.log(something)
    }catch(error){
        console.error(error)
    }
}

console.log('before1')
anotherFunction()
console.log('after1')