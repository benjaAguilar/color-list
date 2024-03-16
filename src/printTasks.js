import navFilter from "./navigationFilter.js";

export default function printTasks(section){

    let sectionTitle = document.querySelector('.title');
    let tasksContainer = document.querySelector('.tasks-container');
    let filteredTasks = navFilter(section);

    sectionTitle.textContent = section;

    while(tasksContainer.firstChild){
        tasksContainer.removeChild(tasksContainer.firstChild);

    }

    filteredTasks.forEach(task => {
        let cardDiv = document.createElement('div');
        let pColor = document.createElement('div');
        let checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        //see and change the state of the task (finished or pendient) 
        checkBox.checked = task.check;
        checkBox.addEventListener("change", () => {
            task.check = checkBox.checked;
            task.check ? cardDiv.classList.add("task-done") : cardDiv.classList.remove("task-done");
            
        });

        let paraContent = [task.title, task.description, task.duedate, task.proyect, task.priority];
        let paraClasses = ["card-title", "description", "expires", "proyect", "priority"];

        cardDiv.appendChild(checkBox);

        paraContent.forEach(function(string, i){
            let p = document.createElement('p');
            p.textContent = string;
            p.classList.add(paraClasses[i]);

            cardDiv.appendChild(p);
        });

        console.log(task.color);
        cardDiv.classList.add('card');
        editBtn.classList.add('card-edit');
        deleteBtn.classList.add('card-delete');
        pColor.style.backgroundColor = task.color;
        pColor.classList.add('p-color');
        
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";

        cardDiv.appendChild(pColor);
        cardDiv.appendChild(editBtn);
        cardDiv.appendChild(deleteBtn);
        tasksContainer.appendChild(cardDiv);
    });
}