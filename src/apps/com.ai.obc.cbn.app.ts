import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ai.obc.cbn.app',
  name: '中国广电',

  groups: [
    {
      key: 2,
      name: '版本弹窗',
      activityIds: [
        'com.ai.obc.cbn.app.ui.other.activity.MainActivity',
        'com.ai.obc.cbn.app.ui.main.fragment.MainFragment',
      ],
      rules: [
        {
          matches: '[id$="/ivDis"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12617201',
            'https://i.gkd.li/import/12655061',
          ],
        },
      ],
    },
  ],
});
