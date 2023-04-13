import { screen, within } from "@storybook/testing-library";
import { TextComponent } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<TextComponent />", () => {
  it("should render a text", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("should render a text", () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
