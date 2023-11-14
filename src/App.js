import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WhatsappButton from './components/WhatsappButton';
function App() {
  return (
<>
<Navbar/>
<HomePage/>
<WhatsappButton/>
<Footer/>

</>
  );
}

export default App;
