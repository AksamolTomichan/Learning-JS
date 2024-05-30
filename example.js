console.log("Hello world")

//Variables
let example ="Hii, Aksa"
console.log(example)

//Operators
console.log(10+5)
console.log("Hi" + "Sajo")
console.log(100===100)

//functions
function combine(a,b,c){
    return(a*b/c)
}

console.log(combine(5,2,5))

function userform(a,b){

    return "Hi," + a + " hello" + b;
}

console.log(userform("Ammu", " whats up ?"))

//Arrow fn
 name => {
    console.log("Hello World")
}

//Spread op

const usname = ["Ammu", "Akku", "Achu"];

const username = ["Anjo", "Ponnu"];

const mergeuser = [...usname, ...username]
console.log(mergeuser)