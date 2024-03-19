import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreButton from "./components/loadMoreButton/LoadMoreButton";
import RandomColor from "./components/randomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";

function App() {
  // const url = 'https://picsum.photos/v2/list?page=1&limit=5';
  const url = "https://picsum.photos/v2/list";
  const limit = 10;
  const page = 1;
  return (
    <div className="">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}

      {/* <ImageSlider url={url} limit={limit} page={page} /> */}
      <LoadMoreButton/>
    </div>
  );
}

export default App;
