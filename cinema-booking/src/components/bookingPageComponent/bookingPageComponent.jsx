import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookingPageComponent = (props) => {
  const params = useParams();

  const session = useSelector((state) => state.sessionStore.data).filter(
    (x) => x.id === params.id
  )[0];

  const seatList = [];
  const selectedList = [];

  const selectSeat = (seatNumber) => {
    selectedList.push(seatNumber);
    document.getElementById("selectedSeats").innerHTML = selectedList;
    document.getElementById("cost").innerHTML = selectedList.length * 15;
    seatList.forEach((seat) => {
      console.log(seat);
      if(selectedList.includes(parseInt(seat.props.children.key))){
        document.getElementById(seat.props.children.key).style.color="yellow";
      }
    });
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
        </div>
      </div>
    </div>
  );
};

export default BookingPageComponent;
