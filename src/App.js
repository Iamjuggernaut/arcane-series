import './App.css';
import Hero from './components/Hero/Hero';
import Posters from './components/Posters/Posters';
import Navbar from './components/Navbar/Navbar';
import Media from './components/Media/Media';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Posters />
      <Media />
      <Footer />
    </>
  );
}

export default App;
