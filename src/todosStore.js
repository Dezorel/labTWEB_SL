import { nanoid } from 'nanoid'

export function createTodosStore() {
	return {
		todos: [],
		addTodo(body) {
			this.todos.push({ body, id: nanoid() });
		},
		removeTodo(id) {
			console.log(id, this.todos);
			this.todos = this.todos.filter(todo => todo.id !== id);
		}
	}
};