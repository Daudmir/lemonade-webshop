import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/ProductPage" element={<ProductPage/>}/>
    </Routes>
    </>
  );
}

export default App;
