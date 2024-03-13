export default class task{
    constructor(title, description, duedate, proyect, priority){
        this.title = title,
        this.description = description,
        this.duedate = duedate,
        this.proyect = proyect,
        this.priority = priority,
        this.check = false;
    }
}