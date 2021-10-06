interface todoType {
	todo: { id: number; title: string; completed: boolean };
}
const Todo = ({ todo: { id, title, completed } }: todoType) => {
	const h1 = <h1>{title}</h1>;
	const text = completed ? <del>{h1}</del> : h1;
	return <div data-testid={`todo-${id}`}>{text}</div>;
};

export default Todo;
