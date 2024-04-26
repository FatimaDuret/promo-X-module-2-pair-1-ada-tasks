'use strict';

const listElement = document.querySelector('.js_task-list');
const inputAdd = document.querySelector('.js-text-task-add');
const buttonAdd = document.querySelector('.js-btn-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const buttonFilter = document.querySelector('.js-btn-filter'); 
const check = document.querySelector('.js-checkbox');

// creo esta constante para poder acceder a la lista de tareas
let classList = listElement.classList; 

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false},
  ];

  // creamos esta función para añadir tareas a la lista
  const addTask = (tasks) => {

    let html ="";

    for (const task of tasks) {
      const completedClass = task.completed ? ' class="tachado"' : '';
      html += `<li${completedClass}><input type="checkbox" ${task.completed ? 'checked' : ''}>${task.name}</li>`;
    }
  };

  listElement.innerHTML = html;
// si task es verdadero añadir la clase dentro del form.

/* if(task.completed){
  listElement.classList.add("tachado")

}else{
  listElement.classList.remove("tachado")

}
 

}
    };
 */
addTask(tasks);
 /*  
function checkbox (event){

  console.log(inputAdd.value);
  /* checkbox.getElementsById+= `<li> <input type ="checkbox"/>${inputAdd.value}</li>`; */
/* }; */ 

function handlechek(){
  const listElement= document.querySelector(".js_task-list");
  if(listElement.checked){
    listElement.classList.add("tachado")
  }else{
    listElement.classList.remove("tachado")
  }
  handlechek();
};
listElement.addEventListener("click", handlechek);



/* function renderTask(task) {} */
   


  
  
  
  
  

 



  

  