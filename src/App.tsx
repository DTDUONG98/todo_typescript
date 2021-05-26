import React, { useState } from 'react';
import './App.css';
import { AddTodoForm } from './addTodoForm';
import { TodoList } from './todolist';
import { AddTodo, Todo, ToggleTodo } from './types'

const initialTodo: Array<Todo> = [
  {text: "manchester", complete: true},
  {text: "chease", complete: false},
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodo);

  const toggleTodo: ToggleTodo = seletedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === seletedTodo){
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}]);
  }

  return (
    <React.Fragment>
      <h1>TODO LIST TYPESCRIPT...</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
}

export default App;
