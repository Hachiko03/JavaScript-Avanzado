const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveData() {
  localStorage.setItem("user", JSON.stringify(user));
}
