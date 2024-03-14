import css from './styles.css';
import classTask from './tasks.js'
import addTasks from './addTasks';
import { format } from 'date-fns';
const datepicker = require('js-datepicker')

export let allTasks = [];

//DOM
let showModalBtn = document.querySelector('.addNote');
let addingModal = document.querySelector('#task-adder');
let addTaskBtn = document.querySelector('#createTask');
//datepicker config for duedate
const picker = datepicker('#duedate', {
    formatter: (input, date, instance) => {
        const value = format(date, 'dd MMM yyy');
        input.value = value;
    },
    minDate: new Date(),
});

showModalBtn.addEventListener('click', () => {addingModal.showModal()});
addTaskBtn.addEventListener('click', addTasks);