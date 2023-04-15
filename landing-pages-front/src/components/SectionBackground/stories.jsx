import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>Testando section container</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            eaque enim accusamus exercitationem consectetur eius commodi,
            sapiente soluta a, maiores sequi saepe praesentium, asperiores sint
            ipsam voluptatum quisquam ipsum? Voluptate!
          </p>
        </div>
      </SectionContainer>
    )
  },
  argTypes: {
    children: { type: "" }
  }
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
