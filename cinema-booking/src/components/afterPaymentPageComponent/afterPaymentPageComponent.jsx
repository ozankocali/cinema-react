import { useNavigate } from "react-router-dom";

const AfterPaymentPageComponent = (props) => {

    const navigate=useNavigate();

  return (
    <div className="container">
      <h1>YOUR TICKETS BOOKED SUCCESSFULLY</h1>
      <h4>Your receipt sent to your email</h4>
    <button className="btn btn-success" onClick={()=>{navigate("/")}}>Go To Home Page</button>
    </div>
  );

};

export default AfterPaymentPageComponent;
