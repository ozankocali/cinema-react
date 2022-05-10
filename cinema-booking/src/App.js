import logo from "./logo.svg";
import "./App.css";
import TopbarComponent from "./components/topbarComponent/topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from "./components/homePageComponent/homePageComponent";
import TheatreForm from "./components/theatreFormComponent/theatreFormComponent";
import MovieForm from "./components/movieFormComponent/movieFormComponent";

function App() {
  return (
    <div>
      <TopbarComponent></TopbarComponent>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePageComponent />} />
          <Route exact path="theatre" element={<TheatreForm />} />
          <Route exact path="movie" element={<MovieForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
