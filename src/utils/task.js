import dateFunctions from "./dateFunctions"

export default class task{
    constructor(name,date,project){
        this.name = name
        this.date = date
        this.project = project
    }
        getFormatedDate(){
            return dateFunctions().formatDate(this.date)
        }
        isThisWeek(){
            return dateFunctions().isNextWeek(this.date)
        }
}



