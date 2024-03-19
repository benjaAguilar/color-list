import navFilter from "./navigationFilter.js";
import flag from './imgs/flag.svg';
import expired from './imgs/expired.svg';
import edit from './imgs/edit.svg';
import del from './imgs/delete.svg'; 
import delTask from "./delTask.js";
import editTask from "./editTask.js";

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
        let extraInfo = document.createElement('div');
        let btnsContainer = document.createElement('div');
        let checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");

        let due = task.duedate;
        let priority = task.priority;

        //see and change the state of the task (finished or pendient) 
        checkBox.checked = task.check;
        if(task.check){
            cardDiv.classList.add('task-done');
        }
        checkBox.addEventListener("change", () => {
            task.check = checkBox.checked;
            task.check ? cardDiv.classList.add("task-done") : cardDiv.classList.remove("task-done");
            printTasks(section);

        });

        let titleAndDesciption = [task.title, task.description];
        let tydClasses = ["card-title", "description"];

        let extraContent = [task.duedate, task.proyect, task.priority];
        let extraClasses = ["expires", "proyect", "priority"];

        titleAndDesciption.forEach(function(string, i){
            let p = document.createElement('p');
            p.textContent = string;
            p.classList.add(tydClasses[i]);

            cardDiv.appendChild(p);
        });

        extraContent.forEach(function(string, i){
            let p = document.createElement('p');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let isImg = false;
            p.textContent = string;
            p.classList.add(extraClasses[i]);

            if(string === due){
                img.src = expired; 
                isImg = true;
        
            } 

            if(string === priority){
                img.src = flag; 
                isImg = true;
        
            } 
                

            if(isImg){
                div.appendChild(img);
                div.appendChild(p);

            } else{
                //TASK.PROYECT HERE
                div.appendChild(pColor);
                div.appendChild(p);

            }
            
            extraInfo.appendChild(div);
            isImg = false;
        });

        let btn = "edit";
        for(let i = 1; i <= 2; i++){
            let div = document.createElement('div');
            let img = document.createElement('img');

            if(btn === "edit"){
                div.classList.add('task-edit');
                img.src = edit;
                btn = "";
                div.addEventListener('click', () => {editTask(task)});

            } else{
                div.classList.add('task-delete');
                img.src = del;
                div.addEventListener('click', () => {delTask(task)});

            } 

            div.appendChild(img);
            btnsContainer.appendChild(div);
        }

        
        cardDiv.classList.add('card');
        extraInfo.classList.add('extra-info');
        btnsContainer.classList.add('card-btns');
        pColor.style.backgroundColor = task.color;
        pColor.classList.add('p-color');
        checkBox.classList.add('check');

        cardDiv.appendChild(btnsContainer);
        cardDiv.appendChild(extraInfo);
        cardDiv.appendChild(checkBox);
        tasksContainer.appendChild(cardDiv);
    });
}