// import logo from './logo.svg';
import './App.css';
import SignupLogin from './Signup&Login/SignupLogin';
import LoginSignUp from './Signup&Login/LoginSignUp';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AddProduct from './AddProduct/AddProduct';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<SignupLogin/>}/>
      <Route path='/signup' element={<LoginSignUp/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
