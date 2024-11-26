import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sportq.fit',
  name: 'Fit健身',
  groups: [
    {
      key: 1,
      name: '去除会员广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sportq.fit.business.NavMainActivity',
          matches: '[id="com.sportq.fit:id/close_btn"]',
        },
      ],
    },
  ],
});
