import React from 'react';
import { ProgressBar, StatusBadge } from './ui';

const ALL_TASKS = [
  { id: '卷-甲子-001', service: 'Discord', target: 1000, success: 842, failed: 12, status: 'running', progress: 85, date: '癸卯年 九月十一' },
  { id: '卷-甲子-002', service: 'Twitter', target: 500, success: 500, failed: 45, status: 'completed', progress: 100, date: '癸卯年 九月初十' },
  { id: '卷-甲子-003', service: 'Gmail', target: 200, success: 45, failed: 155, status: 'failed', progress: 100, date: '癸卯年 九月初十' },
  { id: '卷-甲子-004', service: 'Reddit', target: 300, success: 0, failed: 0, status: 'pending', progress: 0, date: '癸卯年 九月十二' },
  { id: '卷-甲子-005', service: 'Instagram', target: 1000, success: 1000, failed: 20, status: 'completed', progress: 100, date: '癸卯年 九月初八' },
  { id: '卷-甲子-006', service: 'Telegram', target: 50, success: 25, failed: 2, status: 'running', progress: 50, date: '癸卯年 九月十一' },
];

export default function Tasks() {
  return (
    <div className="space-y-8">
      <div className="ink-border bg-paper-light/30 backdrop-blur-sm p-8 relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ink-heavy"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ink-heavy"></div>
        
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-xing text-ink-focus">造物卷宗</h3>
          <div className="flex space-x-6 font-xingcao text-xl text-ink-medium">
            <button className="hover:text-ink-focus transition-colors">寻迹 (搜索)</button>
            <button className="hover:text-ink-focus transition-colors">滤沙 (筛选)</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-ink-light/20 font-kai text-ink-medium">
              <tr>
                <th className="px-6 py-4 font-normal tracking-widest">卷号</th>
                <th className="px-6 py-4 font-normal tracking-widest">目标之境</th>
                <th className="px-6 py-4 font-normal tracking-widest">立卷之时</th>
                <th className="px-6 py-4 font-normal tracking-widest">演化进度</th>
                <th className="px-6 py-4 font-normal tracking-widest">成 / 败</th>
                <th className="px-6 py-4 font-normal tracking-widest">气象</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-light/10 font-serif">
              {ALL_TASKS.map((task) => (
                <tr key={task.id} className="hover:bg-ink-light/5 transition-colors duration-500">
                  <td className="px-6 py-6 text-ink-medium">{task.id}</td>
                  <td className="px-6 py-6 font-kai text-lg">{task.service}</td>
                  <td className="px-6 py-6 text-ink-light font-kai">{task.date}</td>
                  <td className="px-6 py-6 w-64">
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
    </div>
  );
}
