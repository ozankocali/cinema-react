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
            style={{ height: "600px", width: "800px" }}
            alt=""
          />
        </div>
      </div>

      <div className="card mt-2" style={{ textAlign: "center" }}>
        <div className="row ml-2">
          <h4 style={{ textAlign: "center" }}>Film Adı:</h4>
          <h4 style={{ textAlign: "center" }}>{movie.name}</h4>
        </div>
        <div className="row ml-2">
          <h4 style={{ textAlign: "center" }}>Yönetmen:</h4>
          <h4 style={{ textAlign: "center" }}>{movie.director}</h4>
        </div>

        <div className="row ml-2">
          <h4 style={{ textAlign: "center" }}>Tür:</h4>
          <h4 style={{ textAlign: "center" }}>{movie.genre}</h4>
        </div>
        <div className="row ml-2">
          <h4 style={{ textAlign: "center" }}>Bilet Ücreti:</h4>
          <h4 style={{ textAlign: "center" }}>{movie.ticketPrice} ₺</h4>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPageComponent;
