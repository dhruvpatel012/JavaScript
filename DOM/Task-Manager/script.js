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

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const childBtn = document.getElementById("childBtn");

let taskId = 1;

// load saved data

loadTasks();
loadTheme();

// add task

addTaskBtn.addEventListener("click", addTask);

// theme

themeBtn.addEventListener("click", toggleTheme);

// search

searchInput.addEventListener("input", filterTasks);

// filter

filterCategory.addEventListener("change", filterTasks);

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

    saveTasks();
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

    saveTasks();
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

    newHeading.appendChild(document.createTextNode(updatedTitle));

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

    filterTasks();

    saveTasks();
  }
});

// add task

function addTask() {
  const titleValue = taskTitle.value;

  const categoryValue = category.value;

  if (titleValue.trim() === "") {
    alert("Please enter task title");

    return;
  }

  createTaskCard({
    id: taskId,
    title: titleValue,
    category: categoryValue,
    status: "pending",
  });

  taskTitle.value = "";

  taskId++;

  updateCounters();

  filterTasks();

  saveTasks();
}

// create card

function createTaskCard(task) {
  const taskCard = document.createElement("div");

  taskCard.classList.add("task-card");

  taskCard.dataset.id = task.id;

  taskCard.dataset.status = task.status;

  taskCard.dataset.category = task.category;

  if (task.status === "completed") {
    taskCard.classList.add("completed");
  }

  const heading = document.createElement("h3");

  heading.appendChild(document.createTextNode(task.title));

  const categoryText = document.createElement("p");

  categoryText.appendChild(document.createTextNode(task.category));

  const actions = document.createElement("div");

  actions.classList.add("task-actions");

  const editBtn = document.createElement("button");

  editBtn.classList.add("edit-btn");

  editBtn.textContent = "Edit";

  const completeBtn = document.createElement("button");

  completeBtn.classList.add("complete-btn");

  completeBtn.textContent = "Complete";

  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");

  deleteBtn.textContent = "Delete";

  actions.append(editBtn, completeBtn, deleteBtn);

  taskCard.append(heading, categoryText, actions);

  taskContainer.appendChild(taskCard);
}

// save tasks

function saveTasks() {
  const taskCards = document.querySelectorAll(".task-card");

  const tasks = [];

  taskCards.forEach(function (task) {
    tasks.push({
      id: task.dataset.id,

      title: task.querySelector("h3")?.textContent || "",

      category: task.dataset.category,

      status: task.dataset.status,
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load tasks

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const fragment = document.createDocumentFragment();

  savedTasks.forEach(function (task) {
    const taskCard = document.createElement("div");

    taskCard.classList.add("task-card");

    taskCard.dataset.id = task.id;

    taskCard.dataset.status = task.status;

    taskCard.dataset.category = task.category;

    if (task.status === "completed") {
      taskCard.classList.add("completed");
    }

    const heading = document.createElement("h3");

    heading.textContent = task.title;

    const categoryText = document.createElement("p");

    categoryText.textContent = task.category;

    const actions = document.createElement("div");

    actions.classList.add("task-actions");

    const editBtn = document.createElement("button");

    editBtn.classList.add("edit-btn");

    editBtn.textContent = "Edit";

    const completeBtn = document.createElement("button");

    completeBtn.classList.add("complete-btn");

    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("delete-btn");

    deleteBtn.textContent = "Delete";

    actions.append(editBtn, completeBtn, deleteBtn);

    taskCard.append(heading, categoryText, actions);

    fragment.append(taskCard);

    taskId = Math.max(taskId, Number(task.id) + 1);
  });

  taskContainer.append(fragment);

  updateCounters();
}

// save theme

function toggleTheme() {
  document.body.classList.toggle("dark");

  const currentTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  document.body.dataset.theme = currentTheme;

  themeBtn.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

  localStorage.setItem("theme", currentTheme);
}

// load theme

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    document.body.dataset.theme = "dark";

    themeBtn.textContent = "Light Mode";
  }
}

// counters

function updateCounters() {
  const allTasks = document.querySelectorAll(".task-card");

  const completed = document.querySelectorAll('[data-status="completed"]');

  totalTasks.textContent = allTasks.length;

  completedTasks.textContent = completed.length;

  pendingTasks.textContent = allTasks.length - completed.length;
}

// search + filter

function filterTasks() {
  const searchValue = searchInput.value.toLowerCase();

  const selectedCategory = filterCategory.value;

  const tasks = document.querySelectorAll(".task-card");

  tasks.forEach(function (task) {
    const title = task.querySelector("h3")?.textContent.toLowerCase() || "";

    const category = task.dataset.category;

    const matchTitle = title.includes(searchValue);

    const matchCategory =
      selectedCategory === "All" || category === selectedCategory;

    if (matchTitle && matchCategory) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// event bubbling demo

grandparent.addEventListener("click", function () {
  console.log("Bubbling -> Grandparent");
});

parent.addEventListener("click", function () {
  console.log("Bubbling -> Parent");
});

childBtn.addEventListener("click", function () {
  console.log("Bubbling -> Child");
});

// event capturing demo

grandparent.addEventListener(
  "click",
  function () {
    console.log("Capturing -> Grandparent");
  },
  true,
);

parent.addEventListener(
  "click",
  function () {
    console.log("Capturing -> Parent");
  },
  true,
);

childBtn.addEventListener(
  "click",
  function () {
    console.log("Capturing -> Child");
  },
  true,
);
