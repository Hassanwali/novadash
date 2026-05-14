import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Projects from './pages/Projects/Projects'
import Tasks from './pages/Tasks/Tasks'
import Team from './pages/Team/Team'

function App() {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App