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
    <form onSubmit={handleSubmit}>
      <label>
        Enter User ID:
        <input
          type="text"
          name="id"
          value={inputs.id || ""}
          onChange={handleChange}
        />
      </label>
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
        Enter User Fullname:
        <input
          type="text"
          name="fullname"
          value={inputs.fullname || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter User Email:
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Image:
        <input
          type="text"
          name="role"
          value={inputs.role || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Image:
        <input
          type="text"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default SignUpPageComponent;
