const API_KEY = `5e2008407733040783ac329c2aae8cdb`;
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/seek?api_key=${API_KEY}&language-en-US`,
  },
  fetchTrending: {
    title: "Trending",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTrending: {
    title: "Top Rated",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchAction: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchScifi: {
    title: "Sci-fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: "Tv Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
