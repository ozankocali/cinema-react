import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPurchase } from "../../store/purchaseStore";

const BookingPageComponent = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const session = useSelector((state) => state.sessionStore.data).filter(
    (x) => x.id === params.id
  )[0];

  const seatList = [];
  const selectedList = [];

  const newPurchase = {
    session: {},
    selectedSeats: [],
  };

  useEffect(() => {
    disableSelected();
  }, [seatList]);

  const purchase = () => {
    newPurchase.session=session;
    newPurchase.selectedSeats = selectedList;

    dispatch(addPurchase(newPurchase));
    navigate("/purchase");
  };

  const selectSeat = (seatNumber) => {
    if (!selectedList.includes(seatNumber)) {
      selectedList.push(seatNumber);
      document.getElementById("selectedSeats").innerHTML = selectedList;
      document.getElementById("cost").innerHTML = selectedList.length * 15;
      seatList.forEach((seat) => {
        if (selectedList.includes(parseInt(seat.props.children.key))) {
          document.getElementById(seat.props.children.key).style.color =
            "yellow";
        }
      });
    }
  };

  const disableSelected = () => {
    const bookedSeats = [];

    session.purchasedSeats.forEach((purchase) => {
      purchase.forEach((seat) => {
        bookedSeats.push(seat);
      });
    });

    seatList.forEach((seat) => {
      if (bookedSeats.includes(parseInt(seat.props.children.key))) {
        document.getElementById(seat.props.children.key).style.color = "red";
      }
    });

    console.log(bookedSeats);
  };

  for (let i = 0; i < session.theatre.numberOfSeats; i++) {
    const id = i.toString();
    seatList.push(
      <div className="card">
        <div
          className="card-body"
          id={id}
          key={i}
          onDoubleClick={() => selectSeat(i)}
        >
          seat number {i}
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col">
        <div className="container">
          <h1>Session Name</h1>
          <h4>{session.name}</h4>
          <h1>Movie Name</h1>
          <h4>{session.movie.name}</h4>
          <h1>Theatre Name</h1>
          <h4>{session.theatre.name}</h4>
          <h1>seats Name</h1>

          <div className="col">
            <div>{seatList}</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="container">
          <h1>Selected Seats</h1>
          <div id="selectedSeats"></div>
          <h1>Costs:</h1>
          <div id="cost"></div>
          <span
            href="#"
            className="btn btn-primary"
            onClick={() => {
              purchase();
            }}
          >
            purchase
          </span>
          <span
            href="#"
            className="btn btn-primary"
            onClick={() => {
              disableSelected();
            }}
          >
            disable
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingPageComponent;
