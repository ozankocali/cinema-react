import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, login } from "../../store/authStore";
import movieStore, { addMovie } from "../../store/movieStore";

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
    alert(inputs);
  };

  useEffect(() => {
    //  console.log(inputs);
  }, [inputs]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi-id-card"></i>
          </span>
          <InputText
            type="text"
            name="id"
            value={inputs.id || ""}
            onChange={handleChange}
            placeholder="ID"
          />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            type="text"
            name="fullname"
            value={inputs.fullname || ""}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            type="text"
            name="role"
            value={inputs.role || ""}
            onChange={handleChange}
            placeholder="Role"
          />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPageComponent;
