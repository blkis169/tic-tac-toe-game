let td_array = Array.from(td);




let o = xoArray.filter(function(el){
return el === "O" ? el : ""

})

let  x = xoArray.filter(function(el){
return el === "X" ? el : ""

})



let empty_table = td_array.filter(function(el){
  return el.classList.contains("can_write") ? "valid":"somthing is worng";
})




function writingX(){
  empty_table.forEach(function(td){
    td.removeEventListener('click',writingO())
    let xarray = x.shift()
    td.textContent = xarray
  })
}


function writingO(){
  empty_table.forEach(function(td){
  td.removeEventListener('click',writingX())
  let oarray = o.shift()
  td.textContent = oarray
  })
}















withcomp.addEventListener('click', ()=>{

const computer = new Promise ((res,rej)=>{

    if (withcomp.classList.contains("mood-on")){
res(conctbar_computer_mood());
withfriend.removeEventListener('click', friend_mood)


}


else{
  rej("somthing is wrong")
}
})
.then(
(res)=>console.log(res),
(rej)=>console.log(rej)
)


})



