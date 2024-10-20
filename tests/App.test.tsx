import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import App from "../src/App";

it("loads App component and displays title", () => {
  render(<App />);

  const title : HTMLElement = screen.getByTestId("title");
  expect(title).toHaveTextContent("Vite + React");
});
