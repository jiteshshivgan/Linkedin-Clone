import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/home' element={<><Header/><Home/></>}/>
          <Route exact path='/' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
