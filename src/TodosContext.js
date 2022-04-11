import { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react'

import { createTodosStore } from './todosStore';

const TodosContext = createContext(null)

export const TodosProvider = ({ children }) => {
	const todosStore = useLocalStore(createTodosStore);

	return (
		<TodosContext.Provider value={todosStore}>
			{ children }
		</TodosContext.Provider>
	)
}

export const useTodosStore = () => useContext(TodosContext); 