
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Layout from './components/layout/Layout';
import PrivateRoute from './Auth';
import Ourstory from './pages/ourstory/Ourstory';
import Ourteam from './pages/ourteam/Ourteam'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute><Layout /></PrivateRoute>} >
          <Route path="ourstory" element={<Ourstory />} />
          <Route path="ourteam" element={<Ourteam />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
