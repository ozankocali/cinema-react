import "./homePageComponent.css";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { useSelector } from "react-redux";

const HomePageComponent = () => {
  const movieList = useSelector((state) => state.movieStore.data);

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
      <img 
        style={{ height: "600px", width: "800px","alignContent":"center" }}
        src={movie.image}
        alt={movie.name}
      />
    );
  };

  return (
    <div className="container">
      <h1>home</h1>
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
