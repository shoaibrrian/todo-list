// DOM elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add event
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please write a task!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add to list
  taskList.appendChild(li);

  // Clear input
  input.value = "";
});
