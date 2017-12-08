// pages/setting/setting.js
const tool = require('../../utils/tool.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:"qd",
    bool:true,
    arr: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    obj:{
      name:"laoyao",
      skill:"ps"
    }
  },
  test(){
    var self = this
    this.setData({
      bool: !this.data.bool
    })
    
    console.log("触发事件1",this.data.bool)
    //wx.startRecord()
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     var speed = res.speed
    //     var accuracy = res.accuracy
    //     console.log(latitude, longitude)
    //   }
    // })
    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     wx.openLocation({
    //       latitude: latitude,
    //       longitude: longitude,
    //       scale: 28
    //     })
    //   }
    // })


  },
  move(event){
    console.log(event)
  },
  onLaunch() {
    console.log("生命周期函数--监听小程序初始化")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("监听页面初次渲染完成", tool)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("销毁")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("监听用户下拉动作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("用户点击右上角分享")
  }
})