import { Routes, Route, useNavigate } from 'react-router-dom'

/* Components */
import Login from "./components/Login";
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';

function App() {

  function onLogout(){
    sessionStorage.clear()
    navigate('/')
  }

  const navigate = useNavigate()  
  
  return (

    <div className='bg-gray-900 flex flex-col' >

      <Header onLogout={onLogout} />
      
      <Routes>

        <Route path='/' element={ <Login /> } />
        <Route path='/listado' element={ <Listado/> } />
        <Route path='/detalle' element={ <Detail/> } />

      </Routes>
      
      <Footer />
    </div>
    
  );
}

export default App;
