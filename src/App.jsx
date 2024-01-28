import About from './pages/About';
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import Map from './pages/Contact';
import BookNowPage from './pages/BookNowPage';
import { ScrollToTop } from './components/ScrollToTop';
import { GraphicWorkDetails } from './pages/ProjectDetails';
import Team from './pages/Team';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import StcikyNavbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { lazy, Suspense } from 'react';

const AboutComponent = lazy(() => import('./pages/About'))

function App() {
  
  return (
    <>
      <ScrollToTop/>
      <StcikyNavbar/>
      <Outlet/>
      <Footer/>
      
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'ourwork',
        element: <Work />,
      },
      {
        path:'ourwork/muralarts/:id',
        element:<ProjectDetails/>
      },
      {
        path:'ourwork/graphicwork/:id',
        element:<GraphicWorkDetails/>
      },
      {
        path: 'booknow',
        element: <BookNowPage title={'Book now by filling this form'} smallText={<><p className="text-[#aaaaaa]">All the fields are <i className="text-white">mandatory</i> and should be filled <i className="text-white">correctly</i></p>
        <small className="text-[#aaaaaa] font-bold">Currently available in Delhi only</small></>} />
      },
      {
        path: 'map',
        element: <Map />
      },
      {
        path: '/about',
        element:(<Suspense fallback={<h1>Loading...</h1>}><AboutComponent/></Suspense>)
      },
      {
        path: '/team',
        element: <Team />
      }
    ]
  }
]);

export default App;

