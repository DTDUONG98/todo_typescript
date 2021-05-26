import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AddTodo } from './types';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodos, setNewTodos] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodos(e.target.value);
    }

    const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodos);
        setNewTodos("");
    }
    return (
        <form action="">
            <input type="text" value={newTodos} onChange={handleChange}/>
            <button type="submit" onClick={onSubmit}>Add Todo</button>
        </form>
    )
}