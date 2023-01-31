import { Routes, Route } from 'react-router-dom';
import './style.css';
import CardList from './components/CardList/CardList'
import Home from './components/Home/Home'
import CardD from './components/CardD/CardD';
import Header from './components/Header/Header';
import LIP from './components/LIP/LIP';


function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/store" element={<CardList />}> </Route>
          <Route path="/product/:id" element={<CardD />}> </Route>
          <Route path="/logIn" element={<LIP />}></Route>
        </Routes>

      </div>
  );
}

export default App;
/**/