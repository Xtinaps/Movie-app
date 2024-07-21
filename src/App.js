import logo from './logo.svg';
import './App.css';
import AddMovie from './components/AddMovie';
import ViewAllMovie from './components/ViewAllMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>

     <Route path='/' element={<AddMovie/>}/>
     <Route path='/View' element={<ViewAllMovie/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
