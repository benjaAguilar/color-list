import { format, isPast } from "date-fns";
import { allTasks } from "./index.js";
import task from "./tasks.js";

let filteredTasks = [];

export default function navFilter(section){
    let today = format(new Date(), 'dd MMM yyy');

    if(section === "All Tasks"){
        filteredTasks = allTasks;

    } else if(section === "Today"){
        filteredTasks = allTasks.filter((task) => task.duedate === today);
    
    } else if(section === "Expired"){
        filteredTasks = allTasks.filter((task) => isPast(task.duedate) && task.duedate < today);

    }else{
        filteredTasks = allTasks.filter((task) => task.proyect === section);

    }

    filteredTasks.sort((taskA, taskB) => {
        console.log(taskA.check);
        if(taskA.check){
            return taskA.priority - taskB.priority + 10

        } else if(taskB.check){
            return taskA.priority - taskB.priority - 10

        }

        return taskA.priority - taskB.priority
        
    });

    return filteredTasks;
}