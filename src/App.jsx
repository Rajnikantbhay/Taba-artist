// import Layout from './Layout';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetails from './pages/ProjectDetails';
import Map from './pages/Contact';
import BookNowPage from './pages/BookNowPage';
// // import {  as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { GraphicWorkDetails } from './pages/ProjectDetails';
import Team from './pages/Team';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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
        element: <BookNowPage />
      },
      {
        path: 'map',
        element: <Map />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/team',
        element: <Team />
      }
    ]
  }
]);

export default App;

