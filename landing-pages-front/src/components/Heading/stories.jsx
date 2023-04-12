import { Heading } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Não sei"
  },
  argTypes: {
    children: { type: "string" },
    light: { type: "boolean" }
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
};

export const Light = (args) => <Heading {...args} colorDark={true} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light"
  }
};

Dark.args = {
  children: "O texto está claro",
  colorDark: false
};

Dark.parameters = {
  backgrounds: {
    default: "dark"
  }
};
