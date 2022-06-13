import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("The Header component should display the title props that we input", () => {
  render(<Header title="Modern React Testing" />);
  expect(screen.getByText(/Modern React Testing/i)).toBeInTheDocument();
});
