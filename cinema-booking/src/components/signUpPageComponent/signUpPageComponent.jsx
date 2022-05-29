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
        <div className="form-group">
          <label>Enter User ID:</label>
          <input
            className="form-control"
            type="text"
            name="id"
            value={inputs.id || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Username:</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter User Fullname:</label>
          <input
            className="form-control"
            type="text"
            name="fullname"
            value={inputs.fullname || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter User Email:</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Image:</label>
          <input
            className="form-control"
            type="text"
            name="role"
            value={inputs.role || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Enter Movie Image:</label>
          <input
            className="form-control"
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
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
