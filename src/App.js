import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero'
import Wizard from './Components/Wizard/Wizard'
import Features from './Components/Features/Features'
import Last from './Components/Last/Last'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Wizard/>
      <Features/>
      <Last/>
      <Footer/>
    </div>
    
  );
}

export default App;
