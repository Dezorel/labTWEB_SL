import { useState } from 'react'
import { useTodosStore } from './TodosContext'
import localStorage from 'mobx-localstorage';

const AddTodo = () => {
	const [ todoBody, setTodoBody ] = useState('');
	const todosStore = useTodosStore();

	const handleAddTodo = () => {
		todosStore.addTodo(todoBody);
		localStorage.setItem("lab", todoBody);
		delayedAlert()
		setTodoBody('');
	};

	return (
		<>
			<input value={todoBody} onChange={(e) => setTodoBody(e.target.value)} type="text" placeholder="todo" />
			<button onClick={handleAddTodo}>add todo</button>
		</>
	);
}

export default AddTodo

function delayedAlert() {
	setTimeout(slowAlert, 2000);
}

function slowAlert() {
	let key = "lab";
	alert("Todo was saved: key:" + key + ", value: " + localStorage.getItem(key));
}