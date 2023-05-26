import './App.css';
import Header from './componets/Header/Header';
import Navigation from './componets/Navigation/Navigation';
import Slider from './componets/slider/Slider';
import Pizza from './componets/pizza/Pizza';
import Kombo from './componets/kombo/Kombo';
import Snacks from './componets/snacks/Snacks';
import Desert from './componets/desert/Desert';

function App() {
  return(
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <Slider />
      <Pizza/>
      <Kombo/>
      <Snacks/>
      <Desert/>
    </div>
  );
}
export default App;
