import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movies } from "../../data/movieData";
import movieStore, { deleteMovie } from "../../store/movieStore";

const MovieListComponent = (props) => {
  const movieList = useSelector((state) => state.movieStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container">
      <span
        onClick={() => {
          navigate("/movieForm");
        }}
        className="btn btn-primary"
      >
        Add Movie
      </span>
      <div className="row">
        {movieList.map((movie) => {
          return (
            <div className="col-sm" key={movie.id}>
              <div
                className="card"
                style={{ width: "18rem", minHeight: "400px" }}
              >
                <img className="card-img-top" src={movie.image} />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <h6>{movie.genre}</h6>
                  <a href="#" className="btn btn-primary" onClick={()=>{dispatch(deleteMovie(movie))}}>
                    Delete
                  </a>
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
