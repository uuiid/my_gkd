import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="暂不更新"] + [text="立即更新"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12701217',
        'https://i.gkd.li/import/12701250', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 2,
      name: '广告弹窗',
      activityIds: [
        'com.ecitic.bank.mobile.ui.MainActivity',
        'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
      ],
      rules:
        '[id="com.ecitic.bank.mobile:id/id_cordova_view"] + [id="com.ecitic.bank.mobile:id/close_product_send"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13402746',
        'https://i.gkd.li/import/12701230',
      ],
    },
    {
      key: 3,
      name: '请求开通知权限弹窗',
      activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
      rules: '@[text="取消"] + [text="立即开启"]',
      snapshotUrls: 'https://i.gkd.li/import/13399102',
    },
  ],
});
