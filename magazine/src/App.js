import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Component/Login';
import Register from './Component/Register';
import Post from './Component/Post';
import HeaderApp from './Component/HeaderNavbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer';
import New from './Component/Home/New';
import Category from './Component/Category';
import PostDetail from './Component/PostDetail';
import UserProfile from './Component/UserProfile';
import PostManagement from './Component/Admin/PostManagement';
import CreatePost from './Component/Admin/CreatePost';
import EditPost from './Component/Admin/EditPost';

function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/new' element={<New />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/post' element={<Post />} ></Route>
        <Route path='/post/detail/:pid' element={<PostDetail/>} ></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/userprofile' element={<UserProfile/>}></Route>
        <Route path='/post/management' element={<PostManagement/>}></Route>
        <Route path='/post/create' element={<CreatePost/>}></Route>
        <Route path='/post/edit/:pid' element={<EditPost/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
