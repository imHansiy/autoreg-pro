export type ResourceType = 'proxy' | 'email' | 'phone' | 'captcha';

export interface TargetService {
  id: string;
  name: string;
  description: string;
  requires: ResourceType[];
}

export const SUPPORTED_SERVICES: TargetService[] = [
  { id: 'discord', name: 'Discord', description: '需破除重重迷障，集齐四象方可成事', requires: ['proxy', 'email', 'phone', 'captcha'] },
  { id: 'twitter', name: 'Twitter / X', description: '飞鸟之音，需传音核验', requires: ['proxy', 'email', 'phone'] },
  { id: 'gmail', name: 'Gmail', description: '尺素传书，防守严密，需传音破局', requires: ['proxy', 'phone'] },
  { id: 'reddit', name: 'Reddit', description: '市井之言，隐踪飞书即可', requires: ['proxy', 'email'] },
  { id: 'telegram', name: 'Telegram', description: '纸鹤传信，唯需传音', requires: ['proxy', 'phone'] },
  { id: 'custom', name: '万象 (Custom)', description: '自定义天地法则，随心所欲', requires: ['proxy', 'email', 'phone', 'captcha'] },
];

export const RESOURCE_TYPES: Record<ResourceType, { label: string, desc: string }> = {
  proxy: { label: '隐踪之法 (Proxy)', desc: '掩盖本源气息，化身万千' },
  email: { label: '飞书之径 (Email)', desc: '接收天外飞书，验证真身' },
  phone: { label: '传音之阵 (Phone)', desc: '聆听千里传音，破除壁垒' },
  captcha: { label: '破障之符 (Captcha)', desc: '勘破虚妄幻象，直抵本源' },
};
