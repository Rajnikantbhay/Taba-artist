import HomePage from './pages/HomePage';
import Layout from './Layout';
import About from './pages/About'
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
<Router>

      <Layout>
       
          <Routes>
            <Route index path='/' exact Component={HomePage} />
            <Route  path='/about' exact Component={About} />
            <Route path='/ourwork' exact Component={Work} />
            <Route path='/ourwork/:id' Component={ProjectDetails} />
          </Routes>
       
      </Layout>


      </Router> 
    </>
  );
}

export default App;
