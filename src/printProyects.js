import { allProyects } from "./index.js";
import printTasks from "./printTasks.js";

let proyectList = document.querySelector('#proyect-list');
let selectProyect = document.querySelector('#select-proyect');

export default function printProyects(){
    let li = document.createElement('li');
    let colorDiv = document.createElement('div');
    let a = document.createElement('a');
    let option = document.createElement('option');

    allProyects.forEach(proyect => {
        a.textContent = proyect.name;
        option.textContent = proyect.name;
        colorDiv.style.backgroundColor = proyect.color;
        colorDiv.classList.add('p-color');
        
        a.addEventListener('click', () => {printTasks(proyect.name)});

        selectProyect.appendChild(option);        
        li.appendChild(colorDiv);
        li.appendChild(a);
        proyectList.appendChild(li);
    });
}