const API_URL = "http://localhost:3000/api";

/* REGISTER */
async function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, role })
  });

  const data = await res.json();
  alert(data.message);
}

/* LOGIN */
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (data.token) {
    sessionStorage.setItem("token", data.token);
    alert("Login successful!");
  } else {
    alert(data.message);
  }
}

/* PROFILE */
async function getProfile() {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`${API_URL}/profile`, {
    headers: { Authorization: token }
  });

  const data = await res.json();
  alert(JSON.stringify(data, null, 2));
}

/* ADMIN */
async function adminDashboard() {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`${API_URL}/admin/dashboard`, {
    headers: { Authorization: token }
  });

  const data = await res.json();
  alert(data.message);
}