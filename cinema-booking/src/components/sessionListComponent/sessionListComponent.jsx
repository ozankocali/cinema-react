import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSession } from "../../store/sessionStore";
import { deleteTheatre } from "../../store/theatreStore";
import "./sessionListComponent.css"

const SessionListComponent = (props) => {
  const sessionList = useSelector((state) => state.sessionStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container" style={{"textAlign":"center"}}>
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
              ><div className="movieImage">
                <img className="card-img-top " src={session.movie.image} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{session.name}</h5>
                  <h6>{session.theatre.numberOfSeats}</h6>
                  <h5 className="card-title">{session.movie.name}</h5>
                  <h5 className="card-title">{session.theatre.name}</h5>

                  <span
                    className="btn btn-primary button"
                    onClick={() => {
                      dispatch(deleteSession(session));
                    }}
                  >
                    Delete
                  </span>
                  <span
                   
                    className="btn btn-primary button"
                    onClick={() => {
                     navigate("/booking/"+session.id);
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

export default SessionListComponent;
