import { screen } from "@storybook/testing-library";
import { LogoLink } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole("heading", { name: "Olá mundo" });

    expect(heading.firstChild).toHaveAttribute("href", "#target");
  });

  it("should render text logo", () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />
    );

    expect(screen.getByRole("img", { name: "Olá mundo" })).toHaveAttribute(
      "src",
      "image.jpg"
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
