import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gotokeep.keep',
  name: 'Keep',
  groups: [
    {
      key: 1,
      name: '青少年模式-弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text$="未成年人模式"] +2 @[clickable=true] > [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/12706097',
    },
    {
      key: 3,
      name: '局部广告-首页局部广告-信息流广告',
      activityIds:
        'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      rules:
        '[id="com.gotokeep.keep:id/textAdTag"] + [id="com.gotokeep.keep:id/imgClose"]',
      snapshotUrls: 'https://i.gkd.li/import/12706115',
    },
    {
      key: 4,
      name: '局部广告-广告弹窗',
      rules: [
        {
          key: 0,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches:
            'ImageView + LinearLayout > ImageView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12706111',
        },
        {
          key: 1,
          activityIds:
            'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
          matches:
            '[id="com.gotokeep.keep:id/contentContainer"] + [id="com.gotokeep.keep:id/closeImageView"]',
          snapshotUrls: 'https://i.gkd.li/import/13766358',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-请求开启通知权限弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="暂不开启"] +2 [text="开启通知权限"]',
      snapshotUrls: 'https://i.gkd.li/import/13761671',
    },
  ],
});
