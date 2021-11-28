import { BrowserRouter as Router } from "react-router-dom";
import { MovieListItem } from "../components/movieListItem";

export default {
  title: "MovieListItem",
  component: MovieListItem,
};

const Template = (args) => (
  <Router>
    <MovieListItem {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  genres: [
    {
      name: "Action",
    },
    {
      name: "Drama",
    },
    {
      name: "Science Fiction",
    },
  ],
  releaseDate: "1989-05-24",
  posterPath: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
  id: 89,
};
