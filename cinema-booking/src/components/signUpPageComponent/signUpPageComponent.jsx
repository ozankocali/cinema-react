import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, login } from "../../store/authStore";
import movieStore, { addMovie } from "../../store/movieStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard,faEnvelope, faPersonCircleExclamation, faLockOpen } from '@fortawesome/free-solid-svg-icons'


const SignUpPageComponent = (props) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const newUser = {
    id: 0,
    username: "",
    fullName: "",
    email: "",
    role: "",
    password: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ inputs: inputs }));
  };

  useEffect(() => {
    //  console.log(inputs);
  }, [inputs]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Kaydol</h1>
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
            <i className="pi pi-user"></i>
          </span>
          <InputText
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            placeholder="Kullanıcı Adı"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            type="text"
            name="fullname"
            value={inputs.fullname || ""}
            onChange={handleChange}
            placeholder="Tam Ad"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
          <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <InputText
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
          <FontAwesomeIcon icon={faPersonCircleExclamation} />
          </span>
          <InputText
            type="text"
            name="role"
            value={inputs.role || ""}
            onChange={handleChange}
            placeholder="Rol"
          />
        </div>

        <div className="p-inputgroup mt-2">
          <span className="p-inputgroup-addon">
          <FontAwesomeIcon icon={faLockOpen} />
          </span>
          <InputText
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="Şifre"
          />
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Kaydol
        </button>
      </form>
    </div>
  );
};

export default SignUpPageComponent;
