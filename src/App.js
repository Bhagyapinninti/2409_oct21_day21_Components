/*import logo from './logo.svg';*/
import './App.css';
import Gadgets from './component/Gadgets';

function App( ) {
  return (
    <div className="App">
      <h1>Gadgets in All Budgets</h1>
      <img className='logo' src="./images/logo.png"></img>
      <Gadgets product="Mivi Earphones" price="From ₹599" picURL='./images/earphones.png' ></Gadgets>
      <Gadgets product="Fire-Boltt Ninja Calling Pro Plus" price="Just ₹999" picURL='./images/watch.png' ></Gadgets>
      <Gadgets product="boat Stone 350 Pro" price="Just ₹1,499" picURL='./images/boat.png'></Gadgets>
      <Gadgets product="Charging Pads" price="From ₹499" picURL='./images/wirelessCharger.png'></Gadgets>
      <Gadgets product="Qubo" price="Just ₹1,599" picURL='./images/qubo.png'></Gadgets>
      <Gadgets product="Metashot" price="Just ₹5,499" picURL='./images/metashot.png'></Gadgets>
      <Gadgets product="Govo Soundbars" price="From ₹999" picURL='./images/soundbar.png'></Gadgets>
      <Gadgets product="Wireless Powerbanks" price="From ₹599" picURL='./images/powerBanks.png'></Gadgets>
      <Gadgets product="Wireless Powerbanks" price="From ₹599" picURL='./images/mobileCover.png'></Gadgets>
      <Gadgets product="WHOOP 4.0" price="Just ₹29,990" picURL='./images/band.png'></Gadgets>
      <Gadgets product="Atomberg Door Lock" price="Just ₹9,599" picURL='./images/doorLock.png'></Gadgets>
      <Gadgets product="SONY Dualsense Gamepad" price="Just ₹4,990" picURL='./images/dualSesnse.png'></Gadgets>
    </div>
  );
}

export default App;
