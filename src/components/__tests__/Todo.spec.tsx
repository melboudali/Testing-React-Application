import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../Todo";

afterEach(() => {
	cleanup();
});

// it("should render todo component", () => {
// 	render(<Todo />);
// 	const todoElement = screen.getByTestId("todo-1");
// 	expect(todoElement).toBeInTheDocument();
// 	expect(todoElement).toHaveTextContent("Hello World!");
// });

it("should render non-completed todo", () => {
	const todo = { id: 1, title: "wash dishes", completed: false };
	render(<Todo todo={todo} />);
	const todoElement = screen.getByTestId("todo-1");
	expect(todoElement).toBeInTheDocument();
	expect(todoElement).toHaveTextContent("wash dishes");
});

it("should render completed", () => {
	const todo = { id: 2, title: "make dinner", completed: true };
	render(<Todo todo={todo} />);
	const todoElement = screen.getByTestId("todo-2");
	expect(todoElement).toBeInTheDocument();
	expect(todoElement).toHaveTextContent("make dinner");
	expect(todoElement.firstChild).toHaveStyle("text-decoration: line-through;");
});

it("matches snapshot", () => {
	const todo = { id: 1, title: "wash dishes", completed: false };
	const tree = renderer.create(<Todo todo={todo} />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("matches snapshot without react-test-renderer", () => {
	const todo = { id: 1, title: "wash dishes", completed: false };
	const { container } = render(<Todo todo={todo} />);
	expect(container).toMatchSnapshot();
});

export {};
