const list = [1, 2, 3, 1, 2, 5, 1, 4, 6, 3, 2];
const duplicates = list.filter((ele, idx) => {
  return list.indexOf(ele) === idx;
  console.log(ele);
  
});
console.log(duplicates);
