import { allProyects, closeProyectModal } from "./index.js";
import printProyects from "./printProyects.js";
import { setStorage } from "./storage.js";

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
        setStorage("p");
        printProyects();
        closeProyectModal();

    }
}

