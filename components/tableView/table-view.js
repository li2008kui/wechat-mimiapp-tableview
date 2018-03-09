// components/tableView/table-view.js
Component({
  /**
   * 组件之间的关系
   */
  relations: {
    "./table-view-cell": {
      type: "child",
      linked: function (target) {
        // 每次有table-view-cell被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次有table-view-cell被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有table-view-cell被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 分区数量
    numberOfSections: Number,
    // 第Section个分区有多少行，必须该属性，格式如：[[Section, Row]]
    numberOfRowsInSection: Object,
    // 某行的数据，必须该属性，格式如：[[Section, Row, {imageSrc: "xxx", text: "xxx", detailText: "xxx", indicate: "xxx", cellStyle: "xxx"}], [...]]
    cellForRowAtIndexPath: {
      type: Object,
      observer: function (val) {
        if (this.data.numberOfSections < 1) {
          this.setData({
            numberOfSections: val.length
          });
        }
      }
    },
    // 第Section个分区有头部标题，格式如：[[Section, "xxx"]]
    titleForHeaderInSection: {
      type: Object,
      value: []
    },
    // 第Section个分区有底部标题，格式如：[[Section, "xxx"]]
    titleForFooterInSection: {
      type: Object,
      value: []
    },
    // 某一行的高度，单位px
    heightForRowAtIndexPath: {
      type: Object,
      value: []
    },
    // 第Section分区头部的高度，单位px
    heightForHeaderInSection: Number,
    // 第Section分区尾部的高度，单位px
    heightForFooterInSection: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCellTap: function (e) {
      this.triggerEvent("celltap", {
        section: e.currentTarget.dataset.section,
        row: e.currentTarget.dataset.row
      });
    },

    onCellLongPress: function (e) {
      this.triggerEvent("celllongpress", {
        section: e.currentTarget.dataset.section,
        row: e.currentTarget.dataset.row
      });
    }
  },

  created: function () {
    console.log("tv created");
  },

  attached: function () {
    console.log("tv attached");
  },

  ready: function () {
    console.log("tv ready");
  },

  moved: function () {
    console.log("tv moved");
  },

  detached: function () {
    console.log("tv detached");
  }
})
