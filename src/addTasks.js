import classTask from './tasks.js'
import { allTasks, closeAddModal } from './index.js';
import printTasks from './printTasks.js';
import { setStorage } from './storage.js';
import { getColor } from './getColor.js';

export default function addTasks(){

    let addingModal = document.querySelector('#task-adder');
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let duedate = document.querySelector('#duedate').value;
    let proyect = document.querySelector('#select-proyect').value;
    let priority = document.querySelector('#select-priority').value;

    if(title != ""){
        let task = new classTask(title, description, duedate, proyect, priority);
        getColor(task);
        allTasks.push(task);
        setStorage("t");
        printTasks("All Tasks");
        closeAddModal();
        
    }

}