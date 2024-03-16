import { allProyects } from "./index.js"

export default class task{
    constructor(title, description, duedate, proyect, priority){
        this.title = title,
        this.description = description,
        this.duedate = duedate,
        this.proyect = proyect,
        this.priority = priority,
        this.color,
        this.check = false
    }

    getColor(){
        allProyects.forEach((proyect) => {
            if(this.proyect === proyect.name){
                this.color = proyect.color;

            } else{
                this.color = "grey";

            }
        });
    }
}