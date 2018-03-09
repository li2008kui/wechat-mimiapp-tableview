// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    section_rows: [[0, 1], [1, 4], [2, 2], [3, 2]],
    data_sources: [[0, 0, { imageSrc: "/images/icon_home_selected.png", text: "李奎", detailText: "188****1024", indicate: true, cellStyle: "subtitle" }], [1, 0, { imageSrc: "/images/icon_home_selected.png", text: "设备", indicate: true }], [1, 1, { imageSrc: "/images/icon_home_selected.png", text: "答疑", indicate: true }], [1, 2, { imageSrc: "/images/icon_home_selected.png", text: "作业", indicate: true }], [1, 3, { imageSrc: "/images/icon_home_selected.png", text: "学生", indicate: true }], [2, 0, { imageSrc: "/images/icon_home_selected.png", text: "钱包", indicate: true }], [2, 1, { imageSrc: "/images/icon_home_selected.png", text: "相册", indicate: true }], [3, 0, { imageSrc: "/images/icon_home_selected.png", text: "收藏", indicate: true }], [3, 1, { imageSrc: "/images/icon_home_selected.png", text: "设置", indicate: true }]],
    row_heights: [[0, 0, 80]],
    section_headers: [[0, "xxxxxxxxx x lkjasdlfjalj"], [1, "测试一下"], [2, "xxxxxxxxx x lkjasdlfjalj"]],
    section_footers: [[0, "测试一下生命周期函数--监听页面初次渲染完命周期函数--监听页面初次渲染完成，生命周期函数--监听页面初次渲染完成。生命周期函数--监听页面初次渲染完成。"], [1, "测试一下生命周期听页面初次渲染完成，生命周期听页面初次渲染完成，生命周期函数--监听页面初次渲染完成。生命周期函数--监听页面初次渲染完成。"], [3, "xxxxxxxxx x lkjasdlfjalj，渲染完成，生命周期函数--监听页面初。"]],
    section_header_heights: [[0, 50]],
    section_footer_heights: [[1, 80]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
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
  
  },

  tapCell: function (e) {
    for (var i = 0; i < this.data.data_sources.length; i++) {
      if (this.data.data_sources[i][0] == e.detail.section && this.data.data_sources[i][1] == e.detail.row) {
        console.log(this.data.data_sources[i])
      }
    }
  },

  longPressCell: function (e) {
    console.log("longPressCell");
  }
})