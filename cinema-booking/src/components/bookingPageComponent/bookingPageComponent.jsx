import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookingPageComponent = (props) => {
  const params = useParams();
  console.log(params.id);

  const session = useSelector((state) => state.sessionStore.data).filter(
    (x) => x.id === params.id
  )[0];

  const seatList = [];

  for (let i = 0; i < session.theatre.numberOfSeats; i++) {
    seatList.push(
      <div class="card">
        <div class="card-body">seat number {i}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Session Name</h1>
      <h4>{session.name}</h4>
      <h1>Movie Name</h1>
      <h4>{session.movie.name}</h4>
      <h1>Theatre Name</h1>
      <h4>{session.theatre.name}</h4>
      <h1>seats Name</h1>

      <div>{seatList}</div>
    </div>
  );
};

export default BookingPageComponent;
