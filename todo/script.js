const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to save the list to local storage
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data") || "";
	// Re-attach event listeners for delete buttons and check marks after tasks are shown
	document.querySelectorAll("li").forEach((item) => {
		item.querySelector("span").addEventListener("click", function () {
			this.parentElement.remove();
			saveData();
		});
		item.addEventListener("click", function () {
			this.classList.toggle("checked");
			saveData();
		});
	});
}

// Function to add a new task
function addTask() {
	if (inputBox.value.trim() === "") {
		alert("You must write something!");
	} else {
		let li = document.createElement("li");
		li.textContent = inputBox.value; // It's safer to use textContent to prevent HTML injection
		listContainer.appendChild(li);

		let span = document.createElement("span");
		span.textContent = "\u00D7";
		span.className = "delete"; // Use class for styling and targeting
		li.appendChild(span);

		// Add event listeners to new elements
		span.addEventListener("click", function () {
			this.parentElement.remove();
			saveData();
		});

		li.addEventListener("click", function () {
			this.classList.toggle("checked");
			saveData();
		});

		inputBox.value = ""; // Clear the input box after adding the task
		saveData(); // Save the updated list to local storage
	}
}

// Event listener for adding a task when the Enter key is pressed
inputBox.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		addTask();
	}
});

// Show tasks when the application is loaded
showTask();

// Add new task on button click
document.getElementById("add-btn").addEventListener("click", addTask);
