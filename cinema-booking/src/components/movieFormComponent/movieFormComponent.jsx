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
    <form onSubmit={handleSubmit}>
      <label>
        Enter Movie ID:
        <input
          type="text"
          name="id"
          value={inputs.id || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Genre:
        <input
          type="text"
          name="genre"
          value={inputs.genre || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Image:
        <input
          type="text"
          name="image"
          value={inputs.image || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default MovieFormComponent;
