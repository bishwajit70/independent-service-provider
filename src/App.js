import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import CheckOut from './component/CheckOut/CheckOut';
import RequireAuth from './component/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
