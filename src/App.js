import Header from './components/Header';
import FrameOne from './components/FrameOne';
import './index.css'
import FrameTwo from './components/FrameTwo';
import FrameThree from './components/FrameThree';
import FrameFour from './components/FrameFour';
import Accordion from './components/Accordion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <FrameOne/>
      <FrameTwo/>
      <FrameThree/>
      <FrameFour/>
      <Accordion/> 
      
      
      <Footer/>
    </div>
  );
}

export default App;
