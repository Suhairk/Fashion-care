import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Homescreen from './screens/Homescreen';
import MensScreen from './screens/MensScreen';
import WomensScreen from './screens/WomensScreen';
import JeweleryScreen from './screens/JeweleryScreen';
import ElectronicsScreen from './screens/ElectronicsScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import DetailsScreen from './screens/DetailsScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import {ProductContext} from '../src/constents/ProductContext'
import { useState } from 'react';
import Wishlist from './screens/Wishlist';

function App() {

  const [status, setstatus] = useState(true)
  const [loading, setloading] = useState(false)
  const [rating, setRating] = useState(0)
  const [adwishlist, setadwishlist] = useState(false)
  return (
     <Router>
       <ProductContext.Provider 
       value = {{status, setstatus, loading, setloading , rating ,setRating ,adwishlist , setadwishlist}}>
      <Header/>
      <Routes>
        <Route path='/' element ={<Homescreen/>}/>
        <Route path='mens' element = {<MensScreen/>}/>
        <Route path='womens' element = {<WomensScreen/>}/>
        <Route path='jewelery' element = {<JeweleryScreen/>}/>
        <Route path='electronics' element = {<ElectronicsScreen/>}/>
        <Route path='register' element ={<RegisterScreen/>}/>
        <Route path='login' element ={<LoginScreen/>}/>
        <Route path='details/:userId' element ={<DetailsScreen/>}/>
        <Route path='wishlist' element ={<Wishlist/>}/>
        <Route path='*' element ={<NotFoundScreen/>}/>
      </Routes>
      </ProductContext.Provider>
    </Router>
    
   
  );
}

export default App;
