import styled, { css } from "styled-components";

const titleSize = (size, theme) => {
  if (size === "small") {
    return css`
      font-size: ${theme.font.sizes.medium};
    `;
  }

  if (size === "medium") {
    return css`
      font-size: ${theme.font.sizes.large};
    `;
  }

  if (size === "big") {
    return css`
      font-size: ${theme.font.sizes.xlarge};
    `;
  }

  if (size === "huge") {
    return css`
      font-size: ${theme.font.sizes.xhuge};
      ${mediaFont(theme)}
    `;
  }
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize(size, theme)};
    ${titleCase(uppercase)};
  `}
`;
