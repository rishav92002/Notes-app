const edit= document.querySelector('.edit')
const dlt= document.querySelector('.delete')
const notes= document.querySelector(".notes")
const textarea= notes.querySelector("textarea")
const main= notes.querySelector(".main")
edit.addEventListener( "click", ()=>{
    main.classList.toggle("hidden")
   textarea.classList.toggle("hidden")

})