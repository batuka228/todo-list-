let boxArray = [];
const show = () => {
  document.getElementsByClassName("modalcontainer")[0].classList.add("show");
};
const hide = () => {
  document.getElementsByClassName("modalcontainer")[0].classList.remove("show");
};
const allowDrop = (event) => {
  event.preventDefault();
};
const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};
const drop = (event) => {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
};
const render = () => {
  let boxString = "";
  boxArray.forEach((el, i) => {
    boxString += `<div draggable="true" class="drag-section flex row align_center">
    <div class="flex boxIn-1">
      <div class="boxIn-img flex justify_center align_center">
        <img src="./imgs/check.png" alt="" />
      </div>
      <div class="boxIn-main flex column">
        <div class="boxIn-mainHeader">${el.title}</div>
        <div class="boxIn-mainMidle">${el.description}</div>
        <div class="boxIn-mainStatus">${el.status}</div>
        <div class="boxIn-mainPriority">${el.priority}</div>
      </div>
    </div>
    <div class="boxIn-mainButtons flex column justify_center">
      <button
        class="boxIn-mainBotton flex align_center justify_center"
      >
        <img src="./imgs/close.png" alt="" />
      </button>
      <button
        class="boxIn-mainBotton flex align_center justify_center"
      >
        <img src="./imgs/edit.png" alt="" />
      </button>
    </div>
  </div>`;
    switch (el.status) {
      case "done":
        document.getElementById("boxIn_todo").innerHTML = boxString;
        break;
      case "inprogress":
        document.getElementById("boxIn_Inprogress").innerHTML = boxString;
        break;
      case "stuck":
        document.getElementById("boxIn_Stuck").innerHTML = boxString;
        break;
      case "done":
        document.getElementById("boxIn_done").innerHTML = boxString;
      default:
        break;
    }
    console.log(typeof el.status);
  });
};

const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;
  const inputObj = {
    title: titleInputValue,
    Description: descriptionInputValue,
    status: statusInputValue,
    priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  render();
  hide();
};
const modalContainer = document.getElementsByClassName("modalContainer")[0];
window.onclick = function (event) {
  if (event.target == modalContainer) {
    modalContainer.classList.remove("show");
  }
};
