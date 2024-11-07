import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail';

function App() {
  return (
    <Router>
      <MainLayout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path='/cities/:cityId' element={<CityDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
