import P from "prop-types";
import * as Styled from "./styles";

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <Styled.Container newTab={newTab} target={target} href={link}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool
};
