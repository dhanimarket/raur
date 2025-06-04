
const users = [
  { username: "robi", password: "123", name: "Bro Bi", points: 150 },
  { username: "dhani", password: "456", name: "Dhani", points: 80 }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Username atau password salah!";
  }
});
