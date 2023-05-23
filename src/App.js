import './App.css';
import Header from './componets/Header/Header';
import Navigation from './componets/Navigation/Navigation';
import Slider from './componets/slider/Slider';

function App() {
  return(
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <Slider />
    </div>
  );
}
export default App;
