import { screen } from "@storybook/testing-library";
import { GridTwoColumn } from ".";
import { renderTheme } from "../../styles/renderTheme";
import mock from "./mock";

describe("<GridTwoColumn />", () => {
  it("should render grid with two columns", () => {
    const { container } = renderTheme(
      <GridTwoColumn {...mock}></GridTwoColumn>
    );

    expect(container).toMatchSnapshot();
  });
});
