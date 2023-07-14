import task from "./task.js"
import UI from "./UI.js"

export default class storage{

    static taskStorage = []
    static projectStorage = []

    static createNewProject(){
        const project = document.getElementById("project-input").value
        storage.projectStorage.push(project)
        console.log(storage.projectStorage)
    }

    static createNewTask(project){
        const name = document.getElementById("text-input-popup").value
        const date = document.getElementById("date-input-popup").value
        
        let Task = new task(name,date,project)
        this.addToStorage(Task)
    }

    static addToStorage(task){
        storage.taskStorage.push(task)
        console.log (storage.taskStorage)
    }
    static removeFromStorage(taskName){
        for(let i = 0 ; i < storage.taskStorage.length ; i++){
            console.log(storage.taskStorage[i])
            if (storage.taskStorage[i].name === taskName){
                storage.taskStorage.splice(i,1)
                console.log(storage.taskStorage)
            }
        }
    }
    static getTasksForProject(project){
        const thisProjectStorage = []
        for(let i = 0 ; i < storage.taskStorage.length ; i++){
            if(storage.taskStorage[i].project === project){
                thisProjectStorage.push(storage.taskStorage[i])
            }
        }
        return thisProjectStorage
    }
}
    

    /*

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
}*/