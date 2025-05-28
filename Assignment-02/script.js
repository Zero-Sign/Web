let isBulbOn = false;
let clickCounter = 0;

function turnBulbOn() {
  document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif";
  isBulbOn = true;
}

function turnBulbOff() {
  document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif";
  isBulbOn = false;
}

function toggleBulb() {
  isBulbOn ? turnBulbOff() : turnBulbOn();
}

function toggleCheckboxBulb() {
  const checkbox = document.getElementById("bulbCheckbox");
  checkbox.checked ? turnBulbOn() : turnBulbOff();
}

function countAndToggle() {
  clickCounter++;
  toggleBulb();
  document.getElementById("clickCount").textContent = clickCounter;
}

// Save user and update display
function saveUser() {
  const id = document.getElementById("idInput").value.trim();
  const name = document.getElementById("nameInput").value.trim();

  if (id === "" || name === "") {
    alert("Please enter both ID and Name.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({ id, name });
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("idInput").value = "";
  document.getElementById("nameInput").value = "";

  displayUsers();
}

// Display all users using <h1>, <p>, <div>
function displayUsers() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const area = document.getElementById("userDisplayArea");
  area.innerHTML = "";

  users.forEach(user => {
    const container = document.createElement("div");
    container.style.margin = "20px";
    container.style.border = "1px solid #ccc";
    container.style.padding = "10px";
    container.style.borderRadius = "10px";
    container.style.backgroundColor = "#f9f9f9";

    const h1 = document.createElement("h1");
    h1.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = "ID: " + user.id;

    const div = document.createElement("div");
    div.textContent = `Welcome, ${user.name} (${user.id})`;
    div.style.fontWeight = "bold";

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(div);
    area.appendChild(container);
  });
}

// Delete all saved users
function clearAllUsers() {
  if (confirm("Are you sure you want to delete all entries?")) {
    localStorage.removeItem("users");
    displayUsers();
  }
}

// Show time
function updateTime() {
  const now = new Date().toLocaleString();
  document.getElementById("header-time").textContent = "Header Time: " + now;
  document.getElementById("footer-time").textContent = "Footer Time: " + now;
}

setInterval(updateTime, 1000);
updateTime();
displayUsers();
