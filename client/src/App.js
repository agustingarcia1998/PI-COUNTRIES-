import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CountryDetail from "./components/Detail/Detail.jsx"
import CreateActivity from './components/CreateActivity/CreateActivity.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element= {<LandingPage/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/home/:id' element= {<CountryDetail/>}/>
        <Route path='/create' element= {<CreateActivity/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
