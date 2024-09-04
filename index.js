const btn = document.getElementById("btn");
const element = document.getElementsByClassName("container")[0];
const newelement = document.createElement("h1");
const text = document.createElement("p");
text.textContent = "hello";
element.append(text);
newelement.textContent = "new text";
btn.textContent = "change color";
btn.addEventListener("click", () => {
  element.append(newelement);
  text.style.color = "red";
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
});
