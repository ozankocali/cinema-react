import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPurchasedSeats } from "../../store/sessionStore";

const PurchasePageComponent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const paymentInfo = {
    name: "",
    cardNumber: "",
    validThru: "",
    cvv: "",
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch(addMovie({ inputs: inputs }));
    alert(inputs.inputs);
  };

  const purchase = useSelector((state) => state.purchaseStore.data);
  console.log(purchase);

  const isLoggedIn = useSelector((state) => state.authStore.value.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  const purchaseAction = (seats) => {
    dispatch(addPurchasedSeats(seats));
    navigate("/afterPayment");
  };

  return (
    <div>
      <div className="container">
        <h1>movie</h1>
        <h6>{purchase.movie.name}</h6>
        <h1>theatre</h1>
        <h6>{purchase.theatre.name}</h6>
        <h1>seats</h1>
        <h6>{purchase.selectedSeats}</h6>
        <h1>cost</h1>
        <h6>{purchase.selectedSeats.length * 15}</h6>
        <span
          href="#"
          className="btn btn-primary"
          onClick={() => {
            purchaseAction(purchase.selectedSeats);
          }}
        >
          purchase
        </span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            Enter Card Owner Name:
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter Card Number:
            <input
              type="text"
              name="cardNumber"
              value={inputs.cardNumber || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter Valid Thru:
            <input
              type="text"
              name="validThru"
              value={inputs.validThru || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter CVV:
            <input
              type="text"
              name="cvv"
              value={inputs.cvv || ""}
              onChange={handleChange}
            />
          </label>
          {/* <input type="submit" /> */}
        </form>
      </div>
    </div>
  );
};

export default PurchasePageComponent;
