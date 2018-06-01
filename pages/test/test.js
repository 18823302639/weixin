
//实例化全局变量
var app = getApp();
Page({
    data:{
        pass:null
    },
    onLoad:function(options){
      //页面初始化 options为页面跳转所带来的参数
        this.setData({
          pass:app.globalData.pass
        })
    }
})