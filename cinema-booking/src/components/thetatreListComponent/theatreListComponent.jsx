import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTheatre } from "../../store/theatreStore";
import "./theatreListComponent.css"

const TheatreListComponent = (props) => {
    const theatreList = useSelector((state) => state.theatreStore.data);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    return (
      <div className="container" style={{"textAlign":"center"}}>
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
                >
                  <div className="card-body">
                    <h4>Theatre Name:</h4>
                    <h5 className="card-title">{theatre.name}</h5>
                    <h4>Theatre Capacity:</h4>
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
  