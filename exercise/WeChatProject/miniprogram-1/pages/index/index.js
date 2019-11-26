'use strict';

import util from '../../utils/index';
import config from '../../utils/config';

let app = getApp();
let isDEV = config.isDev;

let handler = {
  data: {
    page: 1, //当前的页数
    days: 3,
    pageSize: 4,
    totalSize: 0,
    hasMore: true,// 用来判断下拉加载更多内容操作
    articleList: [], // 存放文章列表数据
    defaultImg: config.defaultImg
  },
  onLoad: function(options){
    this.setData({
      hiddenLoading: false
    })
    this.requestArticle()
  },
  requestArticle: function(){
    // util.log(this)
    util.request({
      url: 'list',
      mock: true,
      data: {
        page: this.data.page || 1,
        days: this.data.days || 3,
        pageSize: this.data.pageSize
      }
    })
    .then(res => {
      // console.log(res)
      let formatData = this.formatArticleData(res.data)
      this.renderArticle(formatData)
      // 数据正常返回
      // if(res && res.status === 0 && res.data && res.data.length){
      //   let articleData = res.data
      //   let formatData= this.formatArticleData(articleData)
      //   this.renderArticle(formatData)
      // } else {
      //   util.log('不正常数据', res)
      //   util.alert('提示', res)
      // }
    })
  },
  formatArticleData: function(data){
    let formatData = undefined
    formatData = data.map((group,index)=>{
      group.date = this.formatDate(group.date)
      return group
    })
    // util.log(formatData)
    return formatData
  },
  formatDate: function(date){
    // todo: 格式化时间
    return `(${date})`
  },
  renderArticle: function(data){
    if (data && data.length){
      let newList = this.data.articleList.concat(data)
      this.setData({
        articleList: newList,
        hiddenLoading: true
      })
    }
    util.log(this.data)
  },
  showDetail: function(e){
    let dataset = e.currentTarget.dataset
    let item = dataset && dataset.item
    let contentId = item.contentId || 0
    // 调用实现阅读标识的函数
    this.markRead( contentId )
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    })
  },
  markRead: function(data){
    console.log(data)
  },
  onShareAppMessage: function(){
    let title = 'xx分享'
    return {
      title,
      path:`pages/index/index`,
      imageUrl: 'https://upload-images.jianshu.io/upload_images/20206568-c288913c0f9adb86.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/200',
      success: function(res) {
        //分享成功
      },
      fail: function(res){
        //分享失败
      }
    }
  }

}

Page(handler);