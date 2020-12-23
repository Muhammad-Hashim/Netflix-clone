import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import request from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";

const App = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner />
      <Row
        title="NETFLEX ORGINSLS"
        fetchUrl={request.fetchNetflixOriginals}
        islargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated " fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default App;
