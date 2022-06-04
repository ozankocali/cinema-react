import {
  faBarsStaggered,
  faClapperboard,
  faFilm,
  faIdCard,
  faImage,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "primereact/inputtext";
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
    director:"",
    ticketPrice:0
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
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faIdCard} />
          </span>
          <InputText
            type="text"
            name="id"
            value={inputs.id || ""}
            onChange={handleChange}
            placeholder="ID"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faFilm} />
          </span>
          <InputText
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faBarsStaggered} />
          </span>
          <InputText
            type="text"
            name="genre"
            value={inputs.genre || ""}
            onChange={handleChange}
            placeholder="Genre"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faImage} />
          </span>
          <InputText
            type="text"
            name="image"
            value={inputs.image || ""}
            onChange={handleChange}
            placeholder="Image"
          />
        </div>
        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faClapperboard} />
          </span>
          <InputText
            type="text"
            name="director"
            value={inputs.director || ""}
            onChange={handleChange}
            placeholder="Director"
          />
        </div>
        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faMoneyBill} />
          </span>
          <InputText
            type="number"
            name="ticketPrice"
            value={inputs.ticketPrice || ""}
            onChange={handleChange}
            placeholder="Ticket Price"
          />
        </div>
        <button type="submit" class="btn btn-primary mt-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default MovieFormComponent;
