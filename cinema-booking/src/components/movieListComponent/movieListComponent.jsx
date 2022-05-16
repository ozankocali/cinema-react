import {useSelector} from "react-redux"
import { movies } from "../../data/movie";
const MovieListComponent = (props) => {
const movies=movies;

  return (
    <div className="container">
        <div className="row">
      {movies.map((movie) => {
        return (
          <div className="col-sm" key={movie.id}>
            <div className="card" style={{ width: "18rem" }} >
              <img className="card-img-top" src={movie.image} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
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
