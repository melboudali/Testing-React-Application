import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
	<BrowserRouter>
		<TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
	</BrowserRouter>
);

describe("TodoFooter tests", () => {
	it("should render the correct amount of incomplet tasks", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={5} />);
		const paragraphElement = screen.getByText(/5 tasks left/i);
		expect(paragraphElement).toBeInTheDocument();
	});

	it("should render 'task' when the number of incomplete tasks is one", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const paragraphElement = screen.getByText(/1 task left/i);
		expect(paragraphElement).toBeInTheDocument();
		expect(paragraphElement).toContainHTML("p");
	});
});

describe("Learning tests", () => {
	it("should render 'task' when the number of incomplete tasks is one with getByTestId", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const paragraphElement = screen.getByTestId("para");
		expect(paragraphElement).toHaveTextContent("1 task left");
	});

	it("should render 'task' when the number of incomplete tasks is one with .not", () => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const paragraphElement = screen.getByTestId("para");
		expect(paragraphElement).not.toBeFalsy(); // to be truthy
		expect(paragraphElement.textContent).toBe("1 task left");
		expect(paragraphElement.textContent).not.toBe("1 tasks left");
	});
});
