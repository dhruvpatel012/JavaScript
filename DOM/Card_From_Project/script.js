const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const url = document.querySelector("#img-url");
const users = document.querySelector(".users-container");

const userData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@gmail.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    id: 2,
    name: "Emma Johnson",
    email: "emma@gmail.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@gmail.com",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
];

let editingIndex = null;

const UI = () => {
  users.innerHTML = "";

  userData.forEach((elem, index) => {
    users.innerHTML += `
      <div class="user-card">

        <div class="profile-img">
          <img src="${elem.image}" alt="image here">
        </div>

        <div class="user-info">
          <h3>Name - ${elem.name}</h3>
          <p>Email - ${elem.email}</p>
        </div>

        <div class="card-btns">
          <button class="edit-btn" onclick="editCard(${index})">
            Edit
          </button>

          <button class="delete-btn" onclick="deleteCard(${index})">
            Delete
          </button>
        </div>

      </div>
    `;
  });
};

UI();

form.addEventListener("submit", (events) => {
  events.preventDefault();

  let inp1 = name.value;
  let inp2 = email.value;
  let image = url.value;

  if (inp1.trim() === "" || inp2.trim() === "" || image.trim() === "") {
    return;
  }

  if (editingIndex === null) {
    // CREATE
    userData.push({
      id: Date.now(),
      name: inp1,
      email: inp2,
      image,
    });
  } 
  
  else {
    // UPDATE
    userData[editingIndex].name = inp1;
    userData[editingIndex].email = inp2;
    userData[editingIndex].image = image;

    editingIndex = null;
  }

  UI();

  form.reset();
});

function deleteCard(index) {
  userData.splice(index, 1);
  UI();
}

function editCard(index) {

  editingIndex = index;

  name.value = userData[index].name;
  email.value = userData[index].email;
  url.value = userData[index].image;
}
