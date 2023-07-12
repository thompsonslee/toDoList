import {task} from "./task.js"

export class storage{

    taskStorage = []

    getStorage = () => taskStorage

    addToStorage = (task) => {
        taskStorage.push(task)
    }

    getTodayTasks = () =>{
        const todayTasks = []
        for(let i = 0 ; i < taskStorage.length ; i++){
            if (taskStorage[i].Date === currentDate){
                todayTasks.push(taskStorage[i])
            }
        }
        return todayTasks
    }

    getWeekTasks = () =>{
        const weekTasks = []
        for(let i = 0; i < taskStorage.length ; i++){
            for(let j = 0; j < 7 ; j++){
                let weekDate = currentDate.setDate(date.getDate() + j)
                if (taskStorage[i].date === weekDate){
                    weekTasks.push(taskStorage[i])
                }
            }
        }
        return weekTasks
    }

    getProjectTasks = (project) =>{
        let projectArray = []
        for(let i = 0; i < taskStorage.length ; i++){
            if(taskStorage[i].project === project){
                projectArray.push(taskStorage[i])
            }
        }
        return projectArray
    }

    createNewTask = () =>{
        const name = document.getElementById("text-input-popup").value
        const date = document.getElementById("date-input-popup").value

        const classToStore = new task(name,date,"none")

        addToStorage(classToStore)
    }
}