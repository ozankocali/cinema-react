import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetailsPageComponent = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movieStore.data).filter(
    (x) => x.id === params.id
  )[0];
  return (
    <div
      className="container"
      style={{ verticalAlign: "center", textAlign: "center" }}
    >
      <div className="card">
        <div className="container">
          <img
            src={movie.image}
            style={{ height: "800px", width: "1000px" }}
            alt=""
          />
        </div>

        <div className="card mt-2" style={{ textAlign: "center" }}>
          <div className="row">
            <h4 style={{ textAlign: "center" }}>Movie Name:</h4>
            <h4 style={{ textAlign: "center" }}>{movie.name}</h4>
          </div>
          <div className="row">
            <h4 style={{ textAlign: "center" }}>Movie Director:</h4>
            <h4 style={{ textAlign: "center" }}>{movie.director}</h4>
          </div>

          <div className="row">
            <h4 style={{ textAlign: "center" }}>Movie Genre:</h4>
            <h4 style={{ textAlign: "center" }}>{movie.genre}</h4>
          </div>
          <div className="row">
            <h4 style={{ textAlign: "center" }}>Movie Ticket Price:</h4>
            <h4 style={{ textAlign: "center" }}>{movie.ticketPrice} ₺</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPageComponent;
