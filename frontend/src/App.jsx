import './App.css'
import { Routes, Route } from 'react-router-dom';
import BusinessCategory from './pages/BusinessCategory';
import BusinessListing from './pages/BusinessListing';
import BusinessDetail from './pages/BusinessDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BusinessCategory />} />
      <Route path="/business_listing/:b_listing_id" element={<BusinessListing />} />
      <Route path="/business_detail/:b_detail_id" element={<BusinessDetail />} />
    </Routes>
  )
}

export default App;
