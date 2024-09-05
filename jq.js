$(document).ready(() => {
  const div = $("#container");
  // div.css('color','blue') //if it has only one style

  // div.css({'color':'black','backgroundColor':'red'})
  //   const h1=$('<h1>')
  //   console.log(h1);
  //   h1.text('new text')
  //   div.append(h1)
  // $(document.body).append(h1)
  // div.remove()
  // const value = $("#input").val();
  const input = $("#input");
  const add = $("#add");
  const ul = $("#ul");
  add.click(() => {
    const li = $("<li>");
    li.text(input.val());
    const rmv = $("<button>");
    rmv.text("remove");
    rmv.click(() => {
      li.remove();
    });
    const edit = $("<button>");
    edit.text("edit");
    edit.click(() => {
      rmv.remove();
      edit.remove();
      const newinput = $("<input>");
      const value = $("#input").val();
      newinput.val(value);
      const save = $("<button>");
      save.text("save");
      li.append(newinput);
      li.append(save);
      save.click(() => {
        const newvalue = newinput.val();
        li.text(newvalue);
        li.append(edit, rmv);
      });
    });
    ul.append(li);
    li.append(edit);
    li.append(rmv);
    input.val("");
  });

  // $(document.body).css({
  //   margin: "0",
  //   backgroundColor: "black",
  // });
  // const newinput = $("<input>");
  // const save=$("<button>")
  // newinput.val(value)
  // save.text('save')
  // save.click(()=>{
  //   const newvalue=newinput.val()
  //   $('#input').val(newvalue)
  //   save.remove()
  //   newinput.remove()
  // })
  // div.append(newinput,save)
});
