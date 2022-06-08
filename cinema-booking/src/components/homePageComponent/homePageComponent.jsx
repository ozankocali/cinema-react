import "./homePageComponent.css";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePageComponent = () => {
  const movieList = useSelector((state) => state.movieStore.data);
  const navigate=useNavigate();

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const movieTemplate = (movie) => {
    return (
      <div>
        <img
          style={{ height: "500px", width: "1000px", alignContent: "center" }}
          src={movie.image}
          alt={movie.name}
          onClick={()=>{navigate("/detail/"+movie.id)}}
        />
        <h5>{movie.name}</h5>
      </div>
    );
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Vizyondaki Filmler</h1>
      <Carousel
        numVisible={1}
        numScroll={1}
        value={movieList}
        itemTemplate={movieTemplate}
      ></Carousel>
    </div>
  );
};

export default HomePageComponent;
