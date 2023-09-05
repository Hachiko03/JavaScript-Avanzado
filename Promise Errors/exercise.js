class notLoggedIn extends Error {
  constructor(err) {
    super(err);
    this.name = "NotLoggedInError";
  }
}

class RandomNumError extends Error {
  constructor(err) {
    super(err);
    this.name = "RandomNumberError";
  }
}

const isLogged = true;
let randomNum = Math.random();

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged == true) {
        resolve(console.log(randomNum));
      } else {
        reject(
          new notLoggedIn()
        );
      }
    }, 1000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNum > 0.5) {
        let obj = { name: "John", age: 24 };
        resolve(console.log(obj));
      } else {
        reject(
          new RandomNumError()
        );
      }
    }, 1000);
  });
}

promise()
  .then(promise2)
  .catch((err) => {
    if (err instanceof notLoggedIn) {
      console.log("User is not logged in.");
    } else if (err instanceof RandomNumError) {
      console.log("Random number is not greater than 0.5.");
    } else {
      console.log("An unknown error occurred.");
    }
  })
  .finally(() => console.log("Promise chaining, end here"));
