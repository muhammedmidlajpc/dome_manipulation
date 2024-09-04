const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  const rmv = document.createElement("button");
  rmv.addEventListener("click", () => {
    li.remove();
  });
  const edit = document.createElement("button");

  edit.addEventListener("click", () => {
    rmv.remove()
    edit.remove()
    const newinput = document.createElement("input");
    newinput.value = li.textContent;
    li.textContent = "";
    
    const save = document.createElement("button");
    save.textContent = "save";
    li.append(newinput);
    li.append(save);
    save.addEventListener("click",()=>{
      const newvalue=newinput.value
      li.textContent=newvalue
      li.append(edit,rmv)
    })
  });

  edit.textContent = "edit";
  li.append(edit);

  rmv.textContent = "remove";
  li.append(rmv);

  ul.append(li);
  input.value = "";
});
