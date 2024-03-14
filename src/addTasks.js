import classTask from './tasks.js'
import { allTasks } from './index.js';
import printTasks from './printTasks.js';

export default function addTasks(){

    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let duedate = document.querySelector('#duedate').value;
    let proyect = document.querySelector('#select-proyect').value;
    let priority = document.querySelector('#select-priority').value;

    if(title != ""){
        let task = new classTask(title, description, duedate, proyect, priority);
        allTasks.push(task);
        printTasks("All Tasks");
    }

}