import React from 'react';

export default function Settings() {
  return (
    <div className="max-w-4xl space-y-12 pb-20">
      <div className="ink-border bg-paper-light/30 backdrop-blur-sm p-10 relative">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ink-heavy"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ink-heavy"></div>
        
        <div className="mb-10">
          <h2 className="text-3xl font-xing text-ink-focus mb-2">万物法则</h2>
          <p className="font-xingcao text-xl text-ink-medium">无规矩不成方圆，定立天地之序。</p>
        </div>
        
        <div className="space-y-10 font-kai">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-lg text-ink-heavy mb-3 tracking-widest">造物并发之数</label>
              <input type="number" defaultValue={10} className="w-full bg-transparent border-b border-ink-light/50 py-2 text-xl text-ink-focus focus:outline-none focus:border-ink-heavy transition-colors font-serif" />
            </div>
            <div>
              <label className="block text-lg text-ink-heavy mb-3 tracking-widest">遇阻重试之数</label>
              <input type="number" defaultValue={3} className="w-full bg-transparent border-b border-ink-light/50 py-2 text-xl text-ink-focus focus:outline-none focus:border-ink-heavy transition-colors font-serif" />
            </div>
          </div>
          
          <div>
            <label className="block text-lg text-ink-heavy mb-3 tracking-widest">千里传音 (Webhook URL)</label>
            <input type="text" placeholder="https://..." className="w-full bg-transparent border-b border-ink-light/50 py-2 text-xl text-ink-focus focus:outline-none focus:border-ink-heavy transition-colors font-serif" />
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <input type="checkbox" id="autoExport" className="w-5 h-5 border-ink-heavy bg-transparent text-ink-focus focus:ring-ink-focus" defaultChecked />
            <label htmlFor="autoExport" className="text-lg text-ink-heavy tracking-widest">造物大成后，自动录入卷宗 (CSV)</label>
          </div>
        </div>

        <div className="mt-16 flex justify-end">
          <button className="px-10 py-3 bg-ink-focus text-paper font-xing text-2xl hover:bg-ink-heavy transition-colors">
            落印封存
          </button>
        </div>
      </div>
    </div>
  );
}
