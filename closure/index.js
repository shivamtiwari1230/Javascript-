function outer(){
    let username = "hitesh"

    function inner(){
        console.log("inner", username);
        
    }

    function innerTwo(){
        console.log("innerTwo", username);
        
    }

    inner()
    innerTwo()
}
outer()