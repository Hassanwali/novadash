import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Projects from './pages/Projects/Projects'
import Tasks from './pages/Tasks/Tasks'
import Team from './pages/Team/Team'
import Messages from './pages/Messages/Messages'
import Analytics from './pages/Analytics/Analytics'
import Invoices from './pages/Invoices/Invoices'
import Settings from './pages/Settings/Settings'
import Profile from './pages/Settings/pages/Profile'
import Account from './pages/Settings/pages/Account'
import Security from './pages/Settings/pages/Security'
import Notifications from './pages/Settings/pages/Notifications'
import Integrations from './pages/Settings/pages/Integrations'
import Billing from './pages/Settings/pages/Billing'
import TeamPermissions from './pages/Settings/pages/TeamPermissions'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team" element={<Team />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/settings" element={<Settings />}>
          <Route index element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="security" element={<Security />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="billing" element={<Billing />} />
          <Route path="team" element={<TeamPermissions />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App