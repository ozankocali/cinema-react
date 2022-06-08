import { faFilm, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSession } from "../../store/sessionStore";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const SessionFormComponent = (props) => {
  const theatreList = useSelector((state) => state.theatreStore.data);
  const movieList = useSelector((state) => state.movieStore.data);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const dropdownMovies = [];
  const dropdownTheatres = [];
  const movieSelection = Object.assign([], movieList);
  const theatreSelection = Object.assign([], theatreList);

  movieSelection.map((movie) => {
    dropdownMovies.push({ name: movie.name, value: movie });
  });

  theatreSelection.map((theatre) => {
    dropdownTheatres.push({ name: theatre.name, value: theatre });
  });

  const newSession = {
    id: "",
    name: "",
    movie: {},
    theatre: {},
    date: "",
    purchasedSeats:[]
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    inputs.purchasedSeats=[]
    event.preventDefault();
    dispatch(addSession({ inputs: inputs }));
    alert(inputs);
  };

  useEffect(() => {
    //  console.log(inputs);
  }, [inputs]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Yeni Seans Ekle</h1>
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
            placeholder="Ad"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faFilm} />
          </span>
          <Dropdown
            optionLabel="name"
            name="movie"
            value={inputs.movie}
            options={dropdownMovies}
            onChange={handleChange}
            placeholder={inputs?.movie?.name || "Film Seçiniz"}
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faFilm} />
          </span>
          <Dropdown
            name="theatre"
            optionLabel="name"
            value={inputs.theatre}
            options={dropdownTheatres}
            onChange={handleChange}
            placeholder={inputs?.theatre?.name || "Salon Seçiniz"}
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <FontAwesomeIcon icon={faFilm} />
          </span>
          <Calendar
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            showTime
          />
        </div>

        <button type="submit" className="btn btn-success mt-2">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default SessionFormComponent;
