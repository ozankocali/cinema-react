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
    <form onSubmit={handleSubmit}>
      <label>
        Enter Session ID:
        <input
          type="text"
          name="id"
          value={inputs.id || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Session Name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        <div class="form-group">
          <label for="exampleFormControlSelect2">
            Movie
          </label>
          <select
            multiple
            class="form-control"
            id="exampleFormControlSelect2"
            name="movie"
            value={inputs.movie || {}}
            onChange={handleChange}
          >
            {movieSelection.map((option, index) => (
              <option key={index} value={Object.assign({},option)}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label>
        <div class="form-group">
          <label for="exampleFormControlSelect3">
            Theatre:
          </label>
          <select
            multiple
            class="form-control"
            id="exampleFormControlSelect3"
            name="theatre"
            value={inputs.theatre || {}}
            onChange={handleChange}
          >
            {theatreSelection.map((option, index) => (
              <option key={index} value={Object.assign({},option)}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </label>
      <input type="submit" />
    </form>
  );
};

export default SessionFormComponent;
