const show =() =>{
    document.getElementsByClassName("modalcontainer")[0].classList.add("show")
}
const hide = () => {
    document.getElementsByClassName("modalcontainer")[0].classList.remove("show")
}
const allowDrop=(event) => {
     event.preventDefault()
}
const drag=(event) =>{
    event.dataTransfer.setData("text",event.target.id)
}
const drop = (event)=>{
    event.preventDefault();
    const boxId = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(boxId))
}
const addTodo = () => {
    const titleInputValue = document.getElementById("title-input").value;
    const descriptionInputValue =
      document.getElementById("description-input").value;
    const statusInputValue = document.getElementById("status-input").value;
    const priorityInputValue =
      document.getElementById("priority-input").value;
      let boxString =""
      boxArray.forEach((el, i) => {
        boxString += `<<div class="boxIn flex row align_center">
        <div class="boxIn-img flex justify_center align_center">
          <img src="./imgs/check.png" alt="" />
        </div>
        <div class="boxIn-main flex column">
          <div class="boxIn-mainHeader">${titleInputValue}</div>
          <div class="boxIn-mainMidle">${descriptionInputValue}</div>
          <div class="boxIn-mainPriority">${priorityInputValue}</div>
        </div>
        <div class="boxIn-mainButtons flex column justify_center">
          <button class="boxIn-mainBotton flex align_center justify_center">
            <img src="./imgs/close.png" alt="" />
          </button>
          <button class="boxIn-mainBotton flex align_center justify_center">
            <img src="./imgs/edit.png" alt="" />
          </button>
        </div>
      </div>`});
      document.getElementById("boxIn").innerHTML = boxString;
  };
  
;
