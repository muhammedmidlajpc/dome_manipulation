const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent=input.value
  const rmv=document.createElement('button')
  rmv.addEventListener("click",()=>{
    li.remove()
  
    })
    const edit=document.createElement('button')
  edit.addEventListener("click",()=>{
      li.edit()
    edit.textContent="edit"
    li.append(edit)
  })
  rmv.textContent="remove"
  li.append(rmv)

  ul.append(li);
  input.value=""
});
