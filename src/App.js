import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from './Components/Reviews/Reviews';
import Review from './Components/Review/Review';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import DashBoard from './Components/DashBoard/DashBoard';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/' element={<Reviews></Reviews>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
