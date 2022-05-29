import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authStore";

const LoginPageComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const loginUser = {
    username: "",
    password: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ inputs: inputs }));
    alert(inputs);
  };

  // useEffect(() => {
  //   //  console.log(inputs);
  // }, [inputs]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Log In</h1>
      <form onSubmit={handleSubmit}>
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
          <label>Enter Password:</label>

          <input
            className="form-control"
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">Log In</button>
      </form>
      <small>
        If you dont have an account{" "}
        <span
          style={{ color: "blue" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          click here!
        </span>
      </small>
    </div>
  );
};

export default LoginPageComponent;
