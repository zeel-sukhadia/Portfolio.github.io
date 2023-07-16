
import './App.css';
import Home from './portfolio_file/Home';
import Contact from './portfolio_file/Contact';
import About from './portfolio_file/About';
import Project from './portfolio_file/Project';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Project' element={<Project />}></Route>
      </Routes>
    </div>
  );
}

export default App;
