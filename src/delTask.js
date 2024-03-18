import { allTasks } from "./index.js";
import printTasks from "./printTasks.js";

export default function delTask(task){
    let section = document.querySelector('.title').textContent;

    allTasks.forEach((arrTask) => {
        let i = allTasks.indexOf(arrTask);

        if(arrTask === task){
            allTasks.splice(i, 1);
            printTasks(section);

        }
    });
}