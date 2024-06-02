// DOMContentLoaded 이벤트가 발생하면 실행될 함수를 설정
document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.querySelector("#login-form");
  const usernameInput = document.querySelector("#username");
  const todoContainer = document.querySelector("#todo-container");
  const logoutButton = document.querySelector("#logout-button");

  const USERNAME_KEY = "username";

  // 로그인 폼 제출시 호출되는 함수
  function onLoginSubmit(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 방지
    const username = usernameInput.value;
    console.log(`Saving username: ${username}`); // 콘솔 로그 추가
    localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 사용자명을 저장
    showTodoContainer(); // 투두 리스트 컨테이너 표시
  }

  // 투두리스트 컨테이너 표시 함수
  function showTodoContainer() {
    todoContainer.style.display = "block";
    loginForm.style.display = "none";
  }

  logoutButton.addEventListener("click", () => {
    console.log("Removing username from localStorage"); // 콘솔 로그 추가
    localStorage.removeItem(USERNAME_KEY); // 로컬 스토리지에서 사용자명을 제거
    todoContainer.style.display = "none"; // 투두리스트 컨테이너를 숨김
    loginForm.style.display = "block"; // 로그인 폼을 다시 표
  });

  loginForm.addEventListener("submit", onLoginSubmit); // 로그인 폼 제출시 onLoginSubit 함수 호출
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  console.log(`Loaded username: ${savedUsername}`); // 콘솔 로그 추가

  if (savedUsername !== null) {
    showTodoContainer(); // 저장된 사용자명이 있으면 투두리스트 컨테이너를 표시
  }
});
