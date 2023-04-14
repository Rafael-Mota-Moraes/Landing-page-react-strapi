import { screen } from "@storybook/testing-library";
import { NavLinks } from ".";
import { renderTheme } from "../../styles/renderTheme";
import mock from "./mock";
import { theme } from "../../styles/theme";

describe("<NavLinks />", () => {
  it("should render links", () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);

    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should not render links", () => {
    renderTheme(<NavLinks></NavLinks>);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it("should render links", () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);

    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      "flex-flow",
      "column wrap",
      {
        media: theme.media.lteMedium
      }
    );
  });

  it("should match a snapshot", () => {
    const { container } = renderTheme(<NavLinks links={mock}></NavLinks>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
