import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSession } from "../../store/sessionStore";
import { deleteTheatre } from "../../store/theatreStore";

const BookingSessionPageComponent = (props) => {
  const sessionList = useSelector((state) => state.sessionStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container" style={{"textAlign":"center"}}>
      <div className="row">
        {sessionList.map((session) => {
          return (
            <div className="col-sm" key={session?.id}>
              <div
                className="card m-2"
                style={{ height: "500px", width: "400px" }}
              ><div className="movieImage">
                <img className="card-img-top " src={session?.movie?.image} />
                </div>
                <div className="card-body">
                <div className="row">
                    <h5>Session Name: </h5>
                    <h5 className="card-title">{session?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Movie Name: </h5>
                    <h5 className="card-title">{session?.movie?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Theatre Name: </h5>
                    <h5 className="card-title">{session?.theatre?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Number of Seats: </h5>
                    <h5>{session.theatre?.numberOfSeats}</h5>
                  </div>

                  <span
                   
                    className="btn btn-primary button"
                    onClick={() => {
                     navigate("/booking/"+session?.id);
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

export default BookingSessionPageComponent;
