import React from 'react';

const SMS_PROVIDERS = [
  { id: 1, name: '5sim.net', balance: '$45.20', successRate: '88%', status: 'active' },
  { id: 2, name: 'smspool.net', balance: '$12.50', successRate: '95%', status: 'active' },
  { id: 3, name: 'sms-activate.org', balance: '$0.00', successRate: '-', status: 'empty' },
];

export default function Phones() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
          <div className="absolute top-0 left-0 w-1 h-0 bg-ink-heavy transition-all duration-700 group-hover:h-full opacity-80"></div>
          <p className="font-xingcao text-2xl text-ink-medium mb-4">盘缠 (总余额)</p>
          <h3 className="font-serif text-4xl font-light text-ink-focus">$57.70</h3>
        </div>
        <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
          <div className="absolute top-0 left-0 w-1 h-0 bg-ink-heavy transition-all duration-700 group-hover:h-full opacity-80"></div>
          <p className="font-xingcao text-2xl text-ink-medium mb-4">今日传音</p>
          <h3 className="font-serif text-4xl font-light text-ink-focus">1,420</h3>
        </div>
      </div>

      <div className="ink-border bg-paper-light/30 backdrop-blur-sm p-8 relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ink-heavy"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ink-heavy"></div>
        
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-xing text-ink-focus">传音之阵</h3>
          <button className="font-xingcao text-xl text-ink-medium hover:text-ink-focus transition-colors">结交新阵</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-ink-light/20 font-kai text-ink-medium">
              <tr>
                <th className="px-6 py-4 font-normal tracking-widest">阵法名</th>
                <th className="px-6 py-4 font-normal tracking-widest">盘缠结余</th>
                <th className="px-6 py-4 font-normal tracking-widest">传音成算</th>
                <th className="px-6 py-4 font-normal tracking-widest">气象</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-light/10 font-serif">
              {SMS_PROVIDERS.map((provider) => (
                <tr key={provider.id} className="hover:bg-ink-light/5 transition-colors duration-500">
                  <td className="px-6 py-6 font-kai text-lg">{provider.name}</td>
                  <td className="px-6 py-6 text-ink-focus font-serif">{provider.balance}</td>
                  <td className="px-6 py-6 text-ink-medium">{provider.successRate}</td>
                  <td className="px-6 py-6 font-kai">
                    {provider.status === 'active' ? (
                      <span className="text-jade tracking-widest">充盈</span>
                    ) : (
                      <span className="text-seal tracking-widest">匮乏</span>
                    )}
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
