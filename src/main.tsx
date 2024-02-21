import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Home from './components/home/Home';
import Techstack from './components/techstack/Techstack';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Contact from './components/contact/Contact';
import Projects from './components/projects/ProjectSection';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route path="" element={<Home />} />
      <Route path="skills" element={<Techstack/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects/>}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
