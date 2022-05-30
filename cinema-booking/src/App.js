import logo from "./logo.svg";
import "./App.css";
import TopbarComponent from "./components/topbarComponent/topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from "./components/homePageComponent/homePageComponent";
import TheatreForm from "./components/theatreFormComponent/theatreFormComponent";
import MovieListComponent from "./components/movieListComponent/movieListComponent";
import MovieFormComponent from "./components/movieFormComponent/movieFormComponent";
import TheatreListComponent from "./components/thetatreListComponent/theatreListComponent";
import SessionListComponent from "./components/sessionListComponent/sessionListComponent";
import SessionFormComponent from "./components/sessionFormComponent/sessionFormComponent";
import BookingPageComponent from "./components/bookingPageComponent/bookingPageComponent";
import LoginPageComponent from "./components/loginPageComponent/loginPageComponent";
import PurchasePageComponent from "./components/purchasePageComponent/purchasePageComponent";
import SignUpPageComponent from "./components/signUpPageComponent/signUpPageComponent";
import AfterPaymentPageComponent from "./components/afterPaymentPageComponent/afterPaymentPageComponent";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopbarComponent></TopbarComponent>

        <Routes>
          <Route exact path="/" element={<HomePageComponent />} />
          <Route exact path="theatreForm" element={<TheatreForm />} />
          <Route exact path="theatre" element={<TheatreListComponent />} />
          <Route exact path="movie" element={<MovieListComponent />} />
          <Route exact path="movieForm" element={<MovieFormComponent />} />
          <Route exact path="session" element={<SessionListComponent />} />
          <Route exact path="sessionForm" element={<SessionFormComponent />} />
          <Route exact path="booking/:id" element={<BookingPageComponent />} />
          <Route exact path="login" element={<LoginPageComponent />} />
          <Route exact path="purchase" element={<PurchasePageComponent />} />
          <Route exact path="signup" element={<SignUpPageComponent />} />
          <Route exact path="afterPayment" element={<AfterPaymentPageComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
