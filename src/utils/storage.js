import Task from './task';
import dateFunctions from './dateFunctions';

export default class storage {
  static taskStorage = [];

  static projectStorage = [];

  static createNewProject() {
    const project = document.getElementById('project-input').value;
    storage.projectStorage.push(project);
  }

  static createNewTask(project) {
    const name = document.getElementById('text-input-popup').value;
    const date = new Date((document.getElementById('date-input-popup').value));
    const task = new Task(name, date, project);
    this.addToStorage(task);
  }

  static addToStorage(task) {
    storage.taskStorage.push(task);
  }

  static removeFromStorage(taskName) {
    for (let i = 0; i < storage.taskStorage.length; i++) {
      if (storage.taskStorage[i].name === taskName) {
        storage.taskStorage.splice(i, 1);
      }
    }
  }

  static getTasksForProject(project) {
    const thisProjectStorage = [];
    for (let i = 0; i < storage.taskStorage.length; i++) {
      if (storage.taskStorage[i].project === project) {
        thisProjectStorage.push(storage.taskStorage[i]);
      }
    }
    return thisProjectStorage;
  }

  static getDayTasks() {
    const currentDate = dateFunctions().formatDate(new Date());
    const thisDayStorage = storage.taskStorage.filter((task) => task.getFormatedDate() === currentDate);
    return thisDayStorage;
  }

  static getWeekTasks() {
    const thisWeekStorage = storage.taskStorage.filter((task) => task.isThisWeek());
    return thisWeekStorage;
  }
}
