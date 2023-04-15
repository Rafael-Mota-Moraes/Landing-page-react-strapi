import { SectionContainer } from ".";

export default {
  title: "SectionContainer",
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Testando section container</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eaque
          enim accusamus exercitationem consectetur eius commodi, sapiente
          soluta a, maiores sequi saepe praesentium, asperiores sint ipsam
          voluptatum quisquam ipsum? Voluptate!
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: "" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
