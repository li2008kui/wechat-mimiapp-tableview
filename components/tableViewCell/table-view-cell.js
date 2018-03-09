// components/tableViewCell/table-view-cell.js
Component({
  /**
   * 组件之间的关系
   */
  relations: {
    "./table-view": {
      type: "parent",
      linked: function (target) {
        // 每次被插入到table-view时执行，target是table-view节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是table-view节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是table-view节点实例对象，触发在detached生命周期之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 图片地址
    imageSrc: String,
    // 标题
    text: String,
    // 详细标题
    detailText: String,
    // 是否显示指示图标
    indicate: {
      type: Boolean,
      value: false
    },
    // Cell 的样式，支持 default、subtitle、value1、value2 四种
    cellStyle: {
      type: String,
      value: "default"
    },
    // Cell 的高度，单位px
    height: {
      type: Number,
      value: 44
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cell_selecte_status: "cell_un_selected"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchCell: function () {
      this.setData({
        cell_selecte_status: "cell_selected"
      });
    },
    recoverCell: function () {
      this.setData({
        cell_selecte_status: "cell_un_selected"
      });
    }
  },

  created: function () {
    console.log("tvc created");
  },

  attached: function () {
    console.log("tvc attached");
  },

  ready: function () {
    console.log("tvc ready");
  },

  moved: function () {
    console.log("tvc moved");
  },

  detached: function () {
    console.log("tvc detached");
  }
})