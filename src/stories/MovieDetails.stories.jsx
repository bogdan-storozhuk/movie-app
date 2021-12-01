import MovieDetails from "../components/movieDetails";

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedMovie: {
    id: 498299,
    title: "Can I Recognize Your Soul",
    tagline: "when physical appearance is the least what you need",
    overview:
      "As Christine tries to find a relief after her brother's death, she meets Alonzo at the neighborhood basketball court. After finding out that he lost his father 2 years prior, they became close, and felt that if they stuck together, it would be easier to cope. Now Christine is trying to find a way to encounter her brother's soul as her relationship with Alonzo develops.",
    budget: 0,
    revenue: 0,
    runtime: null,
    voteAverage: 0,
    voteCount: 0,
    releaseDate: "2018-04-03",
    posterPath:
      "https://image.tmdb.org/t/p/w500/luz35TmazOgRbJboWt24owoB5Eg.jpg",
    genres: [
      {
        name: "Mystery",
      },
      {
        name: "Drama",
      },
      {
        name: "Music",
      },
    ],
  },
};
