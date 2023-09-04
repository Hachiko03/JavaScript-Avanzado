const isLogged = true;
let randomNum = Math.random();

let promise = new Promise ((resolve, reject) => {
    if (isLogged === true) {
        resolve(randomNum)
    }   else {
        reject("Error pip... pip... User is not logged in")
    };
});

promise.then ((val) => console.log(val));
promise.catch ((err) => console.log(err));

function promise2 (inputNum) { 
    return new Promise ((resolve, reject) => {
    if (inputNum > 0.5) {
        resolve ({name: "John", age: 24});
    } else {
        reject (`Error pip... pip... 
        this number is not grater than 0.5`)
    }
})};

promise
.then((randomNum)=> {
    return promise2(randomNum);
})
.then ((result) => {
    console.log(result);
})

.catch((err) => console.error(err))