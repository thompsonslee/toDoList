import task from "./UI.js"
import storage from "./storage"
import project from "./project.js"

export default class UI{

    static loadHomepage(){

        const title = document.getElementById("title")
        const inbox = document.getElementById("inbox")
        const today = document.getElementById("today")
        const week = document.getElementById("week")

        inbox.addEventListener("click",UI.loadInboxPage)
        today.addEventListener("click", UI.loadTodayPage)
        week.addEventListener("click", UI.loadWeekPage)
        UI.initProjectButtons()
        UI.loadInboxPage()
    }

    static initProjectButtons(){
        const projectInput = document.getElementById("project-input")
        const projectAddButton = document.getElementById("project-add-button")
        const projectRemoveButton = document.getElementById("project-cancel-button")

        projectAddButton.addEventListener("click",() =>{
            if (projectInput.value === ""){
                console.log("need project name")
            }
            else{
                storage.createNewProject()
                UI.refreshProjectList()
            }

        })
    }

    static refreshProjectList(){
        const projectList = document.getElementById("projects-list")
        projectList.innerHTML = ""
        storage.projectStorage.map(project => {
            const listItem = document.createElement("li")
            listItem.innerHTML = project
            listItem.addEventListener("click", ()=> {UI.loadProjectPage(project)})
            projectList.appendChild(listItem)
            
        })
    }
    static loadProjectPage(project){
        title.innerHTML = project
        UI.refreshTaskList()
    }
    
    
    static loadInboxPage(){
        title.innerHTML = "Inbox"
        UI.refreshTaskList()
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
        const taskFunction = document.createElement("div")
        taskFunction.setAttribute("id","addTaskFunction")
        taskFunction.innerHTML += `
        <div id="addTask">Add Task</div>
        <div id="addTaskPopup">
            <input id="text-input-popup" type="text">
            <input id="date-input-popup" type="date">
            <div id="popup-buttons">
                <button id="button-add-popup">Add</button>
                <button id="button-cancel-popup">Cancel</button>
            </div>
        </div>`
        taskList.appendChild(taskFunction)
        UI.initTaskButtons(project)
    }
    static initTaskButtons(project){
        const textInput = document.getElementById("text-input-popup")
        const dateInput = document.getElementById("date-input-popup")
        const buttonAdd = document.getElementById("button-add-popup")
        const buttonCancel = document.getElementById("button-cancel-popup")

        buttonAdd.addEventListener("click", () =>{
            if(textInput.value === ""){
                console.log("must name")
            }
            else if(dateInput.value === ""){
                console.log("must date")
            }
            else{
                storage.createNewTask(project)
                UI.refreshTaskList()
            }
            
        })
    }

    static createTaskDiv(task){
        const taskList = document.getElementById("taskList")
        const taskDiv = document.createElement("div")
        const taskName = task.name
        const taskDate = task.date
        taskDiv.classList.add("task")
        taskDiv.innerHTML += `
        <div class="class-name">${taskName}</div>
        <div class="class-date">${taskDate}</div>
        `
        const removeButton = document.createElement("div")
        removeButton.classList.add("removebutton")
        removeButton.innerHTML = "X"
        removeButton.addEventListener("click", () => {
            console.log(taskName)
            storage.removeFromStorage(taskName)
            UI.refreshTaskList()
        })
            //storage.removeFromStorage(taskName)
            //UI.refreshTaskList()
        
        taskDiv.appendChild(removeButton)
        taskList.appendChild(taskDiv)
    }

    static refreshTaskList(){
        taskList.innerHTML = ""
        if(title.innerHTML === "Inbox"){
            storage.taskStorage.map(task => UI.createTaskDiv(task))
            UI.createTaskFunction("none") 
        }
        else{
            storage.getTasksForProject(title.innerHTML).map(task => UI.createTaskDiv(task))
            UI.createTaskFunction(title.innerHTML)
        }
    }

}

