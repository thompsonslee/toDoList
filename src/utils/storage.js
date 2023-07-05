export function storage(){
    const currentDate = new Date()
    const taskStorage = []

    const getStorage = () => taskStorage

    const getTodayTasks = () =>{
        const todayTasks = []
        for(let i = 0 ; i < taskStorage.length ; i++){
            if (taskStorage[i].Date === currentDate){
                todayTasks.push(taskStorage[i])
            }
        }
        return todayTasks
    }

    const getWeekTasks = () =>{
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

    const getProjectTasks = (project) =>{
        let projectArray = []
        for(let i = 0; i < taskStorage.length ; i++){
            if(taskStorage[i].project === project){
                projectArray.push(taskStorage[i])
            }
        }
        return projectArray
    }

    return{getStorage,getTodayTasks,getWeekTasks,getProjectTasks}
}