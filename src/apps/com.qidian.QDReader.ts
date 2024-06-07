import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      name: '福利广告结束',
      key: 1,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          quickFind: true,
          matches:
            'FrameLayout[id="android:id/content"] >3 @android.widget.ImageView',
          activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
        },
      ],
    },
    {
      key: 1,
      name: '福利广告15秒',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
          matches:
            '[text="已观看视频15秒，可获得奖励"] - [id="com.qidian.QDReader:string/c"]',
        },
      ],
    },
  ],
});