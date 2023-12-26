import HomePage from './pages/HomePage';
import Layout from './Layout';
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';


function App() {
  return (
    <>

      {/* <Router>
<Navbar/>
  <Routes>
    <Route index path='/' exact Component={HomePage} />
    <Route index path='/about' exact Component={About} />
</Routes>
</Router>
<WhatsappButton/>

<Footer/> */}



<Router>

      <Layout>
       
          <Routes>
            <Route index path='/' exact Component={HomePage} />
            <Route index path='/about' exact Component={About} />
            <Route index path='/contact' exact Component={Contact} />

          </Routes>
       
      </Layout>
      </Router> 
    </>
  );
}

export default App;
