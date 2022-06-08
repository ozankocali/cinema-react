import { faFilm, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "primereact/inputtext";
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
          <h1 style={{ textAlign: "center" }}>Satın Alım Bilgisi</h1>
          <div className="card">
            <div className="col">
              <div className="row">
                <h3>Film:</h3>
                <h3>{purchase?.session?.movie?.name}</h3>
              </div>
              <div className="row">
                <h3>Salon:</h3>
                <h3>{purchase?.session?.theatre?.name}</h3>
              </div>
              <div className="row">
                <h3>Koltuklar:</h3>
                {purchase?.selectedSeats.map((selectedSeat) => {
                  return <h3>{selectedSeat}</h3>;
                })}
              </div>
              <div className="row">
                <h3>Ücret:</h3>
                <h3>{purchase?.selectedSeats?.length * parseInt(purchase.session.movie.ticketPrice)} ₺</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Ödeme Bilgisi</h1>
          <form onSubmit={handleSubmit}>
            <div className="p-inputgroup mt-2">
              <span className="p-inputgroup-addon">
                <FontAwesomeIcon icon={faFilm} />
              </span>
              <InputText
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                placeholder="Card Owner Name"
              />
            </div>
            <div className="p-inputgroup mt-2">
              <span className="p-inputgroup-addon">
                <FontAwesomeIcon icon={faIdCard} />
              </span>
              <InputText
                type="text"
                name="cardNumber"
                value={inputs.cardNumber || ""}
                onChange={handleChange}
                placeholder="Card Number"
              />
            </div>
            <div className="p-inputgroup mt-2">
              <span className="p-inputgroup-addon">
                <FontAwesomeIcon icon={faIdCard} />
              </span>
              <InputText
                type="text"
                name="validThru"
                value={inputs.validThru || ""}
                onChange={handleChange}
                placeholder="Valid Thru"
              />
            </div>
            <div className="p-inputgroup mt-2">
              <span className="p-inputgroup-addon">
                <FontAwesomeIcon icon={faIdCard} />
              </span>
              <InputText
                type="text"
                name="cvv"
                value={inputs.cvv || ""}
                onChange={handleChange}
                placeholder="CVV"
              />
            </div>
            {/* <input type="submit" /> */}
          </form>
          <span
            href="#"
            className="btn btn-success mt-2"
            onClick={() => {
              purchaseAction(purchase.selectedSeats);
            }}
          >
            Satın Al
          </span>
        </div>
      </div>
    </div>
  );
};

export default PurchasePageComponent;
