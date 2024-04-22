let taskList = []; 

function addTaskToList(taskName, taskDue){
  let task = { name: taskName, due: taskDue, complete: false };
  taskList.push(task);
}

function removeTask(taskName){
  taskList = taskList.filter(task => task.name !== taskName);
}

function displayAllTasks(){
  console.log("All Tasks:");
  taskList.forEach(task => {
    console.log(`Task: ${task.name}, Due: ${task.due}, Completed: ${task.complete}`);
  });
}

function completedTask(taskName){
  let taskIndex = taskList.findIndex(task => task.name === taskName);
  if (taskIndex !== -1) {
    taskList[taskIndex].complete = true;
  } else {
    console.log("Task not found.");
  }
}


addTaskToList("Fix bug in code", "2024-02-21");
addTaskToList("Update documentation", "2024-02-22");
displayAllTasks();
completedTask("Fix bug in code");
removeTask("Update documentation");
displayAllTasks();