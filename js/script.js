const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const toggleBtn = document.getElementById("toggleDark");
const body = document.body;

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = " ❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";
});

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
