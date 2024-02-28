import Row from "./Component/Row/Row";
import Nav from "./Component/Nav/Nav";
import './App.css'
import Banner from "./Component/Banner/Banner";
import request from "./request";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Nnow" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopratedMovies}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horr Movies" fetchUrl={request.fetchHorrMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentary Movies" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
