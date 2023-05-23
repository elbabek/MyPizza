import './App.css';
import Header from './componets/Header/Header';
import Navigation from './componets/Navigation/Navigation';
import Slider from './componets/slider/Slider';
import Pizza from './componets/pizza/Pizza';

function App() {
  return(
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <Slider />
      <Pizza/>
    </div>
  );
}
export default App;
