import {Routes,Route} from 'react-router-dom';
import './App.css';
import Lscreen from './screen/lobby';
import RoomPage from './screen/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Lscreen/>}/>
        <Route path='/room/:roomId' element={<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
