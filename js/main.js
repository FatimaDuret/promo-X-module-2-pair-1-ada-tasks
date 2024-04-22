'use strict';

const listElement = document.querySelector('.js_task-list');
const inputAdd = document.querySelector('.js-text-task-add');
const buttonAdd = document.querySelector('.js-btn-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const buttonFilter = document.querySelector('.js-btn-filter'); 

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];



  const addTask = (tasks) => {

    for (const task of tasks) {
    
    listElement.innerHTML += `<li class="task"><input="checkbox">${task.name}</li>`;
  };

};

  addTask(tasks);


  
  
  
  
  
  
  
  
  
  
  
  
  

 /* handleClick = (event) => {
    const valueInput = inputAdd.value;
  };



  listElement.addEventListener('click', handleClick);

  console.log(handleClick); */