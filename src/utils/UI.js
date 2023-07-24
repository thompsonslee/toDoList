import storage from './storage';

export default class UI {
  static loadHomepage() {
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('today');
    const week = document.getElementById('week');

    inbox.addEventListener('click', (e) => {
      UI.loadInboxPage();
      UI.highlightSelected(e.target);
    });
    today.addEventListener('click', (e) => {
      UI.loadTodayPage();
      UI.highlightSelected(e.target);
    });
    week.addEventListener('click', (e) => {
      UI.loadWeekPage();
      UI.highlightSelected(e.target);
    });
    UI.initProjectButtons();
    UI.loadInboxPage();
  }

  static initProjectButtons() {
    const addProject = document.getElementById('addProject');
    const projectInput = document.getElementById('project-input');
    const projectAddButton = document.getElementById('project-add-button');
    const projectCancelButton = document.getElementById('project-cancel-button');
    const projectPopup = document.getElementById('project-popup');

    addProject.addEventListener('click', () => {
      addProject.classList.add('hidden');
      projectPopup.classList.remove('hidden');
    });

    projectCancelButton.addEventListener('click', () => {
      addProject.classList.remove('hidden');
      projectPopup.classList.add('hidden');
      projectInput.value = '';
    });

    projectAddButton.addEventListener('click', () => {
      if (projectInput.value === '') {
        alert('Project needs Name');
      } else {
        storage.createNewProject();
        UI.refreshProjectList();
        projectInput.value = '';
        projectPopup.classList.add('hidden');
        addProject.classList.remove('hidden');
      }
    });
  }

  static refreshProjectList() {
    const projectList = document.getElementById('projects-list');
    projectList.innerHTML = '';
    storage.projectStorage.map((project) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = project;
      listItem.addEventListener('click', (e) => {
        UI.loadProjectPage(project);
        UI.highlightSelected(e.target);
      });
      projectList.appendChild(listItem);
    });
  }

  static loadProjectPage(project) {
    title.innerHTML = project;
    UI.refreshTaskList();
  }

  static loadInboxPage() {
    title.innerHTML = 'Inbox';
    UI.refreshTaskList();
  }

  static loadTodayPage() {
    title.innerHTML = 'Today';
    UI.refreshTaskList();
  }

  static loadWeekPage() {
    title.innerHTML = 'This Week';
    UI.refreshTaskList();
  }

  static highlightSelected(element) {
    const lastSelected = document.querySelector('.selected');
    lastSelected.classList.remove('selected');
    element.classList.add('selected');
  }

  static createTaskFunction(project) {
    const taskList = document.getElementById('taskList');
    const taskFunction = document.createElement('div');
    taskFunction.setAttribute('id', 'addTaskFunction');
    taskFunction.innerHTML += `
        <div id="addTask">Add Task</div>
        <div id="addTaskPopup" class="hidden">
            <div id="addTask-input-container" class="input">
                <input id="text-input-popup" placeholder="Title:Laundry" type="text">
                <input id="date-input-popup" type="date">
            </div>
            <div id="popup-buttons">
                <button id="button-add-popup" class="input">Add</button>
                <button id="button-cancel-popup" class="input">Cancel</button>
            </div>
        </div>`;
    taskList.appendChild(taskFunction);
    UI.initTaskButtons(project);
  }

  static initTaskButtons(project) {
    const addTask = document.getElementById('addTask');
    const addTaskPopup = document.getElementById('addTaskPopup');
    const textInput = document.getElementById('text-input-popup');
    const dateInput = document.getElementById('date-input-popup');
    const buttonAdd = document.getElementById('button-add-popup');
    const buttonCancel = document.getElementById('button-cancel-popup');

    addTask.addEventListener('click', () => {
      addTaskPopup.classList.remove('hidden');
      addTask.classList.add('hidden');
    });
    buttonCancel.addEventListener('click', () => {
      addTaskPopup.classList.add('hidden');
      addTask.classList.remove('hidden');
      textInput.value = '';
      dateInput.value = '';
    });

    buttonAdd.addEventListener('click', () => {
      if (textInput.value === '') {
        alert('Task needs a Name');
      } else if (dateInput.value === '') {
        alert('Task needs a Date');
      } else {
        storage.createNewTask(project);
        UI.refreshTaskList();
      }
    });
  }

  static createTaskDiv(task) {
    const taskList = document.getElementById('taskList');
    const taskDiv = document.createElement('div');
    const taskName = task.name;
    const taskDate = task.getFormatedDate();
    taskDiv.classList.add('task');
    taskDiv.innerHTML += `
        <div class="class-name">${taskName}</div>
        <div class="task-right-panel">
            <div class="class-date">${taskDate}</div>
        </div
        `;
    const removeButton = document.createElement('div');
    removeButton.classList.add('removebutton');
    removeButton.innerHTML = 'X';
    removeButton.addEventListener('click', () => {
      storage.removeFromStorage(taskName);
      UI.refreshTaskList();
    });
    const rightPanel = taskDiv.querySelector('.task-right-panel');

    rightPanel.appendChild(removeButton);
    taskList.appendChild(taskDiv);
  }

  static refreshTaskList() {
    taskList.innerHTML = '';
    if (title.innerHTML === 'Inbox') {
      storage.taskStorage.map((task) => UI.createTaskDiv(task));
      UI.createTaskFunction('none');
    } else if (title.innerHTML === 'Today') {
      storage.getDayTasks().map((task) => UI.createTaskDiv(task));
    } else if (title.innerHTML === 'This Week') {
      storage.getWeekTasks().map((task) => UI.createTaskDiv(task));
    } else {
      storage.getTasksForProject(title.innerHTML).map((task) => UI.createTaskDiv(task));
      UI.createTaskFunction(title.innerHTML);
    }
  }
}
