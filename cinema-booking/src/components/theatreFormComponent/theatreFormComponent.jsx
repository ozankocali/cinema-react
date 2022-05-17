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
    <form onSubmit={handleSubmit}>
      <label>
        Enter Theatre ID:
        <input
          type="text"
          name="id"
          value={inputs.id || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Theatre Name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Theatre Number Of Seats:
        <input
          type="text"
          name="numberOfSeats"
          value={inputs.numberOfSeats || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default TheatreFormComponent;
