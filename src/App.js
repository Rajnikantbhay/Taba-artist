import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WhatsappButton from './components/WhatsappButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<>

<Router>
<Navbar/>
  <Routes>

    <Route index path='/' exact Component={HomePage} />


</Routes>
</Router>
<WhatsappButton/>
<Footer/>
</>
  );
}

export default App;
