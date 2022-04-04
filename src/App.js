import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from './Components/Reviews/Reviews';
import Review from './Components/Review/Review';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App bg">
      <Header></Header>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/' element={<Reviews></Reviews>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
