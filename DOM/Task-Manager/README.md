# DOM Task Manager

A Task Manager project built using HTML, CSS and Vanilla JavaScript.

The main goal of this project is to practice DOM Manipulation concepts and understand how JavaScript interacts with HTML elements dynamically.

# Live Preview
🔗 https://dom-task-manager.vercel.app/

---

# Features

## Task Management

* Add Task
* Edit Task
* Delete Task
* Complete Task

## Search & Filter

* Search tasks in real time
* Filter tasks by category
* Supports:

  * Study
  * Work
  * Personal

## Task Counters

* Total Tasks
* Completed Tasks
* Pending Tasks

## Theme Toggle

* Light Mode
* Dark Mode

## Data Persistence

* Tasks are stored in Local Storage
* Data remains after page refresh
* Theme preference is also saved

---

# DOM Methods Used

## createElement()

Used to create HTML elements dynamically.

Example:

```javascript
const taskCard = document.createElement("div");
```

---

## createTextNode()

Used to create text nodes.

Example:

```javascript
const text = document.createTextNode("Learn DOM");
```

---

## append()

Used to append multiple elements.

Example:

```javascript
parent.append(child1, child2);
```

---

## appendChild()

Used to append a single child element.

Example:

```javascript
parent.appendChild(child);
```

---

## before()

Used to insert an element before another element.

Example:

```javascript
heading.before(message);
```

---

## after()

Used to insert an element after another element.

Example:

```javascript
taskCard.after(info);
```

---

## replaceWith()

Used during task editing.

Example:

```javascript
title.replaceWith(input);
```

---

## remove()

Used to delete elements from DOM.

Example:

```javascript
taskCard.remove();
```

---

# Attributes vs Properties

This project includes a separate section to demonstrate the difference between Attributes and Properties.

HTML:

```html
<input value="Dhruv">
```

Property:

```javascript
input.value
```

Returns the current value.

Attribute:

```javascript
input.getAttribute("value")
```

Returns the original HTML value.

Example:

Initial Value:

```text
Dhruv
```

User Changes Input:

```text
Patel
```

Result:

```javascript
input.value
```

Output:

```text
Patel
```

Result:

```javascript
input.getAttribute("value")
```

Output:

```text
Dhruv
```

---

# Data Attributes

Custom data attributes are used to store task information.

Example:

```html
<div
data-id="1"
data-status="pending"
data-category="Study">
</div>
```

Used for:

* Task Identification
* Status Tracking
* Category Filtering

---

# Dataset

Dataset is used to access custom data attributes.

Example:

```javascript
task.dataset.id
task.dataset.status
task.dataset.category
```

---

# Event Delegation

Instead of attaching separate event listeners to every button, a single listener is attached to the parent container.

Example:

```javascript
taskContainer.addEventListener("click", function(event) {

});
```

Benefits:

* Better Performance
* Less Code
* Works for Dynamically Created Elements

---

# Event Bubbling

Event Bubbling means an event moves from child to parent.

Structure:

```text
Grandparent
    Parent
        Child
```

Flow:

```text
Child
↑
Parent
↑
Grandparent
```

Output:

```text
Bubbling -> Child
Bubbling -> Parent
Bubbling -> Grandparent
```

---

# Event Capturing

Event Capturing is the opposite of Bubbling.

Flow:

```text
Grandparent
↓
Parent
↓
Child
```

Output:

```text
Capturing -> Grandparent
Capturing -> Parent
Capturing -> Child
```

Capturing is enabled using:

```javascript
addEventListener("click", handler, true);
```

---

# Browser Rendering Pipeline

This section demonstrates how browsers render web pages.

## Step 1: HTML Parsing

Browser reads HTML.

Example:

```html
<h1>Hello</h1>
```

---

## Step 2: Tokenization

HTML is converted into tokens.

Example:

```text
Start Tag
Text
End Tag
```

---

## Step 3: DOM Tree

Browser converts HTML into a DOM Tree.

Example:

```text
Document
│
└── html
    │
    └── body
         │
         └── h1
```

---

## Step 4: CSS Parsing

Browser reads CSS rules.

Example:

```css
h1{
 color:red;
}
```

---

## Step 5: CSSOM Tree

Browser creates CSS Object Model.

---

## Step 6: Render Tree

Browser combines:

```text
DOM Tree
+
CSSOM Tree
```

to create:

```text
Render Tree
```

Render Tree is used for painting elements on screen.

---

# Local Storage

Local Storage is used to save tasks.

Save Data:

```javascript
localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
);
```

Load Data:

```javascript
localStorage.getItem("tasks");
```

Benefits:

* Data remains after refresh
* No backend required
* Easy to use

---

# JSON Methods

## JSON.stringify()

Converts JavaScript objects into strings.

Example:

```javascript
JSON.stringify(tasks);
```

---

## JSON.parse()

Converts strings back into JavaScript objects.

Example:

```javascript
JSON.parse(data);
```

---

# DocumentFragment

DocumentFragment is used while loading tasks.

Instead of:

```javascript
container.append(task1);
container.append(task2);
container.append(task3);
```

Tasks are first added into a fragment:

```javascript
const fragment =
document.createDocumentFragment();
```

Then appended once:

```javascript
container.append(fragment);
```

Benefits:

* Better Performance
* Fewer DOM Reflows
* Faster Rendering

---

# Project Structure

```text
project/

│
├── index.html
├── style.css
├── media.css
├── script.js
│
└── README.md
```

---

# Concepts Covered

* DOM Manipulation
* Dynamic Element Creation
* Event Handling
* Event Delegation
* Event Bubbling
* Event Capturing
* Attributes vs Properties
* Dataset
* Local Storage
* Theme Toggle
* Search Functionality
* Category Filtering
* Task Counters
* Browser Rendering Pipeline
* DocumentFragment

---

# Conclusion

This project helped me understand how JavaScript interacts with the DOM and how modern web applications manage dynamic content without using any framework. It also improved my understanding of event propagation, browser rendering, local storage and DOM optimization techniques.
