const API_KEY="57dd8e9c2af610cc01ea45d8a8a02733";
const request={
fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopratedMovies : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default request;


