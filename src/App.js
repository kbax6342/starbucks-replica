import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav"
import Banner from './components/Banner/Banner';
import Hero1 from './components/Hero1/Hero1';
import Hero2 from './components/Hero2/Hero2'
import SmallBanner from './components/SmallBanner/SmallBanner'
import SmallBanner2 from './components/SmallBanner2/SmallBanner2'
import Footer from './components/Footer/Footer';
import MobileFooter from './components/MobileFooter/MobileFooter';

function App() {
  return (
    <div className="App">
     <Nav />
     <Banner />
     <Hero1 />
     <Hero2 />
     <SmallBanner />
     <SmallBanner2 />
     <p className='starbucks weight'>*At participating stores.</p>
     <Footer />
   
    </div>
  );
}

export default App;
