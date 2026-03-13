import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Seal } from './ui';
import { SUPPORTED_SERVICES, RESOURCE_TYPES } from '../config/registry';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateTaskModal({ isOpen, onClose }: Props) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SUPPORTED_SERVICES[0].id);

  const selectedService = SUPPORTED_SERVICES.find(s => s.id === selectedServiceId) || SUPPORTED_SERVICES[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-paper/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-paper-light ink-border p-10 w-full max-w-3xl relative ink-shadow max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-ink-focus/30 m-2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-ink-focus/30 m-2 pointer-events-none"></div>
            <Seal text="敕令" className="absolute top-8 right-8 opacity-40 pointer-events-none" />

            <div className="mb-10 text-center">
              <h2 className="text-5xl font-xing text-ink-focus mb-2">起笔造物</h2>
              <p className="font-xingcao text-xl text-ink-medium">定其形，赋其神，而后万物生</p>
            </div>

            <div className="space-y-8 font-kai">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="block text-lg text-ink-heavy mb-3 tracking-widest">目标之境 (Service)</label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-transparent border-b border-ink-light/50 py-2 text-xl text-ink-focus focus:outline-none focus:border-ink-heavy transition-colors font-serif"
                  >
                    {SUPPORTED_SERVICES.map(service => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                  <p className="text-sm text-ink-medium mt-2 font-serif">{selectedService.description}</p>
                </div>
                <div>
                  <label className="block text-lg text-ink-heavy mb-3 tracking-widest">造物之数 (Count)</label>
                  <input type="number" defaultValue={100} className="w-full bg-transparent border-b border-ink-light/50 py-2 text-xl text-ink-focus focus:outline-none focus:border-ink-heavy transition-colors font-serif" />
                </div>
              </div>

              <div className="pt-8 border-t border-ink-light/20">
                <div className="flex items-baseline space-x-4 mb-6">
                  <h3 className="text-2xl font-xing text-ink-heavy">资源调配</h3>
                  <span className="text-sm text-ink-medium font-serif">根据目标之境，自动推演所需法器</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <AnimatePresence mode="popLayout">
                    {selectedService.requires.map((resType) => (
                      <motion.div
                        key={resType}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                      >
                        <label className="block text-lg text-ink-medium mb-2 tracking-widest">
                          {RESOURCE_TYPES[resType].label}
                        </label>
                        <select className="w-full bg-transparent border-b border-ink-light/30 py-2 text-lg text-ink-focus focus:outline-none focus:border-ink-heavy transition-colors font-serif">
                          <option>自动匹配最优 (Auto)</option>
                          <option>指定阵法一</option>
                          <option>指定阵法二</option>
                        </select>
                        <p className="text-xs text-ink-light mt-1">{RESOURCE_TYPES[resType].desc}</p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center space-x-8">
              <button
                onClick={onClose}
                className="px-8 py-2 font-xing text-2xl text-ink-medium hover:text-ink-focus transition-colors"
              >
                搁笔
              </button>
              <button
                onClick={onClose}
                className="px-10 py-2 bg-ink-focus text-paper font-xing text-2xl hover:bg-ink-heavy transition-colors"
              >
                落印执行
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
