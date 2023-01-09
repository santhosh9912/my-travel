import {Routes,Route} from 'react-router-dom'
import { Edit } from './Crud/Edit';
import { Home } from './Crud/Home';
import { NavBar } from './Crud/Navbar';
import { Register } from './Crud/Register';
import { Details, View } from './Crud/View';
import '../src/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<Details/>}/>
      </Routes>
  <ToastContainer/>
    </div>
  );
}

export default App;
