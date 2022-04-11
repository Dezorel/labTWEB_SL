import React from 'react'

import { useObserver } from 'mobx-react';
import { useTodosStore } from './TodosContext';

import Todo from './Todo';
import AddTodo from './AddTodo';

import './App.css'

function App() {
	const todosStore = useTodosStore();

  console.log(todosStore.todos, 'are')

  return useObserver(() => (
    <>
      {todosStore.todos.map(todo => <Todo key={todo.id} text={todo.body} id={todo.id} />)}
      <AddTodo />
    </>
  ));
}

export default App;
