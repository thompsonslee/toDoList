import task from "./task.js"

export default class storage{

    static taskStorage = []

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
}
    

    /*addToStorage = (task) => {
        taskStorage.push(task)
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
}*/