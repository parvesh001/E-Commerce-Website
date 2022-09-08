let xMarks = document.querySelectorAll(".remove");


xMarks.forEach((element, index)=>{
    element.addEventListener("click", element=>{
      let grandParentEl = element.currentTarget.parentElement.parentElement;
      grandParentEl.remove();
    })
    
})

