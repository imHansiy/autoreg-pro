import React from 'react';

const DOMAINS = [
  { id: 1, domain: 'auth-verify.com', type: '泛解析', received: 14520, status: 'active' },
  { id: 2, temp: 'temp-mail-api', type: '借力接口', received: 8430, status: 'active' },
  { id: 3, domain: 'secure-login.net', type: '泛解析', received: 0, status: 'pending_dns' },
];

export default function Emails() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
          <div className="absolute top-0 left-0 w-1 h-0 bg-ink-heavy transition-all duration-700 group-hover:h-full opacity-80"></div>
          <p className="font-xingcao text-2xl text-ink-medium mb-4">活跃飞书阵</p>
          <h3 className="font-serif text-4xl font-light text-ink-focus">2</h3>
        </div>
        <div className="relative p-8 ink-border bg-paper-light/40 backdrop-blur-sm group hover:ink-shadow transition-all duration-700">
          <div className="absolute top-0 left-0 w-1 h-0 bg-ink-heavy transition-all duration-700 group-hover:h-full opacity-80"></div>
          <p className="font-xingcao text-2xl text-ink-medium mb-4">今日收信</p>
          <h3 className="font-serif text-4xl font-light text-ink-focus">3,241</h3>
        </div>
      </div>

      <div className="ink-border bg-paper-light/30 backdrop-blur-sm p-8 relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ink-heavy"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ink-heavy"></div>
        
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-xing text-ink-focus">飞书之径</h3>
          <button className="font-xingcao text-xl text-ink-medium hover:text-ink-focus transition-colors">开辟新径</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-ink-light/20 font-kai text-ink-medium">
              <tr>
                <th className="px-6 py-4 font-normal tracking-widest">域名 / 接口</th>
                <th className="px-6 py-4 font-normal tracking-widest">流派</th>
                <th className="px-6 py-4 font-normal tracking-widest">累计收信</th>
                <th className="px-6 py-4 font-normal tracking-widest">气象</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-light/10 font-serif">
              {DOMAINS.map((item) => (
                <tr key={item.id} className="hover:bg-ink-light/5 transition-colors duration-500">
                  <td className="px-6 py-6 font-kai text-lg">{item.domain || item.temp}</td>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 border border-ink-light/30 rounded-sm text-sm text-ink-medium font-serif">{item.type}</span>
                  </td>
                  <td className="px-6 py-6 text-ink-focus">{item.received.toLocaleString()}</td>
                  <td className="px-6 py-6 font-kai">
                    {item.status === 'active' ? (
                      <span className="text-jade tracking-widest">通达</span>
                    ) : (
                      <span className="text-gold tracking-widest">阻滞 (待解析)</span>
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
