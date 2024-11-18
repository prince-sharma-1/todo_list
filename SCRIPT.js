document.getElementById("addTaskButton").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    // Create new list item
    const listItem = document.createElement("li");
  
    // Add task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);
  
    // Add action buttons
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("buttons");
  
    // Mark as Complete Button
    const completeButton = document.createElement("span");
    completeButton.textContent = "✔";
    completeButton.classList.add("mark-complete");
    completeButton.addEventListener("click", function () {
      listItem.classList.toggle("completed");
    });
    buttonGroup.appendChild(completeButton);
  
    // Delete Button
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "✖";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });
    buttonGroup.appendChild(deleteButton);
  
    listItem.appendChild(buttonGroup);
    taskList.appendChild(listItem);
  
    // Clear the input field
    taskInput.value = "";
  });
  