const number = 15;

let promise = new Promise ((resolve, reject) => {
    if (number > 10) {
        resolve (number);
    } else {
        reject (`${number} is too small`);
    }
});

promise.then ((number) => console.log(number));
promise.catch ((err) => console.log(err));