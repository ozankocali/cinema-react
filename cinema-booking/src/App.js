import logo from "./logo.svg";
import "./App.css";
import TopbarComponent from "./components/topbarComponent/topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from "./components/homePageComponent/homePageComponent";
import TheatreForm from "./components/theatreFormComponent/theatreFormComponent";
import MovieListComponent from "./components/movieListComponent/movieListComponent";

function App() {
  return (
    <div>
      <TopbarComponent></TopbarComponent>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePageComponent />} />
          <Route exact path="theatre" element={<TheatreForm />} />
          <Route exact path="movie" element={<MovieListComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
