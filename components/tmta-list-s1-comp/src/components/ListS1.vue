<template>
  <div class="list-s1" ref="tmtaListS1">
    <!--工具栏区域-->
    <el-row class="toolbar-area">
      <el-col :span="24">
        <el-row type="flex">
          <!--批量操作区域-->
          <template v-if="batchActionsVisible">
            <!-- 批量操作 按钮 -->
            <div class="widget-container">
              <WidgetPit
                :key="idx"
                v-for="(widgetConfig, idx) in config.toolbar.batch"
                :config="widgetConfig"
                :smart-data="{$selectedItems: selectedItems}"
              ></WidgetPit>
            </div>
          </template>

          <!-- 下面这个el-col用于flex布局，勿删 -->
          <el-col></el-col>
          <!-- 其它操作区域，如新建等 -->
          <template v-if="toolsVisible">
            <div class="widget-container">
              <WidgetPit
                :key="idx"
                v-for="(widgetConfig, idx) in mergedConfig.toolbar.normal"
                :config="widgetConfig"
              ></WidgetPit>
            </div>
          </template>
        </el-row>
      </el-col>
    </el-row>

    <div style="position:relative">
      <!--
      <div
        class="columnConfigButton"
        style="position:absolute; right:0; top:10px; z-index:10;"
        v-if="mergedConfig.list.columnsConfigurable === true"
      >
        <el-popover ref="columnpop" placement="left" trigger="click">
          <el-checkbox v-model="columnSelectAll" @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="columnShow" @change="handleCheckedCitiesChange">
            <div v-for="item in columnFilters" style="margin-top:10px;">
              <el-checkbox :label="item.value">{{item.text}}</el-checkbox>
            </div>
          </el-checkbox-group>
          <el-button type="mini" style="margin-top:10px" @click="clearColumnConfig">
            重置
            <i class="el-icon-refresh"></i>
          </el-button>
        </el-popover>

        <el-button type="mini" v-popover:columnpop>列配置</el-button>
      </div>-->
      <!--列表数据区域-->
      <el-row>
        <el-col :span="24">
          <el-table
            ref="table"
            :data="tableData"
            :stripe="true"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            @sort-change="handelSortChange"
            :empty-text="loadingData ? 'Loading...' : '暂无数据'"
          >
            <!-- 展开 -->
            <!-- <el-table-column
              v-if="mergedConfig.list.rowExtend && mergedConfig.list.rowExtend.properties && mergedConfig.list.rowExtend.properties.length > 0"
              type="expand"
            >
              <template slot-scope="props">
                <detail-recursion :config="mergedConfig.list.rowExtend" :value="props.row"></detail-recursion>
              </template>
            </el-table-column>-->

            <!-- 选择 -->
            <el-table-column v-if="mergedConfig.list.selectable" type="selection"></el-table-column>

            <!-- 列表数据 -->
            <template v-for="(item, index) in mergedConfig.list.columns">
              <el-table-column
                :label="item.header"
                v-if="isColumnShow(index)"
                :key="index"
                :width="item.width"
                :sort-orders="['ascending', 'descending']"
                :sortable="item.sortField ? 'custom' : false"
                :sort-by="item.sortField"
              >
                <template slot-scope="scope">
                  <template v-if="!item.useWidget">{{scope.row[item.dataField]}}</template>
                  <template v-else>
                    <WidgetPit :smart-data="{$item: scope.row}" :config="config.list.columns[index].useWidget"></WidgetPit>
                  </template>
                </template>
              </el-table-column>
            </template>

            <!-- 操作 -->
            <el-table-column
              v-if="mergedConfig.list.actions.length > 0"
              align="left"
              label="操作"
              :width="mergedConfig.list.actionColumn.width"
            >
              <template slot-scope="scope">
                <div class="widget-container">
                  <WidgetPit
                    :key="idx"
                    v-for="(widgetConfig, idx) in config.list.actions"
                    :smart-data="{$item: scope.row}"
                    :config="widgetConfig"
                  ></WidgetPit>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    <!--分页区域-->
    <!--用initLoading就为了绕过el-pagination异步加载完数据更新currentPage不生效的BUG-->
    <el-row v-if="mergedConfig.paging.show" class="mgt30">
      <!-- 无限加载 -->
      <el-col ref="unlimitedLoadingWrapper" align="center" v-if="mergedConfig.paging.infiniteMode" style="min-height: 40px">
        <!-- 手动点击触发 -->
        <el-button v-if="!mergedConfig.paging.autoLoad" :loading="loadingData" :disabled="pageNum >= pageCount" style="width: 40%" type="primary" @click="loadMore()" plain>加载更多</el-button>

        <!-- 滚动到底部自动触发 -->
        <div v-else style="color: #909399">
          <span v-show="loadingData">加载中。。。</span>
          <span v-show="!loadingData && pageNum >= pageCount">已经没有数据啦~~~</span>
        </div>
      </el-col>

      <!-- 普通分页 -->
      <el-col align="right" v-else>
        <el-pagination background :total="itemTotal" @size-change="handleSizeChange" @current-change="currentChange" :layout="mergedConfig.paging.layout.join(',')"
          :page-count="pageCount" :current-page="pageNum " :page-sizes="[20, 40, 60, 80, 100]">
        </el-pagination>
      </el-col>

    </el-row>

  </div>
