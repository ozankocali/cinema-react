import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPurchasedSeats } from "../../store/sessionStore";

const PurchasePageComponent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const purchase = useSelector((state) => state.purchaseStore.data);
  console.log(purchase);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn]);


  const purchaseAction=(seats)=>{
    dispatch(addPurchasedSeats(seats));
    navigate("/session")
  }


  return (
    <div className="container">
      <h1>
        movie
      </h1>
      <h6>
        {purchase.movie.name}
      </h6>
      <h1>
        theatre
      </h1>
      <h6>
        {purchase.theatre.name}
      </h6>
      <h1>
        seats
      </h1>
      <h6>
        {purchase.selectedSeats}
      </h6>
      <h1>
        cost
      </h1>
      <h6>
        {purchase.selectedSeats.length*15}
      </h6>
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
  )
};

export default PurchasePageComponent;
