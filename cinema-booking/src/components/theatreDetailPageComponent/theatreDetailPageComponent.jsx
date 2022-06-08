import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TheatreDetailPageComponent = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const sessions = useSelector((state) => state.sessionStore.data)
    .filter((x) => x.theatre.id === params.id)
    .sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

  return (
    <div className="container">
      <h1 style={{"textAlign":"center"}}>Bu Salondaki Seanslar</h1>
      <div className="row">
        {sessions.map((session) => {
          return (
            <div className="col-sm" key={session.id}>
              <div
                className="card m-2"
                style={{ height: "600px", width: "400px" }}
              >
                <div className="movieImage">
                  <img className="card-img-top " src={session?.movie?.image} />
                </div>
                <div className="card-body">
                  <div className="row">
                    <h5>Seans Adı: </h5>
                    <h5 className="card-title">{session?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Film Adı: </h5>
                    <h5 className="card-title">{session?.movie?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Salon Adı: </h5>
                    <h5 className="card-title">{session?.theatre?.name}</h5>
                  </div>
                  <div className="row">
                    <h5>Salon Kapasitesi: </h5>
                    <h5>{session.theatre?.numberOfSeats}</h5>
                  </div>
                  <div className="row">
                    <h5>Seans Tarihi: </h5>
                    <h5>{new Date(session.date).toLocaleDateString()}</h5>
                  </div>
                  <div className="row">
                    <h5>Salon Kapasitesi: </h5>
                    <h5>{new Date(session.date).toLocaleTimeString([], {timeStyle: 'short'})}</h5>
                  </div>

                  <span
                    className="btn btn-primary button"
                    onClick={() => {
                      navigate("/booking/" + session?.id);
                    }}
                  >
                    Görüntüle
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheatreDetailPageComponent;
