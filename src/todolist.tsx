import React from 'react';
import { ListItem } from './ListItem';
import { Todo, ToggleTodo } from './types';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return(
        <ul>
            {todos.map(todo => {
                return( <ListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />);
            })}
        </ul>
    )
}