import HomePage from './pages/HomePage';
import Layout from './Layout';
import About from './pages/About'
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import BookNowPage from './pages/BookNowPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
<Router>

      <Layout>
       
          <Routes>
            <Route index path='/' exact Component={HomePage} />
            <Route index path='/about' exact Component={About} />
            <Route index path='/contact' exact Component={Contact} />
            <Route path='/ourwork' exact Component={Work} />
            <Route path='/ourwork/:id' Component={ProjectDetails} />
            <Route path='/booknow' Component={BookNowPage} />
          </Routes>
       
      </Layout>
      </Router> 
    </>
  );
}

export default App;
