import movieData from "../assets/data/movies.json";

const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movieData.slice(0, 20));
    }, 700);
  });
};

export { getMovies };
