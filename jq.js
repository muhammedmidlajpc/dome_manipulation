$(document).ready(() => {
  const div = $("#container");
  //   div.css('color','blue') //if it has only one style

  //   div.css({'color':'black','backgroundColor':'red'})
  //   const h1=$('<h1>')
  //   console.log(h1);
  //   h1.text('new text')
  //   div.append(h1)
  // $(document.body).append(h1)
  // div.remove()
  const value = $("#input").val();
  const newinput = $("<input>");
  const save=$("<button>")
  newinput.val(value)
  save.text('save')
  save.click(()=>{
    const newvalue=newinput.val()
    $('#input').val(newvalue)
    save.remove()
    newinput.remove()
  })
  div.append(newinput,save)
});
