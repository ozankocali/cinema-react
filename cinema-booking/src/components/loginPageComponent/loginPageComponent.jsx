import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authStore";
import { InputText } from "primereact/inputtext";

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
  };

  // useEffect(() => {
  //   //  console.log(inputs);
  // }, [inputs]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Giriş Yap</h1>
      <div className="card">
        <div className="container mt-2">
          <form onSubmit={handleSubmit}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                placeholder="Kullanıcı Adı"
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </div>

            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-key"></i>
              </span>
              <InputText
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                placeholder="Şifre"
              />
            </div>

            <button type="submit" className="btn btn-success mt-2">
              Giriş Yap
            </button>
          </form>
          <small>
           Hesaba sahip değilseniz 
            <span
              style={{ color: "blue" }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              {""} buraya tıklayın
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginPageComponent;
