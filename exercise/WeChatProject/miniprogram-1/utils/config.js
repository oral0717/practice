'use strict'

const env = 'dev';
// 接口出错默认弹窗文案
const defaultAlertMessage = '默认文案有问题，请重试~'
// 默认分享文案
const defaultShareText = {
  en: '默认分享文案'
}
// 默认标题栏文案
const defaultBarTitle = {
  en: '默认标题栏文案'
}
// 文章默认图片
const defaultImg = {
  articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
  coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}
let core = {
  env: env,
  defaultBarTitle: defaultBarTitle['en'],
  defaultImg: defaultImg,
  defaultAlertMsg: defaultAlertMessage,
  defaultShareText: defaultShareText['en'],
  isDev: env === 'dev',
  isProduction: env === 'production'
}
export default core;