import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WhatsappButton from './components/WhatsappButton';
import ContactPage from './pages/ContactPage';


function App() {
  return (
<>
<Navbar/>
<HomePage/>
<WhatsappButton/>
<ContactPage/>
<Footer/>

</>
  );
}

export default App;
