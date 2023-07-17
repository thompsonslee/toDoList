export default function dateFunctions(){

    class dateclass{
        constructor(date){
            this.date = date
            this.day = this.setVariables().day
            this.month = this.setVariables().month
            this.year = this.setVariables().year
        }

        getFormatedDate(){
            return `${this.day}-${this.month}-${this.year}`
        }
        setVariables(){
            let thisDate = new Date(this.date)
            let day = thisDate.getDate()
            let month = thisDate.getMonth() +1
            let year = thisDate.getFullYear()

            return {day,month,year}
        }
        addDay(){

            this.date.setDate(this.date.getDate()+1)
            this.day = this.setVariables().day
            this.month = this.setVariables().month
            this.year = this.setVariables().year
        }
    }


    function formatDate(date){
        const thisDate = new dateclass(date)
        return thisDate.getFormatedDate()
    }

    function isNextWeek(date){
        const currentDate = new dateclass(new Date())
        const thisDate = new dateclass(new Date(date))
        let isThisWeek = false
        for(let i = 0 ; i < 7 ; i++){
            
            if (thisDate.getFormatedDate() === currentDate.getFormatedDate()){
  
                isThisWeek = true
                return isThisWeek
            }
            currentDate.addDay()

            
        }
        return isThisWeek
    }
return {formatDate,isNextWeek}
    
}