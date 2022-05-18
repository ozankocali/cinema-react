import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieStore, { addMovie } from "../../store/movieStore";
import { addSession } from "../../store/sessionStore";
import { addTheatre } from "../../store/theatreStore";

const SessionFormComponent = (props) => {
  const theatreList = useSelector((state) => state.theatreStore.data);
  const movieList = useSelector((state) => state.movieStore.data);

  const newList = Object.assign([], movieList);

  console.log(movieList);

  const createSelectedMovies = () => {
    let movieSelect = [];
    for (let i = 0; i <= 3; i++) {
      movieSelect.push(
        <option key={newList[i].id} value={newList[i]["name"]}>
          {newList[i]["name"]}
        </option>
      );
      //here I will be creating my options dynamically based on
      //what props are currently passed to the parent component
    }
    return movieSelect;
  };

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const newTheatre = {
    id: 0,
    name: "",
    movie: {},
    theatre: {},
  };

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
            Enter Theatre Number Of Seats:
          </label>
          <select
            multiple
            class="form-control"
            id="exampleFormControlSelect2"
            name="name"
            value={inputs.movie || ""}
            onChange={handleChange}
          >
{createSelectedMovies()}
          </select>
        </div>
      </label>
      <input type="submit" />
    </form>
  );
};

export default SessionFormComponent;
