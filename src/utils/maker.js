export function maker(){
    class task{
        constructor(name,date,project){
            name = name;
            date = date;
            project = project
        }
    }

    class project{
        constructor(name){
            name = name;
        }
    }

    return {task,project}
}
