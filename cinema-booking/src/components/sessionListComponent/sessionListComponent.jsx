import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSession } from "../../store/sessionStore";
import { deleteTheatre } from "../../store/theatreStore";

const SessionListComponent = (props) => {
  const sessionList = useSelector((state) => state.sessionStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container">
      <span
        onClick={() => {
          navigate("/sessionForm");
        }}
        className="btn btn-primary"
      >
        Add Session
      </span>
      <div className="row">
        {sessionList.map((session) => {
          return (
            <div className="col-sm" key={session.id}>
              <div
                className="card"
                style={{ width: "18rem", minHeight: "400px" }}
              >
                <img className="card-img-top" src={session.movie.image} />

                <div className="card-body">
                  <h5 className="card-title">{session.name}</h5>
                  <h6>{session.theatre.numberOfSeats}</h6>
                  <h5 className="card-title">{session.movie.name}</h5>
                  <h5 className="card-title">{session.theatre.name}</h5>

                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(deleteSession(session));
                    }}
                  >
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

export default SessionListComponent;
