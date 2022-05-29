import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSession } from "../../store/sessionStore";

const SessionFormComponent = (props) => {
  const theatreList = useSelector((state) => state.theatreStore.data);
  const movieList = useSelector((state) => state.movieStore.data);

  const movieSelection = Object.assign([], movieList);
  const theatreSelection = Object.assign([], theatreList);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSession({ inputs: inputs }));
    alert(inputs);
  };

  useEffect(() => {
    //  console.log(inputs);
  }, [inputs]);

  return (
    <div className="container">
      <h1 style={{"textAlign":"center"}}>Add New Session</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Enter Session ID:</label>
          <input
            class="form-control"
            type="text"
            name="id"
            value={inputs.id || ""}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Enter Session Name:</label>
          <input
            class="form-control"
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label>Movie</label>
          <select
            multiple
            class="form-control"
            name="movie"
            value={inputs.movie || {}}
            onChange={handleChange}
          >
            {movieSelection.map((option, index) => (
              <option key={index} value={Object.assign({}, option)}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div class="form-group">
          <label>Theatre:</label>

          <select
            multiple
            class="form-control"
            id="exampleFormControlSelect3"
            name="theatre"
            value={inputs.theatre || {}}
            onChange={handleChange}
          >
            {theatreSelection.map((option, index) => (
              <option key={index} value={Object.assign({}, option)}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Send{" "}
        </button>
      </form>
    </div>
  );
};

export default SessionFormComponent;
