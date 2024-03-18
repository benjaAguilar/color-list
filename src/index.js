import css from './styles.css';
import addTasks from './addTasks';
import printTasks from './printTasks';
import { Proyect, addProyects } from './proyects.js';
import printProyects from './printProyects';
import { format } from 'date-fns';

const datepicker = require('js-datepicker');
const AColorPicker = require('a-color-picker');

export let allTasks = [];
export let allProyects = [];
let proyectColor;

//DOM
let showModalBtn = document.querySelector('.addNote');
let addingModal = document.querySelector('#task-adder');
let addTaskBtn = document.querySelector('#createTask');

let showProyectModalBtn = document.querySelector('#new-proyect');
let proyectModal = document.querySelector('#proyect-adder');
let addProyectBtn = document.querySelector('#create-proyect')

let allTasksSection = document.querySelector('#all-tasks');
let todaySection = document.querySelector('#today');
let expiredSection = document.querySelector('#expired');
let doneSection = document.querySelector('#done');

//datepicker config for duedate
const picker = datepicker('#duedate', {
    formatter: (input, date, instance) => {
        const value = format(date, 'dd MMM yyy');
        input.value = value;
    },
    
});

//handles color picker on proyect modal 
AColorPicker.from('.picker')
    .on('change', (picker, color) => {
    proyectColor = color;
});

showModalBtn.addEventListener('click', () => {addingModal.showModal()});
addTaskBtn.addEventListener('click', addTasks);

showProyectModalBtn.addEventListener('click', () => {proyectModal.showModal()});
addProyectBtn.addEventListener('click', () => {addProyects(proyectColor)});

allTasksSection.addEventListener('click', () => {printTasks(allTasksSection.textContent)});
todaySection.addEventListener('click', () => {printTasks(todaySection.textContent)});
expiredSection.addEventListener('click', () => {printTasks(expiredSection.textContent)});
doneSection.addEventListener('click', () => {printTasks(doneSection.textContent)});
