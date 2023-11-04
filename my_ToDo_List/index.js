function ToDo(){
    const showDiv = document.createElement('div');
    showDiv.setAttribute('class','ToDoForm');
    toDoForm.appendChild(showDiv);
    const contDiv= document.createElement('div');
  contDiv.innerHTML = `<h1>${title.value}</h1>
  <p>${desc.value}</p>`  
  contDiv.setAttribute('id','toDo')  
  showDiv.appendChild(contDiv);
  const btn = document.createElement('Button');
  btn.setAttribute('class','del');
  btn.textContent = 'Delete';
  showDiv.appendChild(btn);
  btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(confirm('Are you sure to Delete')){
      showDiv.setAttribute('class','display');
   btn.textContent = '';
    }
  })
  searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i=0; i<=toDo.length; i++){
      if(search.value == toDo[i].firstChild.innerText){
       console.log(toDo[i].firstChild.innerText)
       toDo[i].parentElement.removeAttribute('class','TODoForm')
       toDo[i].parentElement.setAttribute('class','highlight');
        // toDo[i].parentElement.setAttribute('class','display')
      }
    }
  })
  }
    submit.addEventListener('click',(e)=>{
      e.preventDefault();
        localStorage.setItem("notes", [title.value, desc.value]);
      ToDo();
      title.value = '';
      desc.value  = '';
    }
    )
    