'use strict';

const listElement = document.querySelector('.js_task-list');
const inputAdd = document.querySelector('.js-text-task-add');
const buttonAdd = document.querySelector('.js-btn-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const buttonFilter = document.querySelector('.js-btn-filter'); 

let classList = listElement.classList;

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
    
    listElement.innerHTML += `<li class="tachado"> <input type ="checkbox"/>${task.name}</li>`;
  };

};

  addTask(tasks);

  function renderTask(tasks) {
  if (tasks.completed === true) {
    listElement.innerHTML+=  `<li class="tachado"> <input type ="checkbox"/>${task.name}</li>`;
    
  }else {
    listElement.innerHTML+=  `<li> <input type ="checkbox"/>${task.name}</li>`;

    
   
  }}; 

/* 
  handleRenderTask = (event) => {
   
  }; */
  
  
  
  
  
  listElement.addEventListener('click', handleClick);
  
  
  
  
  
  

 



  

  console.log(handleClick);