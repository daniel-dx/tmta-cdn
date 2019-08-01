<template>
  <div class="filter-s1">
    <div class="search-condition-area">
      <!-- 普通搜索配置 -->
      <ncform
        v-if="normalEnabled && !showAdv"
        :form-schema="mergedConfig.normal"
        v-model="formVal"
        :form-name="formName"
        @submit="submit"
      ></ncform>
      <!-- 高级搜索配置 -->
      <ncform
        v-if="advEnabled && showAdv"
        :form-schema="advSchema"
        v-model="formVal"
        :form-name="formName"
        @submit="submit"
      ></ncform>
    </div>
    <div class="searchBtnArea">
      <!-- 查询按钮 -->
      <el-button-group>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="submit"
          :title="$tmtalang('search')"
        ></el-button>
        <el-button icon="el-icon-refresh" @click="reset()" :title="$tmtalang('reset')"></el-button>
      </el-button-group>
      <!--高级查询按钮-->
      <el-button
        v-if="advEnabled"
        class="advSearchBtn"
        size="mini"
        @click="showAdv = !showAdv"
        :icon="showAdv ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
      >{{showAdv ? $tmtalang('less') : $tmtalang('more')}}</el-button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filter-s1 {
  display: flex;
  .search-condition-area {
    flex: 1;
  }
  .searchBtnArea {
    width: 120px;
    top: 16px;
    position: relative;
  }
  .searchBtn {
    height: 40px;
    margin: 0;
    margin-left: 0;
  }
  .advSearchBtn {
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 0;
    width: 111px;
  }
}
</style>

<script>
import { compMixin, tmtaUtils, eventHub, _ } from "tmta-core";

export default {
  name: "FilterS1",
  mixins: [compMixin],
  i18nData: {
    en: {
      search: "Search",
      reset: "Reset",
      more: "More",
      less: "Less"
    },
    zh_cn: {
      search: "搜索",
      reset: "重置",
      more: "展开",
      less: "收起"
    }
  },
  created() {
    this.$options.debounceSubmit = _.debounce(this.submit, 500);
  },
  data() {
    return {
      showAdv: false,

      formName: "FilterS1_" + tmtaUtils.genRandomId(),
      formVal: {},

      // >>> Don't touch me - defaultConfig
      defaultConfig: {
        normal: {
          // 普通搜索
          // ncform的配置
        },
        adv: {
          // 高级搜索
          // ncform的配置
        },
        autoQueryFields: [], // 搜索字段值改变时自动触发查询，如下拉框等
        emitEvent_change: {
          name: '',
          dataKey: ''
        }
      }
      // <<< Don't touch me - defaultConfig
    };
  },
  computed: {
    advSchema() {
      return _.merge({}, this.mergedConfig.normal, this.mergedConfig.adv);
    },
    normalEnabled() {
      return (
        Object.keys(_.get(this.mergedConfig, "normal.properties", {})).length >
        0
      );
    },
    advEnabled() {
      return (
        Object.keys(_.get(this.mergedConfig, "adv.properties", {})).length > 0
      );
    }
  },
  watch: {
    formVal: {
      handler: function(newVal, oldVal) {
        const autoQueryFields = this.mergedConfig.autoQueryFields || [];
        if (autoQueryFields.length === 0) return;

        // Ignore when newVal/oldVal is empty obj or newVal equals oldVal
        if (
          Object.keys(newVal).length === 0 ||
          Object.keys(oldVal).length === 0 ||
          JSON.stringify(newVal) === JSON.stringify(oldVal)
        )
          return;

        const foundOne = autoQueryFields.find(
          field =>
            JSON.stringify(newVal[field]) !== JSON.stringify(oldVal[field])
        );
        if (foundOne) {
          this.$options.debounceSubmit();
        }
      },
      deep: false
    }
  },
  methods: {
    submit() {
      if (this.mergedConfig.emitEvent_change.name)
        eventHub.$emit(this.mergedConfig.emitEvent_change.name, this.mergedConfig.emitEvent_change.dataKey ? {[this.mergedConfig.emitEvent_change.dataKey]: this.$data.formVal} : this.$data.formVal);
    },
    reset() {
      this.$ncformReset(this.$data.formName);
      // 这里用$nextTick不能取得正确的字段值
      setTimeout(() => {
        if (this.mergedConfig.emitEvent_change.name)
          eventHub.$emit(this.mergedConfig.emitEvent_change.name, this.mergedConfig.emitEvent_change.dataKey ? {[this.mergedConfig.emitEvent_change.dataKey]: this.$data.formVal} : this.$data.formVal);
      });
    }
  }
};
</script>
