// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Counter from './app/features/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Coin from './app/features/coin/Coin';
import { Theme } from './app/features/themes/Theme';
import FormComponent from './app/features/authentication/FormComponent';
import UserProfile from './UserProfile';
import { login } from './app/features/authentication/authenticationSlice';

function App() {
  const isAuth = useSelector( (state) => state.auth.isAuthenticated);
  console.warn("isAuth:",isAuth)
  

  return (
    <div className='container-fluid'>
     <h1 className='text-center'>Redux-toolkit Counter App</h1>
     <hr />
     <div className="flex flex-column" >
     {/* <Counter/>
     <Coin/> 
     <Theme/> */}
     {!isAuth && <FormComponent/>}
     {isAuth &&<UserProfile/>}
     </div>
  
     <hr />
    </div>
  )
}

export default App;
