import {task} from "./UI.js"
import {storage} from "./storage"




export class UI{

    static loadHomepage(){

        const title = document.getElementById("title")
        const inbox = document.getElementById("inbox")
        const today = document.getElementById("today")
        const week = document.getElementById("week")
        const taskList = document.getElementById("taskList")

        inbox.addEventListener("click",UI.loadInboxPage)
        today.addEventListener("click", UI.loadTodayPage)
        week.addEventListener("click", UI.loadWeekPage)

        UI.loadInboxPage()
    }
    
    
    static loadInboxPage(){
        title.innerHTML = "Inbox"
        taskList.innerHTML = ""
        UI.createTaskFunction()
        
    }

    static loadTodayPage(){
        title.innerHTML = "Today"
        taskList.innerHTML = ""

    }

    static loadWeekPage(){
        title.innerHTML = "This Week"
        taskList.innerHTML = ""
    }

    static createTaskFunction(){
        const taskList = document.getElementById("taskList")
        taskList.innerHTML += `
        <div id="addTaskFunction">
        <div id="addTask">Add Task</div>
        <div id="addTaskPopup">
            <input class="text-input-popup" id="text-input-popup" type="text">
            <input class="date-input-popup"id="date-input-popup" type="date">
            <div id="popup-buttons">
                <button class="button-add-popup" id="button-add-popup">Add</button>
                <button class="button-cancel-popup" id="button-cancel-popup">Cancel</button>
            </div>
        </div>
    </div>`

    UI.initTaskButtons()
    }
    static initTaskButtons(){
        const textInput = document.getElementById("text-input-popup")
        const dateInput = document.getElementById("text-input-popup")
        const buttonAdd = document.getElementById("button-add-popup")
        const buttonCancel = document.getElementById("button-cancel-popup")
    }

}