import { faFilm, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "primereact/inputtext";
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
      <h1 style={{"textAlign":"center"}}>Salon Ekle</h1>

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
           <FontAwesomeIcon icon={faIdCard} />
          </span>
          <InputText
            type="text"
            name="numberOfSeats"
            value={inputs.numberOfSeats || ""}
            onChange={handleChange}
            placeholder="Koltuk Sayısı"
          />
        </div>

        
        <button type="submit" className="btn btn-success mt-2">
          {" "}
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default TheatreFormComponent;
