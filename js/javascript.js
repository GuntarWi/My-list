var toDoList = function () {

	var addNewTask = function () {
			var taskTexT = document.getElementById("task-text").value,
				itemTexts = taskTexT,
				colA = document.getElementById('col-a').children.length,
				colB = document.getElementById('col-b').children.length,
				taskBoks = document.createElement("div"),
				taskCount = 1;

			taskBoks.className = "task";

			taskBoks.innerHTML = '<div class="col-md-2 checkbox active"><button class="toggleBtn"><i class="centered fa fa-circle-thin fa-lg"></i></button></div><div class="col-md-10 purple task-content-small"><p class="location-and-date location-and-date-small" id="time-now">Tomorrow</p><div class="task-name"><span>' + itemTexts + '</span></div></div><div class="col-xs-1 " id="task"></div>'

			if (colB < colA) {
				var todolist = document.getElementById("col-b");
			} else {
				var todolist = document.getElementById("col-a");
			}
			//      todolist.appendChild(taskBoks);
			todolist.insertBefore(taskBoks, todolist.childNodes[0]);




		},

		taskTime = function () {

		},

		addButton = function () {

			var addCategory = document.getElementsByClassName("catBtn"),
				buttonsCount = addCategory.length,
				test = document.getElementById("task");

			for (var i = 0; i <= buttonsCount; i += 1) {

				addCategory[i].onclick = function () {
					if (this.id === "home") {
						addNewTask();
						test[0].setAttribute("class", "red");
					} else if (this.id === "work") {
						addNewTask();
					}
				}

			}

		}

	addButton()
	taskTime()
};

toDoList();