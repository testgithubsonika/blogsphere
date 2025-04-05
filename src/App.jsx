import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Search from './pages/Search';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
  )
}
