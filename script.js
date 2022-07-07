let inputElement=document.getElementById('input')
let formInput=document.getElementById('form')
let linkElem=document.querySelector('.link')
function removeattrobiout() {
    inputElement.removeAttribute('placeholder')
    console.log(inputElement.type)
    console.log(inputElement.getAttribute('id'))
}
formInput.addEventListener('submit',function(){
    console.log('submit')
})
inputElement.addEventListener('keydown', function(even){
    even.preventDefault()
  console.log(even)
})
linkElem.addEventListener('click',function(even){
   even.preventDefault()
})