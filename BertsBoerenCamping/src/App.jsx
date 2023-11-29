import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import BookingForm from './components/bookingForm';
import Navbar from './components/navbar';


function App() {
  return (
    <Router>
      <div>
        <h1>Welkom bij Berts Groene Camping</h1>
        <Navbar />
        <BookingForm />
        <ul>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;