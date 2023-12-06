import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Signout from './pages/Signout';
import About from './pages/About';
import Header from './components/Header';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
// import CreateListing from './pages/CreateListing';
// import UpdateListing from './pages/UpdateListing';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/create-listing' element={<CreateListing />} /> */}
          {/* <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          /> */}
        </Route>
        <Route path="/sign-out" element={<Signout/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}
