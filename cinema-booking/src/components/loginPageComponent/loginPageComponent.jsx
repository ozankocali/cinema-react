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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Username:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter Password:
          <input
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <small>
        If you dont have an account{" "}
        <span style={{"color":"blue"}}
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
