import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaikan.comic',
  name: '快看漫画',
  groups: [
    {
      key: 1,
      name: '青少年模式-弹窗',
      activityIds: 'com.kuaikan.main.MainActivity',
      rules: '[text*="青少年模式"] +2 [id="com.kuaikan.comic:id/cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12565678',
    },
    {
      key: 2,
      name: '漫画界面-底部广告弹窗',
      activityIds: 'com.kuaikan.comic.infinitecomic.view.ComicInfiniteActivity',
      rules: '[id="com.kuaikan.comic:id/adBannerClose"]',
      snapshotUrls: 'https://i.gkd.li/import/12910268',
    },
  ],
});
