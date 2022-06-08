import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const TopbarComponent = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Cinema Booking
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span
              className="nav-link"
              onClick={() => {
                navigate("/");
              }}
            >
              Ana Sayfa <span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admin Paneli
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/movie");
                }}
              >
                Filmler
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/theatre");
                }}
              >
                Salonlar
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/session");
                }}
              >
                Seanslar
              </span>
            </div>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => {
                  navigate("/sessionList");
                }}>
              Seanslar
            </span>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle "
              id="navbarDropdown2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUser} />
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Giriş Yap
              </span>
              <span
                className="dropdown-item"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Kaydol
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopbarComponent;
