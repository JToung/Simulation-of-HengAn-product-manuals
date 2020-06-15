//index.js
const app = getApp()
const page1 = {
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    current: 'Family',
    swiperImg: [
      'http://47.103.1.149:7002/public/uploads/operator/1590658904626.png',
      'http://47.103.1.149:7002/public/uploads/operator/1590658924284.png',
      'http://47.103.1.149:7002/public/uploads/operator/1590658932007.png',
      'http://47.103.1.149:7002/public/uploads/operator/1590658938582.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    navigationBrand: {
      title: '纸业品牌',
      brand: [
        {
          name: '心相印',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
        {
          name: '竹π',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
        {
          name: '品诺',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
      ]
    },
    navigationClass: {
      title: '纸业分类',
      brand: [
        {
          name: '塑装面巾纸',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
        {
          name: '有芯卷纸',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
        {
          name: '无芯卷纸',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
        {
          name: '盒装面巾纸',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
        {
          name: '厨房用纸',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
        {
          name: 'C型手帕纸',
          img: '../../images/brandImg/xinxiangyin.jpg',
          url: ''
        },
      ]
    },
    // 通过active设定当前激活标签
    active: 'paper',
    imagesTabs: [{
      tab: '纸业',
      key: 'paper',
      picPlacement: 'top',
      image: {
        activeImage: './../../images/tab-icon/dining-active.png',
        defaultImage: './../../images/tab-icon/dining.png',
      }
    },
    {
      tab: '女性护理',
      key: 'feminineCare',
      picPlacement: 'top',
      image: {
        activeImage: './../../images/tab-icon/badroom-active.png',
        defaultImage: './../../images/tab-icon/badroom.png',
      }
    }, {
      tab: '老年护理',
      key: 'agedCare',
      picPlacement: 'top',
      image: {
        activeImage: './../../images/tab-icon/kichten-active.png',
        defaultImage: './../../images/tab-icon/kichten.png',
      }
    },
    {
      tab: '婴童',
      key: 'child',
      picPlacement: 'top',
      image: {
        activeImage: './../../images/tab-icon/bathroom-active.png',
        defaultImage: './../../images/tab-icon/bathroom.png',
      }
    },
    {
      tab: '湿巾',
      key: 'wetWipes',
      picPlacement: 'top',
      image: {
        activeImage: './../../images/tab-icon/bathroom-active.png',
        defaultImage: './../../images/tab-icon/bathroom.png',
      }
    },
    {
      tab: '家居',
      key: 'household',
      picPlacement: 'top',
      image: {
        activeImage: './../../images/tab-icon/bathroom-active.png',
        defaultImage: './../../images/tab-icon/bathroom.png',
      }
    },
    {
      tab: '日化',
      key: 'cosmetic',
      picPlacement: 'top',
      image: {
        activeImage: './../../images/tab-icon/bathroom-active.png',
        defaultImage: './../../images/tab-icon/bathroom.png',
      }
    }
    ],
    focus: false,
  },
  options: {
    addGlobalClass: true
  },
  onTabsChange: function (event) {
    switch (event.detail.activeKey) {
      case 'paper':
        const navigationClass1 = {
          title: '纸业分类',
          brand: [
            {
              name: '塑装面巾纸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '有芯卷纸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '无芯卷纸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '盒装面巾纸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '厨房用纸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: 'C型手帕纸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        const navigationBrand1 = {
          title: '纸业品牌',
          brand: [
            {
              name: '心相印',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '竹π',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '品诺',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        this.setData({
          navigationClass: navigationClass1,
          navigationBrand: navigationBrand1
        });
        break;
      case 'feminineCare':
        const navigationClass2 = {
          title: '女性护理分类',
          brand: [
            {
              name: '卫生巾',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '护垫',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '一次性妆护',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            }
          ]
        };
        const navigationBrand2 = {
          title: '女性护理品牌',
          brand: [
            {
              name: '七度空间',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: 'SPACE7',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '安尔乐',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '小嗨森',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '若颜初',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '新呼吸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        this.setData({
          navigationClass: navigationClass2,
          navigationBrand: navigationBrand2
        });
        break;
      case 'agedCare':
        const navigationClass3 = {
          title: '老年护理分类',
          brand: [
            {
              name: '成人拉拉裤',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '成人纸尿裤',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '成人纸尿片',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '成人护理垫',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '成人卫生湿巾',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            }
          ]
        };
        const navigationBrand3 = {
          title: '老年护理品牌',
          brand: [
            {
              name: '安尔康',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '便利妥',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        this.setData({
          navigationClass: navigationClass3,
          navigationBrand: navigationBrand3
        });
        break;
      case 'child':
        const navigationClass4 = {
          title: '婴童分类',
          brand: [
            {
              name: '婴儿纸尿裤',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '婴儿弹力裤',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '婴儿纸尿片',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '婴儿用纸',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            }
          ]
        };
        const navigationBrand4 = {
          title: '婴童品牌',
          brand: [
            {
              name: 'Anerle安儿乐',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: 'Q.MO奇莫',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        this.setData({
          navigationClass: navigationClass4,
          navigationBrand: navigationBrand4
        });
        break;
      case 'wetWipes':
        const navigationClass5 = {
          title: '湿巾分类',
          brand: [
            {
              name: '成人湿巾',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '儿童湿巾',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '婴儿湿巾',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '家用湿巾',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        const navigationBrand5 = {
          title: '湿巾品牌',
          brand: [
            {
              name: '心相印',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '淳一',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '七度空间',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '优选',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        this.setData({
          navigationClass: navigationClass5,
          navigationBrand: navigationBrand5
        });
        break;
      case 'household':
        const navigationClass6 = {
          title: '家居分类',
          brand: [
            {
              name: '保鲜膜',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '保鲜袋',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '密实袋',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '水杯',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '洁净袋',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '懒人抹布',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '洗洁巾',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '百洁布',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '除尘系列',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '轻旅系列',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '手套',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '铝箔',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '台布',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '钢丝球',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '拖把',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '礼盒',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        const navigationBrand6 = {
          title: '家居品牌',
          brand: [
            {
              name: '悦适',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '心相印',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '家来纳',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            }
          ]
        };
        this.setData({
          navigationClass: navigationClass6,
          navigationBrand: navigationBrand6
        });
        break;
      case 'cosmetic':
        const navigationClass7 = {
          title: '日化分类',
          brand: [
            {
              name: '洗衣球类',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '洗衣液类',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '洗手液类',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '洗衣片类',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '沐浴露类',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '洗发水类',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
          ]
        };
        const navigationBrand7 = {
          title: '日化品牌',
          brand: [
            {
              name: '心相印',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            },
            {
              name: '美媛春',
              img: '../../images/brandImg/xinxiangyin.jpg',
              url: ''
            }
          ]
        };
        this.setData({
          navigationClass: navigationClass7,
          navigationBrand: navigationBrand7
        });
        break;
      default:
        this.setData({
          navigationClass: {},
          navigationBrand: {}
        });
        break;
    }
    console.log("this.data.navigationClass", this.data.navigationClass)
    console.log(event)
    this.setData({
      active: event.detail.activeKey,
    });
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.activeKey}`,
    //   icon: 'none',
    // });
  },

  brandGrid(e) {
    console.log(e.detail.cell)
    wx.showToast({
      title: e.detail.cell.name,
      icon: 'none'
    });
  },
  classGrid(e) {
    console.log(e.detail.cell)
    wx.showToast({
      title: e.detail.cell.name,
      icon: 'none'
    });
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },

  handleChange: function ({
    detail
  }) {
    this.setData({
      current: detail.key
    });
    console.log(this.data.current)
  },

  onSearchCancel() {
    wx.showToast({
      title: '已取消'
    });
  },

  onGetUserInfo: function (e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function () {
    setTimeout(this._asyncData, 5000);
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

  }
}
const itemTab1 = {

}
Page(page1)