import { useDispatch, useSelector } from "react-redux";
import { movies } from "../../data/movieData";
import movieStore from "../../store/movieStore";

const MovieListComponent = (props) => {
  const movieList = useSelector((state) => state.movieStore.data);

  return (
    <div className="container">
      <div className="row">
        {movieList.map((movie) => {
          return (
            <div className="col-sm" key={movie.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={movie.image} />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <h6>{movie.genre}</h6>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
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
