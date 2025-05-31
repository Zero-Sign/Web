function sayHello() {
  const name = document.getElementById('nameInput').value;
  const greetingPara = document.getElementById('greeting');
  
  if (name.trim() !== "") {
    greetingPara.textContent = `Hello ${name}!`;
  } else {
    greetingPara.textContent = "Please enter your name.";
  }
}
