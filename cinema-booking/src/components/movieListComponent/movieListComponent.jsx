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
      <span
        onClick={() => {
          navigate("/movieForm");
        }}
        className="btn btn-primary addMovie"
      >
        Add Movie
      </span>
      <div className="row">
        {movieList.map((movie) => {
          return (
            <div className="col-sm" key={movie.id}>
              <div className="card m-2" style={{"height":"400px","width":"400px"}}>
                <div className="movieImage">
                  <img className="card-img-top" src={movie.image}  style={{"maxHeight":"200px"}} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <h6>{movie.genre}</h6>
                  <span
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(deleteMovie(movie));
                    }}
                  >
                    Delete
                  </span>
                  <span
                    className="btn btn-primary button"
                    onClick={() => {
                      navigate("/detail/" + movie?.id);
                    }}
                  >
                    Details
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
