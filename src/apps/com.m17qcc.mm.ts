import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.m17qcc.mm',
  name: '青创网',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: 'miuix.appcompat.app.m',
      rules: '[text*="新版本"] +(n) LinearLayout > TextView[text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12642297',
    },
  ],
});
