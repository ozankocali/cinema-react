import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginPageComponent=(props)=>{
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({});
  
    const loginUser = {
      username:'',
      password:''
    };
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(loginUser({ inputs: inputs }));
      alert(inputs);
    };
  
    // useEffect(() => {
    //   //  console.log(inputs);
    // }, [inputs]);
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter Movie ID:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
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
}

export default LoginPageComponent;