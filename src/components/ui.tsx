import React from 'react';

export const ProgressBar = ({ progress, status }: { progress: number, status: string }) => {
  let color = 'bg-ink-medium';
  if (status === 'completed') color = 'bg-jade';
  if (status === 'failed') color = 'bg-seal';

  return (
    <div className="w-full bg-ink-light/20 h-[1px] mt-3 relative overflow-hidden">
      <div className={`${color} h-full transition-all duration-1000 ease-out`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    running: 'text-ink-heavy border-ink-heavy',
    completed: 'text-jade border-jade',
    failed: 'text-seal border-seal',
    pending: 'text-ink-light border-ink-light',
  };

  const labels: Record<string, string> = {
    running: '行',
    completed: '成',
    failed: '败',
    pending: '待',
  };

  return (
    <div className="flex items-center space-x-3">
      <span className={`w-7 h-7 flex items-center justify-center rounded-full border ${styles[status] || styles.pending} font-seal text-sm opacity-80`}>
        {labels[status] || '无'}
      </span>
      <span className="text-sm font-kai text-ink-medium tracking-widest">
        {status === 'running' && '流转中'}
        {status === 'completed' && '已大成'}
        {status === 'failed' && '遇阻碍'}
        {status === 'pending' && '静候中'}
      </span>
    </div>
  );
};

export const Seal = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`w-12 h-12 border-[3px] border-seal text-seal font-seal flex items-center justify-center text-xl leading-none p-1 opacity-85 rotate-[3deg] mix-blend-multiply ${className}`}>
    <div className="border border-seal w-full h-full flex items-center justify-center text-center">
      {text}
    </div>
  </div>
);
