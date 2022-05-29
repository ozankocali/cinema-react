import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import movieStore, { addMovie } from "../../store/movieStore";
import { addTheatre } from "../../store/theatreStore";

const TheatreFormComponent = (props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const newTheatre = {
    id: 0,
    name: "",
    numberOfSeats: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTheatre({ inputs: inputs }));
    alert(inputs);
  };

  useEffect(() => {
    //  console.log(inputs);
  }, [inputs]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Theatre ID:</label>
          <input
            className="form-control"
            type="text"
            name="id"
            value={inputs.id || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Theatre Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Theatre Number Of Seats:</label>
          <input
            className="form-control"
            type="text"
            name="numberOfSeats"
            value={inputs.numberOfSeats || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success"> Send</button>
      </form>
    </div>
  );
};

export default TheatreFormComponent;
