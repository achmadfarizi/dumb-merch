import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CategoryList from './pages/CategoryList';
import Chat from './pages/Chat';
import DetailShop from './pages/DetailShop';
import EditProduct from './pages/EditProduct';
import ListProduct from './pages/ListProduct';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from "./pages/Register";
import UserShop from './pages/UserShop';
import EditShop from './pages/EditShop'
import Checkout from './pages/Checkout';
import ChatUser from './pages/ChatUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/usershop' element={<UserShop/>} />
          <Route exact path='/profile' element={<Profile/>} />
          <Route exact path='/detailshop' element={<DetailShop/>} />
          <Route exact path='/chat' element={<Chat/>} />
          <Route exact path='/editproduct' element={<EditProduct/>} />
          <Route exact path='/listproduct' element={<ListProduct/>} />
          <Route exact path='/editshop' element={<EditShop/>} />
          <Route exact path='/categorylist' element={<CategoryList/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          <Route exact path='/chatuser' element={<ChatUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
