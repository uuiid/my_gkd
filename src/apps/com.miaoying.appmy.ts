import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miaoying.appmy',
  name: '天空影视',
  groups: [
    {
      key: 1,
      name: '应用内广告弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12846524',
        },
      ],
    },
  ],
});
