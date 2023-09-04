const isLogged = true;
let randomNum = Math.random();

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged == true) {
        resolve(console.log(randomNum));
      } else {
        reject("Error pip... pip... User is not logged in");
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
        reject(`Error pip... pip... 
        this number is not grater than 0.5`);
      }
    }, 1000);
  });
}

promise()
  .then(promise2)
  .catch((err) => console.log(err));
