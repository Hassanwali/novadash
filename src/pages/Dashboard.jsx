import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import ProjectActivityChart from '../components/charts/ProjectActivityChart'
import TaskCompletionChart from '../components/charts/TaskCompletionChart'
import RecentActivity from '../components/RecentActivity'
import ActiveProjects from '../components/ActiveProjects'

function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Navbar />
        <div style={{ padding: '24px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <StatCard title="Total Revenue" value="$94,280" change="+12.4%" changeLabel="vs last month" icon="💲" iconBg="#eff6ff" />
            <StatCard title="Active Projects" value="24" change="+4.1%" changeLabel="vs last month" icon="📊" iconBg="#f5f3ff" />
            <StatCard title="Team Members" value="48" change="+8%" changeLabel="vs last month" icon="👥" iconBg="#f0fdf4" />
            <StatCard title="Tasks Completed" value="1,382" change="+18.2%" changeLabel="vs last month" icon="✅" iconBg="#f0fdf4" />
            <StatCard title="New Clients" value="17" change="-2.3%" changeLabel="vs last month" icon="👤" iconBg="#fff7ed" />
            <StatCard title="Pending Invoices" value="9" change="0%" changeLabel="vs last month" icon="📄" iconBg="#fff1f2" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginTop: '16px' }}>
            <ProjectActivityChart />
            <TaskCompletionChart />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
            <RecentActivity />
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '20px' }}>
              <ActiveProjects />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard