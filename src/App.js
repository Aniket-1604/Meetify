import './App.css';
import Home from './Home';
import Video from './Video';
import Room from './Room';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/Video" element={<Video/>}></Route>
          <Route path="/room/:roomId" element={<Room/>}></Route>
      </Routes>
    </>
  );
}

export default App;
