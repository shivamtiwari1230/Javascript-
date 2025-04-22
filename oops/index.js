
function createCounter (){
    let count = 0

    return function increment (){
        count++
        return count
    }
}

const counter = createCounter()
console.log(counter());



