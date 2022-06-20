// import "@testing-library/react/dont-cleanup-after-each";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  // cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { server } from "../mocks/server";
import { errorHandlers } from "../mocks/errorHandlers";

const user = userEvent.setup();

test("When clicking on the fetch posts button it should list out the posts", async () => {
  render(<App />);
  expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Fetch Posts" }));
  await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));
  //waitForElementToBeRemoved(() => {});
  const heading = screen.getAllByRole("heading", {
    level: 3,
  });
  expect(heading[0]).toBeInTheDocument();
});

test("When clicking on the clear posts button it should clear the posts.", async () => {
  render(<App />);
  // await screen.getByLabelText(/Modern React Testing/i);
  expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Clear Posts" }));
  expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
});

test("Display error message when fetch posts data failed", async () => {
  server.use(...errorHandlers);
  render(<App />);
  // screen.debug();
  expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Fetch Posts" }));
  // screen.debug();
  await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));
  // screen.debug();
  expect(screen.getByText(/Internal Server Error/i)).toBeInTheDocument();
});

// describe("When clicking on the fetch posts button it should list out the posts", () => {
// 	afterAll(() => {
// 		cleanup();
// 	});

// 	it("Renders the heading", () => {
// 		render(<App />);
// 		expect(screen.getByText(/Modern React Testing/i)).toBeDefined();
// 	});

// 	it("Clicking on the fetch posts button", async () => {
// 		await user.click(screen.getByRole('button', { name: 'Fetch Posts' }));
// 	});

// 	it("Renders in the loading state", async () => {
// 		await waitForElementToBeRemoved(() =>
// 			screen.queryByLabelText('loading')
// 		);
// 	});

// 	it("Should list out the post", () => {
// 		expect(screen.getAllByRole('heading', { level: 3 })).toBeDefined();
// 	});
// })

// describe("When clicking on the clear posts button it should clear the posts.", () => {
// 	afterAll(() => {
// 		cleanup();
// 	});

// 	it("Renders the heading", () => {
// 		render(<App />);
// 		expect(screen.getByText(/Modern React Testing/i)).toBeDefined();
// 	});

// 	it("Clicking on the clear posts button", async () => {
// 		await user.click(screen.getByRole('button', { name: 'Clear Posts' }));
// 	});

// 	it('Should clear the posts', () => {
// 		expect(screen.queryByRole('heading', { level: 3 })).toBeNull();
// 	});
// })
