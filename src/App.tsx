import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProgressBar, StatusBadge, Seal } from './components/ui';
import TasksModule from './components/Tasks';
import ProxiesModule from './components/Proxies';
import EmailsModule from './components/Emails';
import PhonesModule from './components/Phones';
import CaptchasModule from './components/Captchas';
import SettingsModule from './components/Settings';
import CreateTaskModal from './components/CreateTaskModal';

// --- Mock Data ---
const STATS = {
  totalRegistered: 12458,
  successRate: 94.2,
  activeTasks: 3,
  availableProxies: 1542,
};

const TASKS = [
  { id: '卷-甲子-001', service: 'Discord', target: 1000, success: 842, failed: 12, status: 'running', progress: 85 },
  { id: '卷-甲子-002', service: 'Twitter', target: 500, success: 500, failed: 45, status: 'completed', progress: 100 },
  { id: '卷-甲子-003', service: 'Gmail', target: 200, success: 45, failed: 155, status: 'failed', progress: 100 },
  { id: '卷-甲子-004', service: 'Reddit', target: 300, success: 0, failed: 0, status: 'pending', progress: 0 },
];

const NavItem = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`vertical-text text-xl tracking-[0.4em] py-8 px-2 transition-all duration-700 flex flex-col items-center ${
      active 
        ? 'text-ink-focus font-xing scale-110' 
        : 'text-ink-light font-kai hover:text-ink-medium'
    }`}
  >
    {label}
    {active && <motion.div layoutId="nav-indicator" className="w-[2px] h-12 bg-seal mt-6 opacity-70"></motion.div>}
  </button>
);

