import React from 'react';
import { Todo, ToggleTodo } from './types';

interface ListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const ListItem: React.FC<ListItemProps> = ({ todo, toggleTodo }) => {
    return(
        <ol className="container">
            <label 
                style={{textDecoration: todo.complete ? "line-through" : "none"}}
            >
                <input 
                    type="checkbox" 
                    checked={todo.complete} 
                    onChange={() => toggleTodo(todo)}/>
                {todo.text}
            </label>
        </ol>
    )
}