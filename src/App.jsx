import HomePage from './pages/HomePage';
import Layout from './Layout';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import BookNowPage from './pages/BookNowPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Team from './pages/Team';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Contact />} />
            <Route path="/ourwork" element={<Work />} />
            <Route path="/ourwork/:id" element={<ProjectDetails />} />
            <Route path="/booknow" element={<BookNowPage />} />
            <Route path='/team' element={<Team/>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
