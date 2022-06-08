import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movies } from "../../data/movieData";
import movieStore, { deleteMovie } from "../../store/movieStore";
import "./movieListComponent.css";

const MovieListComponent = (props) => {
  const movieList = useSelector((state) => state.movieStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Film Listesi</h1>
      <span
        onClick={() => {
          navigate("/movieForm");
        }}
        className="btn btn-success addMovie"
      >
        Film Ekle
      </span>

      <div className="row">
        {movieList.map((movie) => {
          return (
            <div className="col-sm" key={movie.id}>
              <div
                className="card m-2"
                style={{ height: "400px", width: "400px" }}
              >
                <div className="movieImage">
                  <img
                    className="card-img-top"
                    src={movie.image}
                    style={{ maxHeight: "200px" }}
                  />
                </div>
                <div className="card-body">
                  <div className="row">
                    <h5>Film Adı:</h5>
                    <h5>
                      {""}
                      {movie.name}
                    </h5>
                  </div>
                  <div className="row">
                    <h5>Film Türü:</h5>
                    <h5>
                      {""}
                      {movie.genre}
                    </h5>
                  </div>
                  <div className="row">
                    <h5>Film Ücreti:</h5>
                    <h5>
                      {""}
                      {movie.ticketPrice}₺
                    </h5>
                  </div>
                  <span
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(deleteMovie(movie));
                    }}
                  >
                    Sil
                  </span>
                  <span
                    className="btn btn-danger button"
                    onClick={() => {
                      navigate("/detail/" + movie?.id);
                    }}
                  >
                    Görüntüle
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieListComponent;
