import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shinyv.cnr',
  name: '云听',
  groups: [
    {
      key: 1,
      name: '开屏广告-弹窗',
      activityIds: 'yt.com.module.home.MainActivity',
      rules:
        '[id="com.shinyv.cnr:id/iv_ad"] + [id="com.shinyv.cnr:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12817933',
    },
  ],
});
