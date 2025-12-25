import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 12,
      name: '福利中心-我知道了',
      desc: '福利中心看视频后获得奖励，自动点击“我知道了”',
      activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 1000,
      rules: '@TextView[text="知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13606901',
    },
    {
      name: '功能类-福利广告',
      key: 14,
      desc: '广告不足15 时, 结束广告',
      activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
      rules: [
        {
          key: 3,
          matches:
            'FrameLayout[id="android:id/content"] >3 @android.widget.ImageView[id =null && text=null && top < 150 && left < 80]',
        },
        {
          key: 4,
          matches: '[text~="已观看视频.*"] - @[text="跳过广告"]',
          matchRoot: true,
        },
      ],
    },
    {
      key: 16,
      name: '起点广告关闭',
      desc: '起点广告关闭',
      rules: [
        {
          activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
          matches:
            '@ViewGroup[depth=11 && left>971 && width=height] <<7 ViewGroup[childCount<6 && depth=8]',
        },
      ],
    },
  ],
});
