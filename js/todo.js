document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector("#todo-list");
  const newTodoInput = document.querySelector("#todo-input");
  const addButton = document.querySelector("#add-button");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // 투두리스트를 렌더링하는 함수
  function renderTodos() {
    todoList.innerHTML = ""; // 기존 투두리스트 내용을 비웁니다.
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      if (todo.completed) {
        li.classList.add("completed");
      }
      li.addEventListener("click", () => {
        todo.completed = !todo.completed;
        renderTodos();
      });
      todoList.appendChild(li);
    });
    localStorage.setItem("todos", JSON.stringify(todos)); // 로컬 스토리지에 투두리스트를 저장합니다.
  }

  // 새로운 To-Do 항목을 추가하는 함수
  function addTodo() {
    const title = newTodoInput.value;
    if (title.trim()) {
      const newTodo = {
        id: todos.length + 1,
        title: title.trim(),
        completed: false,
      };
      todos.push(newTodo);
      renderTodos();
      newTodoInput.value = "";
    }
  }

  addButton.addEventListener("click", addTodo);

  renderTodos();
});
