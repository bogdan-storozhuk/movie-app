import Title from "../components/title";

export default {
  title: "Title",
  component: Title,
};

const Template = (args) => <Title {...args}>{args.children}</Title>;

export const Default = Template.bind({});
Default.args = {
  children: <p>Default Title</p>,
};
