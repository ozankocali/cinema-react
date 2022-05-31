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
          <h1>Dear {user.fullName}</h1>
          <h1>YOUR TICKETS BOOKED SUCCESSFULLY</h1>
          <h4>Your receipt sent to {user.email}</h4>
          <FontAwesomeIcon size="6x" color="green" icon={faMoneyBillTransfer} /><br></br>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/");
            }}
          >
            Go To Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterPaymentPageComponent;
