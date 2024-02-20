/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
USE_PASSAGE: 'push-plus',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3f6b58307e0ff3af',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '62b3a204d8a88f9d64baa4b48115c5f2',

  PROVINCE: '河北',
  CITY: '唐山',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小申',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'cf74d3ec57834aaeb8f435741cd8ab96',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2004', date: '01-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2004', date: '02-13',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '0912',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-01-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2024-01-23' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'T_9_CmJTn_DlzQvWIbdGlBrvmgamGBaQEDDXyHlqICw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBiA9656g_OqOBDFXnog4Vi5BfrE',
    }
  ],

}

module.exports = USER_CONFIG

