

async function myFn(){
    
    let promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("done!")
        }, 1000)
    })

    let result = await promise
    console.log(result);
    
}
myFn()