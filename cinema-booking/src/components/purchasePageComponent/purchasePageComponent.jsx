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

  const newPurchase = {
    session: {},
    seats: [],
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
    newPurchase.seats = seats;
    newPurchase.session = purchase.session;
    dispatch(addPurchasedSeats(newPurchase));
    navigate("/afterPayment");
  };

  return (
    <div>
      <div className="row">
        <div className="container">
          <h1>movie</h1>
          <h6>{purchase?.session?.movie?.name}</h6>
          <h1>theatre</h1>
          <h6>{purchase?.session?.theatre?.name}</h6>
          <h1>seats</h1>
          <h6>{purchase?.selectedSeats}</h6>
          <h1>cost</h1>
          <h6>{purchase?.selectedSeats?.length * 15}</h6>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter Card Owner Name:</label>
            <input
            className="form-control"
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label>Enter Card Number:</label>
            <input
            className="form-control"
              type="text"
              name="cardNumber"
              value={inputs.cardNumber || ""}
              onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label>Enter Valid Thru:</label>
            <input
            className="form-control"
              type="text"
              name="validThru"
              value={inputs.validThru || ""}
              onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label>Enter CVV:</label>
            <input
            className="form-control"
              type="text"
              name="cvv"
              value={inputs.cvv || ""}
              onChange={handleChange}
            />
            </div>
            {/* <input type="submit" /> */}
          </form>
          <span
            href="#"
            className="btn btn-success"
            onClick={() => {
              purchaseAction(purchase.selectedSeats);
            }}
          >
            purchase
          </span>
        </div>
      </div>
    </div>
  );
};

export default PurchasePageComponent;
