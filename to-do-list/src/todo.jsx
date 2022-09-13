import React, {useState} from "react";
import './App.css';

const Todo = () => {
    const [currentTodo, setCurrentTodo] = useState('');
    const [todos, setTodos] = useState([])

    const createNewTodo = (currentTodo) => {
        let todosArray = [...todos];
        todosArray.push({
            todo: currentTodo,
            completed: false,
        });
        setTodos(todosArray);
    }

    // const completeTodo = (index) => {
    //     const todosArray = [...todos];
    //     todosArray[index].completed = !todosArray[index].completed;
    //     setTodos(todosArray);
    // }

    // const deleteTodo = (index) => {
    //     let todosArray = [...todos];
    //     todosArray.splice(index, 1);
    //     setTodos(todosArray);
    // }

    return(
      <div>
        <input className='input-todo' value={currentTodo} onChange={e => {
            setCurrentTodo(e.target.value);
        }}

        onKeyPress = {e => {
            if (e.key === 'Enter') {
                createNewTodo(currentTodo);
            }
        }}
        placeholder = 'what do you want to do today?' />
        
        {todos.map((todo, index) => 
            <div key={todo} className='todo'>
                <div className='checkbox' onClick={() => completeTodo(index)}>{todo.completed && <span>&#x2714;</span>}</div>
                {/* <div className={todo.completed ? 'done' : ""}>{todo.todo}</div>
                <div className="delete" onClick={() => deleteTodo(index)}>&#128465;</div> */}
                
            </div>
        )}
      </div>
    )
  }
  

export default Todo;

