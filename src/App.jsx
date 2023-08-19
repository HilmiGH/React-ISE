import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pacar from './components/Pacar';
import First from './components/First';
import Second from './components/Second';
import Todolist from './components/Todolist';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Pacar></Pacar>} />
          <Route path='/first' element={<First></First>} />
          <Route path='/second' element={<Second></Second>} />
          <Route path='/list' element={<Todolist></Todolist>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
