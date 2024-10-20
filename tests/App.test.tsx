import {render, screen} from '@testing-library/react'
import App from "../src/App";

it("loads App component and displays title", () => {
  render(<App />);

  const expectTextContent : string = "Hello Jest"
  const title : HTMLElement = screen.getByTestId("title");
  expect(title).toHaveTextContent(expectTextContent);
});
