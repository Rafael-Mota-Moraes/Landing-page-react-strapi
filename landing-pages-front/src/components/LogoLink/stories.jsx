import { LogoLink } from ".";

export default {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "LogoLink",
    srcImg: "assets/images/logo.svg",
    link: "http://localhost"
  },
  argTypes: {
    children: { type: "string" },
    text: { type: "string" },
    image: { type: "string" },
    link: { type: "string" },
    srcImg: { type: "string" }
  }
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: ""
};
