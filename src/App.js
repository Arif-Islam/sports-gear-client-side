import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Footer from './Shared/Footer/Footer';
import SingleItem from './Pages/SingleItem/SingleItem';
import AllInventories from './Pages/AllInventories/AllInventories';
import NotFound from './Pages/NotFound/NotFound';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import MyItem from './Pages/MyItem/MyItem';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <SingleItem></SingleItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={<AllInventories></AllInventories>}></Route>
        <Route path='/addnewitem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/myitems' element={<MyItem></MyItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
