import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header tests", () => {
	it("render learn react link", () => {
		render(<Header title="My Header" />);
		const headingElement = screen.getByText(/my header/i);
		expect(headingElement).toBeInTheDocument();
	});

	it("should render same text passed into title prop", () => {
		render(<Header title="My Header" />);
		const headingElement = screen.getByRole("heading", { name: "Header" });
		expect(headingElement).toBeInTheDocument();
	});
});

describe("Learning tests", () => {
	it("should render same text passed into title prop with getByTitle", () => {
		render(<Header title="My Header" />);
		const headingElement = screen.getByTitle("Header");
		expect(headingElement).toBeInTheDocument();
	});

	it("should get the secont header with getByTestId", () => {
		render(<Header title="My Header" />);
		const headingElement = screen.getByTestId("header-2");
		expect(headingElement).toBeInTheDocument();
	});

	// Find By

	it("should render same text passed into title prop with findByTest", async () => {
		render(<Header title="My Header" />);
		const headingElement = await screen.findByText(/my header/i);
		expect(headingElement).toBeInTheDocument();
	});

	// Query By

	it("check if the text is not in the document", () => {
		render(<Header title="My Header" />);
		const headingElement = screen.queryByText(/cats/i);
		expect(headingElement).not.toBeInTheDocument();
	});

	it("should get all headings with getAllByRole", () => {
		render(<Header title="My Header" />);
		const headingElements = screen.getAllByRole("heading");
		expect(headingElements.length).toBe(2);
	});
});
