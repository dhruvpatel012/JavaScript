// getting elements

const taskTitle = document.getElementById("taskTitle");
const category = document.getElementById("category");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");

// attribute demo

const demoInput = document.getElementById("demoInput");
const checkAttributeBtn = document.getElementById("checkAttributeBtn");

// unique task id

let taskId = 1;

// add task

addTaskBtn.addEventListener("click", addTask);

// attribute demo

checkAttributeBtn.addEventListener("click", function () {
  console.log("Property Value:");
  console.log(demoInput.value);

  console.log("Attribute Value:");
  console.log(demoInput.getAttribute("value"));
});

// event delegation

taskContainer.addEventListener("click", function (event) {
  // delete task

  if (event.target.classList.contains("delete-btn")) {
    const taskCard = event.target.closest(".task-card");

    taskCard.remove();
  }

  // complete task

  if (event.target.classList.contains("complete-btn")) {
    const taskCard = event.target.closest(".task-card");

    taskCard.classList.toggle("completed");

    if (taskCard.dataset.status === "pending") {
      taskCard.dataset.status = "completed";
    } else {
      taskCard.dataset.status = "pending";
    }

    // after() demo

    const info = document.createElement("small");

    info.textContent = "Status Changed";

    taskCard.after(info);

    setTimeout(() => {
      info.remove();
    }, 1500);
  }

  // edit task

  if (event.target.classList.contains("edit-btn")) {
    const taskCard = event.target.closest(".task-card");

    const title = taskCard.querySelector("h3");

    const oldTitle = title.textContent;

    const editInput = document.createElement("input");

    editInput.value = oldTitle;

    // replace heading with input

    title.replaceWith(editInput);

    event.target.textContent = "Save";

    event.target.classList.remove("edit-btn");

    event.target.classList.add("save-btn");
  }

  // save task
  else if (event.target.classList.contains("save-btn")) {
    const taskCard = event.target.closest(".task-card");

    const editInput = taskCard.querySelector("input");

    const updatedTitle = editInput.value.trim();

    if (updatedTitle === "") {
      alert("Task title cannot be empty");

      return;
    }

    const newHeading = document.createElement("h3");

    const titleText = document.createTextNode(updatedTitle);

    newHeading.appendChild(titleText);

    // replace input with heading

    editInput.replaceWith(newHeading);

    // before() demo

    const message = document.createElement("p");

    message.textContent = "Task Updated Successfully";

    message.classList.add("update-message");

    newHeading.before(message);

    setTimeout(() => {
      message.remove();
    }, 1500);

    event.target.textContent = "Edit";

    event.target.classList.remove("save-btn");

    event.target.classList.add("edit-btn");
  }
});

// add task function

function addTask() {
  const titleValue = taskTitle.value;

  const categoryValue = category.value;

  if (titleValue.trim() === "") {
    alert("Please enter task title");

    return;
  }

  // task card

  const taskCard = document.createElement("div");

  taskCard.classList.add("task-card");

  taskCard.setAttribute("data-id", taskId);

  taskCard.setAttribute("data-status", "pending");

  taskCard.setAttribute("data-category", categoryValue);

  // title

  const heading = document.createElement("h3");

  const headingText = document.createTextNode(titleValue);

  heading.appendChild(headingText);

  // category

  const categoryText = document.createElement("p");

  const categoryNode = document.createTextNode(categoryValue);

  categoryText.appendChild(categoryNode);

  // actions

  const actions = document.createElement("div");

  actions.classList.add("task-actions");

  // edit button

  const editBtn = document.createElement("button");

  editBtn.classList.add("edit-btn");

  editBtn.appendChild(document.createTextNode("Edit"));

  // complete button

  const completeBtn = document.createElement("button");

  completeBtn.classList.add("complete-btn");

  completeBtn.appendChild(document.createTextNode("Complete"));

  // delete button

  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");

  deleteBtn.appendChild(document.createTextNode("Delete"));

  actions.append(editBtn, completeBtn, deleteBtn);

  taskCard.append(heading, categoryText, actions);

  taskContainer.appendChild(taskCard);

  console.log(taskCard.dataset.id);

  console.log(taskCard.dataset.status);

  console.log(taskCard.dataset.category);

  taskTitle.value = "";

  taskId++;
}
