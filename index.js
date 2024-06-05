
const addbtn = document.getElementById('add')

const notes= JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach(note=>{
        addnewnote(note)
    })
}

addbtn.addEventListener('click',()=>{
    addnewnote()

})
function addnewnote(text=''){
    const note = document.createElement('div')
    note.classList.add('notes')
    note.innerHTML= `<div class="tools">
    <button class="edit">
        <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="delete">
        <i class="fa-solid fa-trash"></i>
    </button>
</div>
<div class="main ${text?'':"hidden"}" ></div>
<textarea class=" ${text?"hidden":''}"></textarea>`
document.body.appendChild(note)

const editbtn= note.querySelector('.edit')
const dltbtn= note.querySelector('.delete')

const textarea= note.querySelector("textarea")
const main= note.querySelector(".main")
textarea.value=text
main.innerHTML= marked.parse(text);
editbtn.addEventListener( "click", ()=>{
    main.classList.toggle("hidden")
   textarea.classList.toggle("hidden")

})
textarea.addEventListener("input",(e)=>{
    const {value} = e.target;
    main.innerHTML= marked.parse(value);
    updatels()
    // DOMPurify.sanitize(marked(value));
})
dltbtn.addEventListener('click',()=>{
    
    note.remove();
    

    updatels()
})
    
    
}

function updatels(){
    const notestext= document.querySelectorAll('textarea');
    const storednotes= [];
    notestext.forEach(note=>{
        storednotes.push(note.value)
    })
    localStorage.setItem('notes',JSON.stringify(storednotes));
}