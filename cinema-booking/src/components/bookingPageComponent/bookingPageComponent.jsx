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
  let selectedList = [];

  const newPurchase = {
    session: {},
    selectedSeats: [],
  };

  useEffect(() => {
    disableSelected();
  }, [seatList]);

  const purchase = () => {
    newPurchase.session = session;
    newPurchase.selectedSeats = selectedList;

    dispatch(addPurchase(newPurchase));
    navigate("/purchase");
  };

  const selectSeat = (seatNumber) => {
    const bookedSeats = [];

    session.purchasedSeats.forEach((purchase) => {
      purchase.forEach((seat) => {
        bookedSeats.push(seat);
      });
    });

    if (!bookedSeats.includes(parseInt(seatNumber))) {
      if (!selectedList.includes(seatNumber)) {
        selectedList.push(seatNumber);
        document.getElementById("selectedSeats").innerHTML = selectedList;
        document.getElementById("cost").innerHTML = selectedList.length * parseInt(session.movie.ticketPrice);
        seatList.forEach((seat) => {
          if (selectedList.includes(parseInt(seat.props.children.key))) {
            document.getElementById(seat.props.children.key).style.color =
              "yellow";
          }
        });
      } else {
        const templist = [];
        selectedList.forEach((seat) => {
          if (seat !== seatNumber) {
            templist.push(seat);
          }
          selectedList = templist;
          document.getElementById("selectedSeats").innerHTML = selectedList;
          document.getElementById("cost").innerHTML = selectedList.length * parseInt(session.movie.ticketPrice);
          
          seatList.forEach((seat) => {
            if (selectedList.includes(parseInt(seat.props.children.key))) {
              document.getElementById(seat.props.children.key).style.color =
                "yellow";
            }else{
              document.getElementById(seat.props.children.key).style.color =
                "black";
            }
          });
        });
      }
    }
  };

  for (let i = 0; i < session.theatre.numberOfSeats; i++) {
    const id = i.toString();
    seatList.push(
      <div>
        <div
          className="container"
          id={id}
          key={i}
          onClick={() => selectSeat(i)}
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            margin: "10px",
            userSelect: "none",
            textAlign: "center",
          }}
        >
          Koltuk Numarası: {i}
        </div>
      </div>
    );
  }

  const disableSelected = () => {
    const bookedSeats = [];

    session?.purchasedSeats?.forEach((purchase) => {
      purchase.forEach((seat) => {
        bookedSeats.push(seat);
      });
    });

    seatList.forEach((seat) => {
      if (bookedSeats.includes(parseInt(seat.props.children.key))) {
        document.getElementById(seat.props.children.key).style.color = "red";
        document
          .getElementById(seat.props.children.key)
          .removeAttribute("onclick");
      }
    });

    console.log(bookedSeats);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Koltuk Seçiniz</h1>
      <div className="card">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <h3>Seans Adı: </h3>
                <h3>{session?.name}</h3>
              </div>
              <div className="row">
                <h3>Film Adı: </h3>
                <h3>{session?.movie?.name}</h3>
              </div>
              <div className="row">
                <h3>Salon Adı:</h3>
                <h3>{session?.theatre?.name}</h3>
              </div>
              <div className="row">
                <h3>Tarih:</h3>
                <h3>{new Date(session.date).toLocaleDateString()}</h3>
              </div>
              <div className="row">
                <h3>Saat:</h3>
                <h3>{new Date(session.date).toLocaleTimeString([], {timeStyle: 'short'})}</h3>
              </div>
              <div className="row">
                <h3>Yer Planı:</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                <h3>Seçili Koltuklar:</h3>
                <h3 id="selectedSeats"></h3>
              </div>
              <div className="row">
                <h3>Fiyat:</h3>
                <h3 id="cost"></h3>
              </div>
              <span
                href="#"
                className="btn btn-primary"
                onClick={() => {
                  purchase();
                }}
              >
                Satın Al
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="container"
          style={{
            height: "30px",
            width: "1060px",
            border: "1px solid",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            margin: "10px",
            userSelect: "none",
            textAlign: "center",
          }}
        >
          Perde
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">{seatList}</div>
          <div
            className="container"
            style={{
              height: "30px",
              width: "600px",
              border: "1px solid",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              userSelect: "none",
              textAlign: "center",
              marginLeft: "460px",
            }}
          >
            Kapı
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPageComponent;
