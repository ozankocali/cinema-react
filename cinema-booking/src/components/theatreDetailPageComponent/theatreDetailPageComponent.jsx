import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TheatreDetailPageComponent = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const sessions = useSelector((state) => state.sessionStore.data)
    .filter((x) => x.theatre.id === params.id)
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

  return (
    <div className="container">
      {sessions.map((session) => {
        return (
          <div className="col-sm" key={session.id}>
            <div
              className="card m-2"
              style={{ height: "400px", width: "400px" }}
            >
              <div className="movieImage">
                <img
                  className="card-img-top"
                  src={session.movie.image}
                  style={{ maxHeight: "200px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{session.movie.name}</h5>
                <h6>{session.movie.genre}</h6>
                <span
                  className="btn btn-primary button"
                  onClick={() => {
                    navigate("/booking/" + session.id);
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
  );
};

export default TheatreDetailPageComponent;
