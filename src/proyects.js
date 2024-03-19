import { allProyects, closeProyectModal } from "./index.js";
import printProyects from "./printProyects.js";

export class Proyect{
    constructor(name, color){
        this.name = name
        this.color  = color;
    }
}

export function addProyects(color){
    let proyectName = document.querySelector('#proyect').value;

    if(proyectName === 'All Tasks' || proyectName === 'Today' || proyectName === 'Expired' || proyectName === 'Done'){
        alert('invalid name');
        proyectName = '';
    }

    allProyects.forEach((proyect) => {
        if(proyectName === proyect.name){
            alert('invalid name');
            proyectName = '';
        }
    });

    if(proyectName != ''){
        let proyect = new Proyect(proyectName, color);
        allProyects.push(proyect);
        printProyects();
        closeProyectModal();

    }
}

