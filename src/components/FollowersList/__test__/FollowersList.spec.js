import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowerList from "../FollowersList";

const MockFollowersList = () => (
	<BrowserRouter>
		<FollowerList />
	</BrowserRouter>
);

beforeEach(() => {
	// console.log("RUNS BEFORE EACH TEST")
	// jest.mock("../../../__mocks__/axios");
});

// beforeAll(() => {
//     console.log("RUNS ONCE BEFORE ALL TESTS")
// })

// afterEach(() => {
//     console.log("RUNS AFTER EACH TEST")
// })

// afterAll(() => {
//     console.log("RUNS ONCE AFTER ALL TESTS")
// })

describe("FollowersList tests", () => {
	it("should render follower items", async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findByTestId("follower-item-0");
		expect(followerDivElement).toBeInTheDocument();
	});

	it("should render multiple follower items", async () => {
		render(<MockFollowersList />);
		const followerDivElement = await screen.findAllByTestId(/follower-item/i);
		expect(followerDivElement.length).toBe(1);
	});
});
