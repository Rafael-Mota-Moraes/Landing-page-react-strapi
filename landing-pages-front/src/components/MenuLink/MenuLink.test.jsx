import { screen } from "@storybook/testing-library";
import { MenuLink } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<MenuLink />", () => {
  it("should render a link", () => {
    renderTheme(<MenuLink link="http://localhost:3000">Children</MenuLink>);

    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_self"
    );
  });

  it("should open in a new tab", () => {
    renderTheme(
      <MenuLink link="http://localhost:3000" newTab={true}>
        Children
      </MenuLink>
    );

    expect(screen.getByRole("link", { name: "Children" })).toHaveAttribute(
      "target",
      "_blank"
    );
  });
  it("should match a snapshot", () => {
    renderTheme(
      <MenuLink link="http://localhost:3000" newTab={false}>
        Children
      </MenuLink>
    );

    expect(screen.getByRole("link", { name: "Children" })).toMatchSnapshot();
  });
});
