import { allProyects } from "./index.js"

export function getColor(task){
    allProyects.forEach((proyect) => {
        if(task.proyect === proyect.name){
            task.color = proyect.color;

        } else if(task.proyect === "None"){
            task.color = "grey";

        }
    });
}