import { allTasks } from "./index.js";

export default function printTasks(){

    let tasksContainer = document.querySelector('.tasks-container');

    while(tasksContainer.firstChild){
        tasksContainer.removeChild(tasksContainer.firstChild);

    }

    allTasks.forEach(task => {
        let cardDiv = document.createElement('div');
        let checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        let paraContent = [task.title, task.description, task.duedate, task.proyect, task.priority];
        let paraClasses = ["card-title", "description", "expires", "proyect", "priority"];

        cardDiv.appendChild(checkBox);

        paraContent.forEach(function(string, i){
            let p = document.createElement('p');
            p.textContent = string;
            p.classList.add(paraClasses[i]);

            cardDiv.appendChild(p);
        });

        cardDiv.classList.add('card');
        editBtn.classList.add('card-edit');
        deleteBtn.classList.add('card-delete');

        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";

        cardDiv.appendChild(editBtn);
        cardDiv.appendChild(deleteBtn);
        tasksContainer.appendChild(cardDiv);
    });
}