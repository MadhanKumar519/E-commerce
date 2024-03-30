import './boo.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Main';
import Cat from './cat';
import Order from './order';
import About from './about';
import Orh from './orh';
import Cah from './cah';
import Or from './or';



function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} exact/>
        <Route path='/cat' element={<Cat/>} exact/>
        <Route path='/order' element={<Order/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        <Route path='/orh' element={<Orh/>} exact/>
        <Route path='/Cah' element={<Cah/>} exact/>
        <Route path='/orh' element={<Orh/>} exact/>
        <Route path='/or' element={<Or/>} exact/>
      </Routes>
      </BrowserRouter>

     
       
   
    </div>
  );
}

export default App;