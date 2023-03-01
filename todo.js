// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos);
}

const populateTodos = () => {
  let orderedList = document.querySelector('#todo-list')
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index];
    const listItem = document.createElement('li')
    const text = document.createTextNode(todo.title)
    listItem.appendChild(text)
    orderedList.appendChild(listItem)
  }

  let ol = document.getElementById("todo-list");
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const toDo = arrayOfTodos[index];
    let li = document.createElement("li");
    const title = document.createTextNode(toDo.title);
    li.appendChild(title);
    ol.appendChild(li);
    }}
  let removeTodos = () => {
    
  }