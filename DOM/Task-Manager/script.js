// getting elements

const taskTitle = document.getElementById("taskTitle");
const category = document.getElementById("category");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");

const demoInput = document.getElementById("demoInput");
const checkAttributeBtn = document.getElementById("checkAttributeBtn");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const themeBtn = document.getElementById("themeBtn");

let taskId = 1;

// add task

addTaskBtn.addEventListener("click", addTask);

// theme toggle

themeBtn.addEventListener("click", toggleTheme);

// attribute demo

checkAttributeBtn.addEventListener("click", function () {
  console.log("Property Value:");
  console.log(demoInput.value);

  console.log("Attribute Value:");
  console.log(demoInput.getAttribute("value"));
});

// event delegation

taskContainer.addEventListener("click", function (event) {
  // delete

  if (event.target.classList.contains("delete-btn")) {
    const taskCard = event.target.closest(".task-card");

    taskCard.remove();

    updateCounters();
  }

  // complete

  if (event.target.classList.contains("complete-btn")) {
    const taskCard = event.target.closest(".task-card");

    taskCard.classList.toggle("completed");

    if (taskCard.dataset.status === "pending") {
      taskCard.dataset.status = "completed";
    } else {
      taskCard.dataset.status = "pending";
    }

    const info = document.createElement("small");

    info.textContent = "Status Changed";

    taskCard.after(info);

    setTimeout(() => {
      info.remove();
    }, 1500);

    updateCounters();
  }

  // edit

  if (event.target.classList.contains("edit-btn")) {
    const taskCard = event.target.closest(".task-card");

    const title = taskCard.querySelector("h3");

    const oldTitle = title.textContent;

    const editInput = document.createElement("input");

    editInput.value = oldTitle;

    title.replaceWith(editInput);

    event.target.textContent = "Save";

    event.target.classList.remove("edit-btn");

    event.target.classList.add("save-btn");
  }

  // save
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

    editInput.replaceWith(newHeading);

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

  const taskCard = document.createElement("div");

  taskCard.classList.add("task-card");

  taskCard.setAttribute("data-id", taskId);

  taskCard.setAttribute("data-status", "pending");

  taskCard.setAttribute("data-category", categoryValue);

  const heading = document.createElement("h3");

  heading.appendChild(document.createTextNode(titleValue));

  const categoryText = document.createElement("p");

  categoryText.appendChild(document.createTextNode(categoryValue));

  const actions = document.createElement("div");

  actions.classList.add("task-actions");

  const editBtn = document.createElement("button");

  editBtn.classList.add("edit-btn");

  editBtn.appendChild(document.createTextNode("Edit"));

  const completeBtn = document.createElement("button");

  completeBtn.classList.add("complete-btn");

  completeBtn.appendChild(document.createTextNode("Complete"));

  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");

  deleteBtn.appendChild(document.createTextNode("Delete"));

  actions.append(editBtn, completeBtn, deleteBtn);

  taskCard.append(heading, categoryText, actions);

  taskContainer.appendChild(taskCard);

  taskTitle.value = "";

  taskId++;

  updateCounters();
}

// counter function

function updateCounters() {
  const allTasks = document.querySelectorAll(".task-card");

  const completed = document.querySelectorAll('[data-status="completed"]');

  totalTasks.textContent = allTasks.length;

  completedTasks.textContent = completed.length;

  pendingTasks.textContent = allTasks.length - completed.length;
}

// theme toggle

function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.body.dataset.theme = "dark";

    themeBtn.textContent = "Light Mode";
  } else {
    document.body.dataset.theme = "light";

    themeBtn.textContent = "Dark Mode";
  }

  console.log(document.body.dataset.theme);
}
