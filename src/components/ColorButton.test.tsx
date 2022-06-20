import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ColorButton from "./ColorButton";

afterAll(() => {
  cleanup();
});

test("Change the button color from red to blue when clicked", () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

// test("Change the button color from blue to red when clicked", () => {
//   render(<ColorButton />);
//   const colorButton = screen.getByRole("button", { name: /change to red/i });
//   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({ backgroundColor: "red" });
//   expect(colorButton).toHaveTextContent("Change to blue");
// });
