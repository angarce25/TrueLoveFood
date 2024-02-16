import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './blog/ShowBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import NavBar from '../src/components/header/header.js'
import Footer from '../src/components/footer/footer.js'
import Home from './components/pages/home.jsx';
import LoginForm from './components/pages/loginForm.jsx';
import RegisterForm from './components/pages/registerForm.jsx';
import User from './components/pages/user.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<CompShowBlogs />} />
          <Route path='/create' element={<CompCreateBlog />} />
          <Route path='/edit/:id' element={<CompEditBlog />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/registerForm' element={<RegisterForm />} />
          <Route path='/User' element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
