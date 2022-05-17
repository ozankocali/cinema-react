import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTheatre } from "../../store/theatreStore";

const TheatreListComponent = (props) => {
    const theatreList = useSelector((state) => state.theatreStore.data);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    return (
      <div className="container">
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
                <div
                  className="card"
                  style={{ width: "18rem", minHeight: "400px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{theatre.name}</h5>
                    <h6>{theatre.numberOfSeats}</h6>
                    <a href="#" className="btn btn-primary" onClick={()=>{dispatch(deleteTheatre(theatre))}}>
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
  
  export default TheatreListComponent;
  