</template>

<style scoped lang="scss">
.list-s1 {
  position: relative;
  .to-top-btn {
    position: absolute;
    right: 20px;
    z-index: 1;
  }
  .mgt30 {
    margin-top: 30px;
  }
  .mbSpace {
    margin-bottom: 20px;
  }
  .toolbar-area {
    background-color: #fafafa;
    padding: 8px;
    .widget-container {
      display: flex;
      > *:first-of-type {
        margin-left: 0;
      }
      > * {
        margin-left: 8px;
      }
    }
  }
  .item-op-btn {
    margin-top: 4px;
  }
  .other-op-btn {
    margin-right: 5px;
  }
  .batch-btn {
    margin-left: 6px;
    &:first-child {
      margin-left: 0;
    }
  }
  .toolbar-btn {
    margin-right: 6px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

<script>
import { compMixin, _, WidgetPit, eventHub } from "tmta-core";

export default {
  name: "ListS1",
  components: {
    WidgetPit
  },
  mixins: [compMixin],
  i18nData: {
    en: {},
    zh_cn: {}
  },
  created() {
    if (this.mergedConfig.initLoadData) {
      this.search();
    }

    if (this.mergedConfig.onEvent_search) {
      eventHub.$on(this.mergedConfig.onEvent_search, this.onEventSearch);
    }
  },
  mounted() {
    this.$options.scrollParentElm = findClosetScrollParent(
      this.$refs.tmtaListS1
    );
  },
  beforeDestroy() {
    if (this.mergedConfig.onEvent_search) {
      eventHub.$off(this.mergedConfig.onEvent_search, this.onEventSearch);
    }
  },
  data() {
    return {
      // >>> Don't touch me - defaultConfig
      defaultConfig: {
        initLoadData: false, // 初始化时自动加载数据
        onEvent_search: "",
        toolbar: {
          batch: [
            // tmta widget
          ],
          normal: [
            // tmta widget
          ]
        },
        list: {
          datasource: {
            apiUrl: "",
            method: "GET",
            paramFields: {
              pageSize: "pageSize",
              pageNum: "pageNum",
              sortField: "sortField",
              sortOrder: "sortOrder",
              query: ""
            },
            otherParams: [
              // { key: "", value: "" }
            ],
            resField: { total: "total", data: "data" }
          },
          selectable: false,
          columnsCustom: false,
          columns: [
            // {
            //   header: "",
            //   defShow: true,
            //   sortField: "",
            //   show: true,
            //   dataField: "",
            //   useWidget: tmta-widget
            // }
          ],
          actions: [
            // tmta widget
          ],
          actionColumn: {
            width: ""
          }
        },
        paging: {
          show: true,
          infiniteMode: false,
          autoLoad: false,
          layout: ["prev", "pager", "next", "jumper", "total"]
        }
      },
      // <<< Don't touch me - defaultConfig

      tableData: [], // 表格数据
      selectedItems: [], // 选中的行
      sortField: "",
      sortOrder: "",
      pageNum: 1,
      pageSize: 20,
      pageCount: 0,
      itemTotal: 0,
      query: {}, // 查询条件
      loadingData: false // 是否在加载数据
    };
  },
  computed: {
    batchActionsVisible() {
      return (
        _.get(this, "mergedConfig.list.selectable") === true &&
        _.get(this, "mergedConfig.toolbar.batch", []).length > 0
      );
    },

    toolsVisible() {
      return _.get(this, "mergedConfig.toolbar.normal", []).length > 0;
    }
  },
  methods: {
    // 多选改变时触发
    handleSelectionChange(val) {
      this.$data.selectedItems = val;
      // this.$emit('select-change', val);
    },

    // 表头排序时触发
    handelSortChange(data) {
      let sortField = _.get(data, "column.sortBy");
      let order = data.order;
      this.$data.sortField = sortField;
      this.$data.sortOrder = order;
      this.search();
    },

    // 搜索 - 重置pageNum为1
    search() {
      this.$data.pageNum = 1;
      this.loadTableData();
    },

    // 加载表格数据 - 不重置pageNum和查询条件
    loadTableData() {
      const datasource = this.mergedConfig.list.datasource;

      let postData = {};

      // 处理分页字段
      if (this.mergedConfig.paging.show) {
        postData[datasource.paramFields.pageSize] = this.$data.pageSize;
        postData[datasource.paramFields.pageNum] = this.$data.pageNum;
      }

      // 处理排序字段
      if (this.$data.sortField && this.$data.sortOrder) {
        postData[datasource.paramFields.sortField] = this.$data.sortField;
        postData[datasource.paramFields.sortOrder] = this.$data.sortOrder;
      }

      // 处理查询字段
      if (datasource.paramFields.query) {
        postData[datasource.paramFields.query] = this.$data.query;
      } else {
        postData = Object.assign(postData, this.$data.query);
      }

      // otherParams的优先级低于查询参数，排序参数
      postData = Object.assign({}, datasource.otherParams, postData);

      this.$data.loadingData = true;
      let currentScrollTop = (
        this.$options.scrollParentElm || document.documentElement
      ).scrollTop; // 记录当前的滚动位置，供无限加载模式使用

      const options = {
        method: datasource.method || "get"
      };
      options[
        options.method.toLowerCase() === "get" ? "params" : "data"
      ] = postData;

      return this.$http(datasource.apiUrl, options).then(res => {
        const listField = datasource.resField.data;
        const pageingTotalField = datasource.resField.total;
        this.$data.itemTotal = parseInt(
          _.get(res.data, `${pageingTotalField}`, 0)
        );
        let origintableData = this.$data.tableData;
        this.$data.tableData = [];
        this.$nextTick(() => {
          // 这里先置空，再在下一个循环赋值，是为了绕开el-table没法正确显示更新后的值的BUG
          let tableData = listField
            ? _.get(res.data, `${listField}`)
            : res.data;
          if (
            _.get(this.mergedConfig, "paging.infiniteMode", false) &&
            this.$data.pageNum !== 1
          ) {
            // 无限加载模式 且 非第一页（如查询条件更改重置）
            this.$data.tableData = origintableData.concat(tableData);
            this.$nextTick(
              () =>
                this.$options.scrollParentElm
                  ? (this.$options.scrollParentElm.scrollTop = currentScrollTop)
                  : window.scrollTo(0, currentScrollTop)
            );
          } else {
            this.$data.tableData = tableData;
          }
          this.$data.loadingData = false;
        });
        this.$data.pageCount = Math.ceil(
          this.$data.itemTotal / this.value.pageSize
        );

        return;
      });
    },

    // 是否展示该列
    isColumnShow(index) {
      // return this.$data.columnShow.indexOf(index) !== -1;
      console.log(index);
      return true;
    },

    onEventSearch(data) {
      if (data.resetPage) {
        this.search();
      } else {
        this.loadTableData();
      }
    },

    // 页码变化
    currentChange(currentIndex) {
      this.$data.pageNum = currentIndex;
      this.loadTableData();
    },

    // pageSize变化
    handleSizeChange(size) {
      this.$data.pageNum = 1;
      this.$data.pageSize = size;
      this.loadTableData();
    },

    // 加载更多 - 无限加载模式使用
    loadMore() {
      this.$data.pageNum += 1;
      this.loadTableData();
    },

    // 置顶 - 供无限加载模式使用
    toTop() {
      this.$options.scrollParentElm
        ? (this.$options.scrollParentElm.scrollTop = 0)
        : window.scrollTo(0, 0);
    }
  }
};

/**
 * 判断元素element是否滚动到可视区域
 *
 * 该方法不用指定滚动容器
 *
 * @param {*} element
 * @param {*} parentElm 没值则在浏览器滚动范围内，有值则在容器如div滚动范围内
 * @param {*} percentX
 * @param {*} percentY
 */
export function isScrolledIntoView(element, parentElm, percentX, percentY) {
  if (parentElm) {
    let tolerance = 0.01; //needed because the rects returned by getBoundingClientRect provide the position up to 10 decimals
    if (percentX == null) {
      percentX = 100;
    }
    if (percentY == null) {
      percentY = 100;
    }
    let elementRect = element.getBoundingClientRect();
    let parentRect = parentElm.getBoundingClientRect();

    let visiblePixelX =
      Math.min(elementRect.right, parentRect.right) -
      Math.max(elementRect.left, parentRect.left);
    let visiblePixelY =
      Math.min(elementRect.bottom, parentRect.bottom) -
      Math.max(elementRect.top, parentRect.top);
    let visiblePercentageX = (visiblePixelX / elementRect.width) * 100;
    let visiblePercentageY = (visiblePixelY / elementRect.height) * 100;
    return (
      visiblePercentageX + tolerance > percentX &&
      visiblePercentageY + tolerance > percentY
    );
  } else {
    let rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

/**
 * 找到最近的滚动容器
 * @param {*} element
 * @param {*} direction v-垂直 h-水平 vh-两个方向 空值-任意一个方向
 */
export function findClosetScrollParent(element, direction) {
  let parentElm = element.parentElement;
  while (parentElm != null) {
    // 这里判断的值并不严谨，暂且满足一般场景即可
    let isOverflow =
      ["auto", "scroll"].indexOf(getComputedStyles(parentElm, "overflow")) >= 0;
    let isOverflowX =
      ["auto", "scroll"].indexOf(getComputedStyles(parentElm, "overflow-x")) >=
      0;
    let isOverflowY =
      ["auto", "scroll"].indexOf(getComputedStyles(parentElm, "overflow-y")) >=
      0;
    let hasHeight =
      getComputedStyles(parentElm, "height") ||
      getComputedStyles(parentElm, "maxHeight");
    let hasWidth =
      getComputedStyles(parentElm, "width") ||
      getComputedStyles(parentElm, "maxWidth");

    switch (direction) {
      case "v":
        if ((isOverflow || isOverflowY) && hasHeight) return parentElm;
        break;
      case "h":
        if ((isOverflow || isOverflowX) && hasWidth) return parentElm;
        break;
      case "vh":
        if (
          (isOverflow || (isOverflowY && isOverflowY)) &&
          (hasHeight && hasWidth)
        )
          return parentElm;
        break;
      default:
        if (
          (isOverflow || isOverflowY || isOverflowY) &&
          (hasHeight || hasWidth)
        )
          return parentElm;
        break;
    }

    parentElm = parentElm.parentElement;
  }

  return null;
}

function getComputedStyles(elem, prop) {
  let cs = window.getComputedStyle(elem, null);
  return cs.getPropertyValue(prop);
}
</script>
