import { format } from "date-fns";
import { allTasks } from "./index.js";

let filteredTasks = [];

export default function navFilter(section){
    if(section === "All Tasks"){
        filteredTasks = allTasks;

    } else if(section === "Today"){
        filteredTasks = allTasks.filter((task) => task.duedate === format(new Date(), 'dd MMM yyy'));
    
    } else{
        filteredTasks = allTasks.filter((task) => task.proyect === section);

    }

    return filteredTasks;
}