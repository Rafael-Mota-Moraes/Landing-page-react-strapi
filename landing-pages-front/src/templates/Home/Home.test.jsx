/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import { screen } from "@testing-library/react";
import Home from ".";
import { renderTheme } from "../../styles/renderTheme";

test("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);

  const headingContainer = screen.getByRole("heading", {
    name: "Hello World!"
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: "red"
  });

  expect(headingContainer).toMatchSnapshot();
});
