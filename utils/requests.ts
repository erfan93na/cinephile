const API_KEY = process.env.API_KEY;

const requests = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
 
  fetchAction: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
  },
};
export default requests;
