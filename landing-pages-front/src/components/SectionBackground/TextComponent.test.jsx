import { screen } from "@storybook/testing-library";
import { SectionBackground } from ".";
import { renderTheme } from "../../styles/renderTheme";

describe("<SectionBackground />", () => {
  it("should render with backgrond dark", () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>Children</SectionBackground>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render with backgrond light", () => {
    const { container } = renderTheme(
      <SectionBackground background={false}>Children</SectionBackground>
    );

    expect(container).toMatchSnapshot();
  });
});
