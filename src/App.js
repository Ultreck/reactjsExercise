import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from './components/starRating/StarRating';

function App() {
  return (
    <div className="">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
