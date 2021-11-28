import { BrowserRouter as Router } from "react-router-dom";
import { DropDown } from "../components/dropdown";

export default {
  title: "Controls/DropDown",
  component: DropDown,
};

const Template = (args) => (
  <Router>
    <DropDown {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  sortBy: "voteAverage",
};
