import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import movieStore, { addMovie } from "../../store/movieStore";

const MovieFormComponent = (props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const newMovie = {
    id: 0,
    name: "",
    genre: "",
    image: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie({ inputs: inputs }));
    alert(inputs);
  };

  useEffect(() => {
    //  console.log(inputs);
  }, [inputs]);

  return (
    <div className="container">
      <h1 style={{"textAlign":"center"}}>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Movie ID:</label>
          <input
            className="form-control"
            type="text"
            name="id"
            value={inputs.id || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Genre:</label>

          <input
            className="form-control"
            type="text"
            name="genre"
            value={inputs.genre || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Image:</label>
          <input
            className="form-control"
            type="text"
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default MovieFormComponent;
