import { allProyects, allTasks } from "./index.js";
import printProyects from "./printProyects.js";
import printTasks from "./printTasks.js";

let storageTasks;
let storageProyects;

export function getStorage(){

    if(localStorage.getItem("Tasks")){
        storageTasks = JSON.parse(localStorage.getItem("Tasks"));
        storageTasks.forEach((task) => {
            allTasks.push(task);

        });
    }

    if(localStorage.getItem("Proyects")){
        storageProyects = JSON.parse(localStorage.getItem("Proyects"));
        storageProyects.forEach((proyect) => {
            allProyects.push(proyect);
            printProyects();

        });
    }

    printTasks("All Tasks");
}

export function setStorage(item){
    if(item === "p"){
        localStorage.setItem("Proyects", JSON.stringify(allProyects));

    } else if(item === "t"){
        localStorage.setItem("Tasks", JSON.stringify(allTasks));

    }
    
}