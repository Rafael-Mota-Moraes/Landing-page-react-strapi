import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam amet nisi, sit inventore nostrum temporibus culpa consequuntur quis ratione. Cumque repudiandae a maxime laudantium quod blanditiis sit qui illum.`
  },
  argTypes: {
    children: { type: "string" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
