import { allTasks } from ".";
import printTasks from "./printTasks";
import { format } from 'date-fns';
const datepicker = require('js-datepicker');

const picker = datepicker('#duedate-edit', {
    formatter: (input, date, instance) => {
        const value = format(date, 'dd MMM yyy');
        input.value = value;
    },
    
});

export default function editTask(task){
    let section = document.querySelector('.title').textContent;
    let dialog = document.querySelector('#task-editer');
    let editTaskDoneBtn = document.querySelector('#editTask');
    let cancelEditBtn = document.querySelector('#cancel-edit');

    let title = document.querySelector('#title-edit');
    let description = document.querySelector('#description-edit');
    let duedate = document.querySelector('#duedate-edit');
    let proyect = document.querySelector('#select-proyect-edit');
    let priority = document.querySelector('#select-priority-edit');

    title.value = task.title;
    description.value = task.description;
    duedate.value = task.duedate;
    proyect.value = task.proyect;
    priority.value = task.priority;
    let currentTask = title.value;

    dialog.showModal();

    function edit(){
        if(currentTask === task.title){
            task.title = title.value 
            task.description = description.value;
            task.duedate = duedate.value;
            task.proyect = proyect.value ;
            task.priority = priority.value;
            task.getColor();
    
            printTasks(section);
            editTaskDoneBtn.removeEventListener('click', edit);
        }
    }

    editTaskDoneBtn.addEventListener('click', edit);
    cancelEditBtn.addEventListener('click', () => {
        dialog.close();
        
    });

}