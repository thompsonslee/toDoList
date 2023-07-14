import task from "./UI.js"
import storage from "./storage"

export default class UI{

    static loadHomepage(){

        const title = document.getElementById("title")
        const inbox = document.getElementById("inbox")
        const today = document.getElementById("today")
        const week = document.getElementById("week")

        inbox.addEventListener("click",UI.loadInboxPage)
        today.addEventListener("click", UI.loadTodayPage)
        week.addEventListener("click", UI.loadWeekPage)
        UI.loadInboxPage()
    }
    
    
    static loadInboxPage(){
        title.innerHTML = "Inbox"
 
        taskList.innerHTML = ""
        storage.taskStorage.map(task => UI.createTaskDiv(task))
        UI.createTaskFunction("none") 
    }

    static loadTodayPage(){
        title.innerHTML = "Today"
        taskList.innerHTML = ""

    }

    static loadWeekPage(){
        title.innerHTML = "This Week"
        taskList.innerHTML = ""
    }

    static createTaskFunction(project){
        const taskList = document.getElementById("taskList")
        taskList.innerHTML += `
        <div id="addTaskFunction">
        <div id="addTask">Add Task</div>
        <div id="addTaskPopup">
            <input id="text-input-popup" type="text">
            <input id="date-input-popup" type="date">
            <div id="popup-buttons">
                <button id="button-add-popup">Add</button>
                <button id="button-cancel-popup">Cancel</button>
            </div>
        </div>
    </div>`

    UI.initTaskButtons(project)
    }
    static initTaskButtons(project){
        const textInput = document.getElementById("text-input-popup")
        const dateInput = document.getElementById("text-input-popup")
        const buttonAdd = document.getElementById("button-add-popup")
        const buttonCancel = document.getElementById("button-cancel-popup")

        buttonAdd.addEventListener("click", () =>{
            storage.createNewTask(project)
            
        })
    }

    static createTaskDiv(task){
        const taskList = document.getElementById("taskList")
        const taskDiv = document.createElement("div")
        taskDiv.classList.add("task")
        taskDiv.innerHTML += `
        <div class="class-name">${task.name}</div>
        <div class="class-date>${task.date}</div>
        `
        taskList.appendChild(taskDiv)
    }

}