import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 1,
          name: '菜谱底部卡片广告-1',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches: '[id="com.xiachufang:id/ad_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13348710',
        },
        {
          key: 2,
          name: '菜谱底部卡片广告-2',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches:
            '[id="com.xiachufang:id/jad_feed_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13363079',
        },
        {
          key: 3,
          name: '菜谱底部卡片广告-1-弹出窗口',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13454534',
        },
        {
          key: 5,
          name: '菜谱底部卡片广告-3',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          quickFind: true,
          matches: '@ImageView[width=32] <<n [vid="fl_container"]',
          snapshotUrls: 'https://i.gkd.li/import/13484117',
        },
      ],
    },
    {
      key: 2,
      name: '厨房问卷',
      rules: [
        {
          key: 1,
          name: '厨房问卷',
          activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
          matches: '[text^="厨房问卷"] + [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13363042',
        },
      ],
    },
  ],
});