const StatCard = ({ title, value, trend, trendUp }: any) => (
  <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
    <div className="absolute top-0 left-0 w-1 h-0 bg-ink-heavy transition-all duration-700 group-hover:h-full opacity-80"></div>
    <p className="font-xingcao text-2xl text-ink-medium mb-6">{title}</p>
    <h3 className="font-serif text-5xl font-light text-ink-focus tracking-tight">{value}</h3>
    {trend && (
      <div className="mt-8 flex items-center font-kai text-sm tracking-widest">
        <span className={trendUp ? 'text-jade' : 'text-seal'}>
          {trendUp ? '增' : '减'} {trend}%
        </span>
        <span className="text-ink-light ml-4">较上周</span>
      </div>
    )}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const tabNames: Record<string, string> = {
    dashboard: '观象',
    tasks: '造物',
    proxies: '隐踪',
    emails: '飞书',
    phones: '传音',
    captchas: '破障',
    settings: '法则'
  };

  return (
    <div className="flex h-screen bg-paper text-ink-heavy font-kai overflow-hidden selection:bg-ink-light/20">
      
      {/* Vertical Sidebar */}
      <aside className="w-32 border-r border-ink-light/20 flex flex-col items-center py-12 relative z-10 bg-paper/50 backdrop-blur-md">
        <div className="mb-16 relative">
          <h1 className="vertical-text font-cao text-5xl text-ink-focus leading-tight tracking-widest">
            万物生
          </h1>
          <Seal text="造物" className="absolute -bottom-8 -right-6" />
        </div>

        <div className="flex-1 flex flex-col items-center space-y-4 overflow-y-auto w-full no-scrollbar">
          <NavItem label="观象" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem label="造物" active={activeTab === 'tasks'} onClick={() => setActiveTab('tasks')} />
          <NavItem label="隐踪" active={activeTab === 'proxies'} onClick={() => setActiveTab('proxies')} />
          <NavItem label="飞书" active={activeTab === 'emails'} onClick={() => setActiveTab('emails')} />
          <NavItem label="传音" active={activeTab === 'phones'} onClick={() => setActiveTab('phones')} />
          <NavItem label="破障" active={activeTab === 'captchas'} onClick={() => setActiveTab('captchas')} />
          <NavItem label="法则" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Decorative Ink Wash Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ink-light/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-32 w-[600px] h-[600px] bg-ink-medium/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        {/* Header */}
        <header className="h-24 px-16 flex items-end justify-between pb-6 relative z-10">
          <div className="flex items-baseline space-x-6">
            <h2 className="text-5xl font-xing text-ink-focus">{tabNames[activeTab]}</h2>
            <span className="text-ink-light font-xingcao text-2xl opacity-60">
              {activeTab === 'dashboard' && '纵观全局，洞察秋毫'}
              {activeTab === 'tasks' && '一生二，二生三，三生万物'}
              {activeTab === 'proxies' && '大象无形，隐于市野'}
              {activeTab === 'emails' && '鸿雁传书，见字如面'}
              {activeTab === 'phones' && '千里传音，瞬息即至'}
              {activeTab === 'captchas' && '勘破虚妄，直抵本源'}
              {activeTab === 'settings' && '无规矩不成方圆'}
            </span>
          </div>
          
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="group relative px-8 py-3 font-xing text-xl text-ink-focus overflow-hidden"
          >
            <div className="absolute inset-0 ink-border bg-paper-light/50 transition-all duration-500 group-hover:bg-ink-focus"></div>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-paper">起笔造物</span>
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-16 pb-16 pt-8 relative z-10">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.8 }}
                className="space-y-16"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <StatCard title="造物总数" value={STATS.totalRegistered.toLocaleString()} trend="12.5" trendUp={true} />
                  <StatCard title="成事之几" value={`${STATS.successRate}%`} trend="2.1" trendUp={true} />
                  <StatCard title="流转之局" value={STATS.activeTasks} />
                  <StatCard title="可用之隐" value={STATS.availableProxies.toLocaleString()} trend="5.4" trendUp={false} />
                </div>

                {/* Recent Tasks Table */}
                <div className="ink-border bg-paper-light/30 backdrop-blur-sm p-8 relative">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ink-heavy"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ink-heavy"></div>
                  
                  <div className="flex justify-between items-end mb-8">
                    <h3 className="text-3xl font-xing text-ink-focus">近期造物录</h3>
                    <button onClick={() => setActiveTab('tasks')} className="font-xingcao text-xl text-ink-medium hover:text-ink-focus transition-colors">阅尽卷宗</button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="border-b border-ink-light/20 font-kai text-ink-medium">
                        <tr>
                          <th className="px-6 py-4 font-normal tracking-widest">卷宗号</th>
                          <th className="px-6 py-4 font-normal tracking-widest">目标</th>
                          <th className="px-6 py-4 font-normal tracking-widest">演化进度</th>
                          <th className="px-6 py-4 font-normal tracking-widest">成 / 败</th>
                          <th className="px-6 py-4 font-normal tracking-widest">气象</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink-light/10 font-serif">
                        {TASKS.map((task) => (
                          <tr key={task.id} className="hover:bg-ink-light/5 transition-colors duration-500 group">
                            <td className="px-6 py-6 text-ink-medium">{task.id}</td>
                            <td className="px-6 py-6 font-kai text-lg">{task.service}</td>
                            <td className="px-6 py-6 w-72">
                              <div className="flex justify-between text-sm mb-2 font-kai text-ink-medium">
                                <span>{task.progress}%</span>
                                <span>{task.success + task.failed} / {task.target}</span>
                              </div>
                              <ProgressBar progress={task.progress} status={task.status} />
                            </td>
                            <td className="px-6 py-6 font-kai">
                              <div className="flex items-center space-x-4">
                                <span className="text-jade">{task.success}</span>
                                <span className="text-ink-light">|</span>
                                <span className="text-seal">{task.failed}</span>
                              </div>
                            </td>
                            <td className="px-6 py-6">
                              <StatusBadge status={task.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tasks' && <motion.div key="tasks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}><TasksModule /></motion.div>}
            {activeTab === 'proxies' && <motion.div key="proxies" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}><ProxiesModule /></motion.div>}
            {activeTab === 'emails' && <motion.div key="emails" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}><EmailsModule /></motion.div>}
            {activeTab === 'phones' && <motion.div key="phones" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}><PhonesModule /></motion.div>}
            {activeTab === 'captchas' && <motion.div key="captchas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}><CaptchasModule /></motion.div>}
            {activeTab === 'settings' && <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}><SettingsModule /></motion.div>}
          </AnimatePresence>
        </div>

        {/* Create Task Modal Overlay */}
        <CreateTaskModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />

      </main>
    </div>
  );
}
