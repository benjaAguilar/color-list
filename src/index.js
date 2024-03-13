import css from './styles.css';
import classTask from './tasks.js'
import addTasks from './addTasks';

export let allTasks = [];

//DOM
let showModalBtn = document.querySelector('.addNote');
let addingModal = document.querySelector('#task-adder');
let addTaskBtn = document.querySelector('#createTask');

showModalBtn.addEventListener('click', () => {addingModal.showModal()});
addTaskBtn.addEventListener('click', addTasks);