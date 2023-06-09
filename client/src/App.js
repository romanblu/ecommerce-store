import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register'
import Login from './components/pages/Login';
import CartPage from './components/pages/CartPage';
import Header from './components/Header';

import ProductPage from './components/pages/ProductPage';
import Checkout from './components/pages/Checkout';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Shipping from './components/pages/Shipping';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';

import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

    const [user, setUser] = useState();
    let redirect = '';

    useEffect(() => {
        axios.get('/users/current', { headers: {"authorization" : localStorage.getItem('jwt')} })
        .then(user => {
          // localStorage.setItem('user', JSON.stringify({...user.data, loggedIn:true}));
          setUser(user.data);
        }).catch(err => {
          if(err.response && err.response.status === 403){ // redirect to login if there is no current user (unauthorized)
              redirect = <Navigate to='/login'/>;
          }
        });  

    }, []);

    
    const logoutUser = () => {
      
      setUser(null)
    }



  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} logoutUser={logoutUser} ></Header>
          <div className='container'>
            {redirect}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/shipping' element={<Shipping />} />
              <Route path='/contact-us' element={<Contact />} />
              <Route path='/products/:id' element={<ProductPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/admin/dashboard' element={<Dashboard />}/> 
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
