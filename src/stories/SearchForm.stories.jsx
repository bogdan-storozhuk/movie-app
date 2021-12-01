import { BrowserRouter as Router } from "react-router-dom";
import SearchForm from "../components/searchForm";

export default {
  title: "Form/SearchForm",
  component: SearchForm,
};

const Template = (args) => (
  <Router>
    <SearchForm {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  search: "test search",
};
