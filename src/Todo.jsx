import React from 'react'
import { useTodosStore } from './TodosContext';

const Todo = ({ text, id }) => {
	const todosStore = useTodosStore();

	const handleCloseTodo = () => {
		todosStore.removeTodo(id);
	};

	return (
		<div onClick={handleCloseTodo} className="todo-container">
			<span>{text}</span>
			<span>x</span>
		</div>	
	)
}

export default Todo;