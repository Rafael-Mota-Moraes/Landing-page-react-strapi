/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import { screen } from "@testing-library/react";
import Home from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<Home />", () => {
  it("should render home", () => {
    renderTheme(<Home />);
  });
});
