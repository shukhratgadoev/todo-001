import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { TodoList } from './components/TodoList/TodoList';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const toggleTodo: ToggleTodo = (selectedTodo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addTodo: AddTodo = (newTodo) => {
		newTodo.trim() !== '' &&
			setTodos([...todos, { text: newTodo, complete: false }]);
	};
	return (
		<React.Fragment>
			<AddTodoForm addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} />
		</React.Fragment>
	);
};

export default App;
