// const panel = document.getElementById("panel");
// const addButton = document.getElementById("add-button");
// const toggleButton = document.getElementById("toggle-button");

// addButton.addEventListener("click", () => {
//   panel.style.display = "none";
//   toggleButton.style.display = "block";
// });

// toggleButton.addEventListener("click", () => {
//   panel.style.display = "flex";
//   toggleButton.style.display = "none";
// });
const panel = document.getElementById("panel");
const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const itemList = document.querySelector(".item-list");
const plusButton = document.getElementById("plus-button");


// Buttons 
const toDoButton = document.querySelector(".navigation button:first-child");
const doneButton = document.querySelector(".navigation button:nth-child(2)");
const checkboxes = document.querySelectorAll(".form-check input");
const trashButton = document.querySelector(".navigation button:last-child");
const deletedElements = [];

// logic to buttons 

toDoButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    if (!checkbox.checked) {
      checkbox.parentElement.style.display = "block";
    } else {
      checkbox.parentElement.style.display = "none";
    }
  });
});

doneButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentElement.style.display = "block";
    } else {
      checkbox.parentElement.style.display = "none";
    }
  });
});
trashButton.addEventListener("click", () => {
  deletedElements.forEach((element) => {
    element.style.display = "block";
  });
});
// Panel Window Logic == Adding Checkboxes in the Nfactorial To-Do List Project 
addButton.addEventListener("click", () => {
  // Get the task text from the input
  const taskText = taskInput.value;
  // Create a new div element for the checkbox
  const newItem = document.createElement("div");
  newItem.classList.add("form-check");

  // Create the colon element
  const colon = document.createElement("span");
  colon.innerText = ":";
  colon.addEventListener("click", () => {
    // Show the pop-up window

    const deleteAllText = document.createElement("div");
    deleteAllText.innerText = "Remove";

    const popUp = document.createElement("div");
    popUp.style.display = "flex";
    popUp.style.flexDirection = "column";
    popUp.style.alignItems = "flex-start";
    popUp.style.padding = "12px 0px 12px 4px";
    popUp.style.gap = "10px";
    popUp.style.position = "absolute";
    popUp.style.width = "240px";
    popUp.style.height = "78px";
    popUp.style.left = "56px";
    popUp.style.top = "658px";
    popUp.style.background = "#E4E6E7";
    popUp.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.16)";
    popUp.style.borderRadius = "12px";
    popUp.innerText = "Delete All";
    popUp.appendChild(deleteAllText);
    popUp.addEventListener("click", () => {
      // Remove the checkbox item
      newItem.parentElement.removeChild(newItem);
      // Remove the pop-up window
      popUp.parentElement.removeChild(popUp);
    });
    document.body.appendChild(popUp);
  });
  newItem.appendChild(colon);

  plusButton.addEventListener("click", () => {
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
  panel.style.display = "flex";

  // Create the checkbox input element
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("form-check-input");
  newItem.appendChild(checkboxInput);

  // Create the label element
  const label = document.createElement("label");
  label.classList.add("form-check-label");
  label.innerText = taskText;
  newItem.appendChild(label);

  // Add the new item to the list
  itemList.appendChild(newItem);

  // Clear the task input
  taskInput.value = "";
});


particlesJS.load("particles-container", "path/to/particles.json", function() {
  console.log("particles.js loaded - callback");
});