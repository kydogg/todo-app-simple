// JavaScript for Adding Tasks in a Todo List Application

// Grabbing HTML elements for interaction
const inputBox = document.getElementById("input-box"); // Input box where users enter new tasks
const listContainer = document.getElementById("list-container"); // Container where new tasks will be listed

// Function to add a new task
function addTask() {
	// Check if the input box is empty
	if (inputBox.value.trim() === "") {
		// The .trim() method removes whitespace from both ends of a string
		alert("Please write something"); // Alert the user to enter a task if the input box is empty
	} else {
		let listItem = document.createElement("li"); // Create a new list item (<li>) element for the task
		listItem.innerHTML = inputBox.value; // Set the content of the list item to the input value
		listContainer.appendChild(listItem); // Add the new list item to the list container
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		listItem.appendChild(span);
	}

	inputBox.value = "";
}
