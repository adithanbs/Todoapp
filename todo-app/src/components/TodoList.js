import React,{ useState } from 'react';
import Todoform from './TodoForm';
import Todo from "./Todo"

function TodoList() {

     const [todos, setTodos] = useState([]);

     const addTodo = todo => {
         if (!todo.text || /^\s*$/.test(todo.text)) {
             return;
         }

const newTodos = [todo, ...todos];

setTodos(newTodos);
// console.log(todo,...todos);
 };

 const completeTodo = id => {
     let updatedTodos = todos.map(todo => {
         if (todo.id === id) {
             todo.isComplete = !todo.iscomplete;
         }
     return todo;
        })
        setTodos(updatedTodos);

 }

 return (
        <div>
            <h1> what's the plan for Today? </h1>
            <Todoform onSubmit={addTodo} />
            <Todo todos={todos} completeTodo = {completeTodo} />

        </div>
    )
}

export default TodoList
