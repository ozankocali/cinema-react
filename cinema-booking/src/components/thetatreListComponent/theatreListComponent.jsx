import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTheatre } from "../../store/theatreStore";
import "./theatreListComponent.css";

const TheatreListComponent = (props) => {
  const theatreList = useSelector((state) => state.theatreStore.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <span
        onClick={() => {
          navigate("/theatreForm");
        }}
        className="btn btn-primary"
      >
        Add Theatre
      </span>
      <div className="row">
        {theatreList.map((theatre) => {
          return (
            <div className="col-sm" key={theatre.id}>
              <div className="card">
                <div className="card-body">
                  <h4>Theatre Name:</h4>
                  <h5 className="card-title">{theatre.name}</h5>
                  <h4>Theatre Capacity:</h4>
                  <h6>{theatre.numberOfSeats}</h6>
                  <span
                    href="#"
                    className="btn btn-primary m-2"
                    onClick={() => {
                      dispatch(deleteTheatre(theatre));
                    }}
                  >
                    Delete
                  </span>
                  <span
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/theatre/" + theatre.id);
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

export default TheatreListComponent;
