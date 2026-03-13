import React from 'react';

const PROXY_POOLS = [
  { id: 1, name: '玄武·北美隐阵', type: 'SOCKS5', total: 5000, alive: 4850, latency: '120ms', status: 'active' },
  { id: 2, name: '青龙·欧罗巴阵', type: 'HTTP', total: 1000, alive: 950, latency: '45ms', status: 'active' },
  { id: 3, name: '朱雀·散修野阵', type: 'HTTP', total: 10000, alive: 1200, latency: '850ms', status: 'warning' },
];

export default function Proxies() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
          <div className="absolute top-0 left-0 w-1 h-0 bg-ink-heavy transition-all duration-700 group-hover:h-full opacity-80"></div>
          <p className="font-xingcao text-2xl text-ink-medium mb-4">万象总数</p>
          <h3 className="font-serif text-4xl font-light text-ink-focus">16,000</h3>
        </div>
        <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
          <div className="absolute top-0 left-0 w-1 h-0 bg-jade transition-all duration-700 group-hover:h-full opacity-80"></div>
          <p className="font-xingcao text-2xl text-ink-medium mb-4">生生不息 (存活)</p>
          <h3 className="font-serif text-4xl font-light text-jade">7,000</h3>
        </div>
        <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
          <div className="absolute top-0 left-0 w-1 h-0 bg-seal transition-all duration-700 group-hover:h-full opacity-80"></div>
          <p className="font-xingcao text-2xl text-ink-medium mb-4">归于虚无 (失效)</p>
          <h3 className="font-serif text-4xl font-light text-seal">9,000</h3>
        </div>
      </div>

      <div className="ink-border bg-paper-light/30 backdrop-blur-sm p-8 relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ink-heavy"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ink-heavy"></div>
        
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-xing text-ink-focus">隐踪之阵</h3>
          <button className="font-xingcao text-xl text-ink-medium hover:text-ink-focus transition-colors">引入新阵</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-ink-light/20 font-kai text-ink-medium">
              <tr>
                <th className="px-6 py-4 font-normal tracking-widest">阵法名</th>
                <th className="px-6 py-4 font-normal tracking-widest">流派</th>
                <th className="px-6 py-4 font-normal tracking-widest">总数 / 存活</th>
                <th className="px-6 py-4 font-normal tracking-widest">回响 (延迟)</th>
                <th className="px-6 py-4 font-normal tracking-widest">气象</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-light/10 font-serif">
              {PROXY_POOLS.map((pool) => (
                <tr key={pool.id} className="hover:bg-ink-light/5 transition-colors duration-500">
                  <td className="px-6 py-6 font-kai text-lg">{pool.name}</td>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 border border-ink-light/30 rounded-sm text-sm text-ink-medium font-serif">{pool.type}</span>
                  </td>
                  <td className="px-6 py-6 font-kai">
                    <span className="text-ink-focus">{pool.total}</span>
                    <span className="text-ink-light mx-2">/</span>
                    <span className="text-jade">{pool.alive}</span>
                  </td>
                  <td className="px-6 py-6 text-ink-medium">{pool.latency}</td>
                  <td className="px-6 py-6 font-kai">
                    {pool.status === 'active' ? (
                      <span className="text-jade tracking-widest">清明</span>
                    ) : (
                      <span className="text-gold tracking-widest">混沌</span>
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
