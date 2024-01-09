import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import './styles/App.css';
import Detail from './routes/Detail';





const App = () => {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
