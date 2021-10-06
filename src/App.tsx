import Todo from "./components/Todo";

const App = () => {
	const todos = [
		{ id: 1, title: "wash dishes", completed: false },
		{ id: 2, title: "make dinner", completed: true }
	];
	return (
		<div>
			{todos.map(todo => (
				<Todo todo={todo} key={todo.id} />
			))}
		</div>
	);
};

export default App;
