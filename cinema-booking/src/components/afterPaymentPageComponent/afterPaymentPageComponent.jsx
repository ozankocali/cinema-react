import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AfterPaymentPageComponent = (props) => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.authStore.currentUser);

  return (
    <div className="container" style={{"verticalAlign":"center","textAlign":"center"}}>
      <div
        className="card"
      >
        <div className="container">
          <h1>Sayın {user.fullName}</h1>
          <h1>Biletleriniz Başarıyla Rezerve Edildi</h1>
          <h4>Faturanız {user.email} Adresine Gönderildi </h4>
          <FontAwesomeIcon size="6x" color="green" icon={faMoneyBillTransfer} /><br></br>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/");
            }}
          >
            Ana Sayfaya Git
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterPaymentPageComponent;
