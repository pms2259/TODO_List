const todoInputEl = document.querySelector('#input');
const todoListEl = document.querySelector('#list');

// 리스트 추가
let todos = [];
let id = 0;

const init = () => {
    todoInputEl.addEventListener('keypress', (e) =>{
        if( e.key === 'Enter' ){
            appendTodos(e.target.value); todoInputEl.value ='';
        }
    })
}
init();

const setTodos = (newTodos) => {
    todos = newTodos;
}
const getAllTodos = () => {
    return todos;
}

const appendTodos = (text) => {
    const newId = id++;
    const newTodos = getAllTodos().concat({id: newId, isCompleted: false, content: text })
    // 스프레드 연산자 사용할 경우
    // const newTodos = [...getAllTodos(), {id: newId, isCompleted: false, content: text }] 
    setTodos(newTodos)
    paintTodos();
}

const paintTodos = () => {
    todoListEl.innerHTML = null; //todoListElem 요소 안의 HTML 초기화
    const allTodos = getAllTodos(); // todos 배열 가져오기
    
    // "todo-item"에 해당하는 HTML을 그려서 "todo-list"에 추가하기
    allTodos.forEach(todo => { 
      const todoItemEl = document.createElement('li');
      todoItemEl.classList.add('checked');
      
      // todoItemElem.setAttribute('data-id', todo.id );  
      const todoEl = document.createElement('div');
      todoEl.classList.add('todo');
      todoEl.innerText = todo.content;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete_btn');
      deleteBtn.addEventListener('click',  () => deleteTodo(todo.id)) // 'click'이벤트 발생 시, 해당 할 일 삭제
      deleteBtn.innerHTML = 'X';
    
      todoItemEl.appendChild(todoEl);
      todoItemEl.appendChild(deleteBtn);  
      todoListEl.appendChild(todoItemEl);
    })    
  }

const deleteTodo = (todoId) => {
    const newTodos = getAllTodos().filter(todo => todo.id !== todoId );
    setTodos(newTodos);
    paintTodos();
}

const completeTodo = (todoId) => {
    const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo,  isCompleted: !todo.isCompleted} : todo )
    setTodos(newTodos);
    paintTodos();
}

  
// 현재 시간 나타내기
function getClock(){
    const clock = document.getElementById("clock");
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour}:${minutes}:${seconds}`;
  }
  getClock();
  setInterval(getClock, 1000);