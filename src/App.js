
import './App.css';
import Detail from './components/pages/Detail';
import GetData from './components/pages/GetData';
import Navbar from './components/pages/Navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
  <>
   <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/moviedetail/:id' element={<Detail/>}/>
   </Routes>
  </>
  );
}

export default App;
