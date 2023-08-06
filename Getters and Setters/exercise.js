class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;

  constructor (firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  set firstName (newFirstName){
    this.#firstName = newFirstName;
  }

  set lastName (newLastName){
    this.#lastName = newLastName;
  }

  set age (newAge){
    this.#age = newAge;
  }

  get fullName (){
    return (this.#firstName + " " + this.#lastName);
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);