import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.microsoft.emmx',
  name: 'Edge',
  groups: [
    {
      key: 3,
      name: '通知提示-消息通知',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
      rules: '[text="允许通知"] + [text="不，谢谢"]',
      snapshotUrls: 'https://i.gkd.li/import/13646187',
    },
  ],
});
