import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSession } from "../../store/sessionStore";
import { deleteTheatre } from "../../store/theatreStore";
import "./sessionListComponent.css";

const SessionListComponent = (props) => {
  const sessionList = useSelector((state) => state.sessionStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Seans Listesi</h1>
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
            <div className="col-sm" key={session?.id}>
              <div
                className="card m-2"
                style={{ height: "600px", width: "400px" }}
              >
                <div className="movieImage">
                  <img className="card-img-top " src={session?.movie?.image} />
                </div>
                <div className="card-body">
                  <div className="row">
                    <h5>Seans Adı: </h5>
                    <h5 className="card-title">{session?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Film Adı: </h5>
                    <h5 className="card-title">{session?.movie?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Salon Adı: </h5>
                    <h5 className="card-title">{session?.theatre?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Salon Kapasitesi: </h5>
                    <h5>{session.theatre?.numberOfSeats}</h5>
                  </div>
                  <div className="row">
                    <h5>Seans Tarihi: </h5>
                    <h5>{new Date(session.date).toLocaleDateString()}</h5>
                  </div>
                  <div className="row">
                    <h5>Salon Kapasitesi: </h5>
                    <h5>{new Date(session.date).toLocaleTimeString()}</h5>
                  </div>

                  <span
                    className="btn btn-primary button"
                    onClick={() => {
                      dispatch(deleteSession(session));
                    }}
                  >
                    Sil
                  </span>
                  <span
                    className="btn btn-primary button"
                    onClick={() => {
                      navigate("/booking/" + session?.id);
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

export default SessionListComponent;
