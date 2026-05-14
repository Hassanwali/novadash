import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import TaskCard from '../../components/TaskCard/TaskCard'
import styles from './Tasks.module.css'

const columns = [
    {
        title: 'To Do',
        color: '#94a3b8',
        tasks: [
            { priority: 'High', title: 'Design new onboarding flow', desc: 'Create wireframes and hi-fi mockups for user onboarding.', tag: 'Design', avatar: 'S', due: 'Mar 10', comments: 3, attachments: 2 },
            { priority: 'Medium', title: 'Write API documentation', desc: 'Document all v2 endpoints with examples and error codes.', tag: 'Docs', avatar: 'S', due: 'Mar 14', comments: 1 },
            { priority: 'High', title: 'Set up CI/CD pipeline', tag: 'DevOps', avatar: 'S', due: 'Mar 12', comments: 5, attachments: 1 },
            { priority: 'Low', title: 'Update billing page copy', tag: 'Content', avatar: 'S', due: 'Mar 18' },
        ]
    },
    {
        title: 'In Progress',
        color: '#3b82f6',
        tasks: [
            { priority: 'Critical', title: 'Implement OAuth2 login', desc: 'Google and GitHub SSO integration via Passport.js.', tag: 'Engineering', avatar: 'S', due: 'Mar 7', comments: 8, attachments: 3 },
            { priority: 'High', title: 'Build dashboard analytics', desc: 'Real-time charts using Recharts, websocket updates.', tag: 'Engineering', avatar: 'S', due: 'Mar 9', comments: 4, attachments: 1 },
            { priority: 'Medium', title: 'Mobile responsive fixes', tag: 'Design', avatar: 'S', due: 'Mar 11', comments: 2 },
        ]
    },
    {
        title: 'In Review',
        color: '#f59e0b',
        tasks: [
            { priority: 'High', title: 'Code review: payment module', desc: 'Review PR #142 — Stripe webhooks and retry logic.', tag: 'Engineering', avatar: 'S', due: 'Mar 6', comments: 12, attachments: 2 },
            { priority: 'Medium', title: 'QA: invoice generation', tag: 'QA', avatar: 'S', due: 'Mar 8', comments: 6, attachments: 4 },
            { priority: 'Critical', title: 'Security vulnerability report', tag: 'Security', avatar: 'S', due: 'Mar 6', comments: 3, attachments: 1 },
        ]
    },
    {
        title: 'Done',
        color: '#22c55e',
        tasks: [
            { priority: 'High', title: 'Set up monitoring alerts', desc: 'Datadog integration with PagerDuty escalation policy.', tag: 'DevOps', avatar: 'S', due: 'Feb 26', comments: 5, attachments: 2 },
            { priority: 'Medium', title: 'Redesign landing page hero', tag: 'Design', avatar: 'S', due: 'Feb 25', comments: 7, attachments: 6 },
            { priority: 'High', title: 'Migrate to PostgreSQL 16', tag: 'Engineering', avatar: 'S', due: 'Feb 20', comments: 9 },
            { priority: 'Medium', title: 'Write unit tests for auth', tag: 'QA', avatar: 'S', due: 'Feb 18', comments: 2 },
        ]
    },
]

const filterTabs = ['All Projects', 'Nova Backend', 'Mobile App', 'E-Commerce']

function Tasks() {
    const [activeTab, setActiveTab] = useState('All Projects')

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8fafc' }}>
            <Sidebar />
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <Navbar />
                <div style={{ padding: '24px' }}>

                    <div className={styles.filterBar}>
                        <div className={styles.filterTabs}>
                            {filterTabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`${styles.filterTab} ${activeTab === tab ? styles.filterTabActive : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <button className={styles.addTaskBtn}>+ Add Task</button>
                    </div>

                    <div className={styles.board}>
                        {columns.map((column, index) => (
                            <div key={index} className={styles.column}>
                                <div className={styles.columnHeader}>
                                    <div className={styles.columnTitleRow}>
                                        <div className={styles.columnDot} style={{ backgroundColor: column.color }} />
                                        <p className={styles.columnTitle}>{column.title}</p>
                                        <span className={styles.columnCount}>{column.tasks.length}</span>
                                    </div>
                                    <span className={styles.columnPlus}>+</span>
                                </div>

                                <div className={styles.taskList}>
                                    {column.tasks.map((task, taskIndex) => (
                                        <TaskCard key={taskIndex} {...task} />
                                    ))}
                                </div>

                                <div className={styles.addTask}>
                                    + Add task
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tasks