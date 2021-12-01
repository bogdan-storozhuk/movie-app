import { BrowserRouter as Router } from "react-router-dom";
import { GenreToggle } from "../components/genreToggle";

export default {
  title: "Controls/GenreToggle",
  component: GenreToggle,
};

const Template = (args) => (
  <Router>
    <GenreToggle {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  selectedGenre: "Thriller",
};
