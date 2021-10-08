import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => (
	<BrowserRouter>
		<Todo />
	</BrowserRouter>
);

const addTask = todos => {
	const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
	const buttonElement = screen.getByRole("button", { name: /add/i });
	todos.forEach(value => {
		fireEvent.change(inputElement, { target: { value } });
		fireEvent.click(buttonElement);
	});
};

describe("Todo Tests", () => {
	it("should render single item", () => {
		render(<MockTodo />);
		const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
		const buttonElement = screen.getByRole("button", { name: /add/i });
		fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
		fireEvent.click(buttonElement);

		const divElement = screen.getByText(/go grocery shopping/i);

		expect(divElement).toBeInTheDocument();
	});

	it("should render multiple items", () => {
		render(<MockTodo />);
		addTask(["Go Grocery Shopping", "Pet My Cat", "Wash My Hands"]);
		const divElements = screen.getAllByTestId("task-container");

		expect(divElements.length).toBe(3);
	});

	it("tasks should not have completed class when initially rendered", () => {
		render(<MockTodo />);
		addTask(["Go Grocery Shopping", "Pet My Cat", "Wash My Hands"]);
		const divElement = screen.getByText(/go grocery shopping/i);

		expect(divElement).not.toHaveClass("todo-item-active");
	});

	it("tasks should have completed class when clicked", () => {
		render(<MockTodo />);
		addTask(["Go Grocery Shopping", "Pet My Cat", "Wash My Hands"]);
		const divElement = screen.getByText(/go grocery shopping/i);
		fireEvent.click(divElement);
		expect(divElement).toHaveClass("todo-item-active");
	});
});
