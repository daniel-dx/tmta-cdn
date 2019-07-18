<template>
  <el-button
    :size="mergedConfig.size"
    :type="mergedConfig.type"
    :plain="mergedConfig.plain"
    :round="mergedConfig.round"
    :circle="mergedConfig.circle"
    :icon="mergedConfig.icon"
    class="btn">{{mergedConfig.label}}</el-button>
</template>

<style scoped lang="scss">
.btn {
}
</style>

<script>
import { compMixin } from "tmta-core";

export default {
  name: "Btn",
  mixins: [compMixin],
  i18nData: {},
  data() {
    return {
      // >>> Don't touch me - defaultConfig
      defaultConfig: {
        label: "Button",
        size: "small",
        type: "primary",
        plain: false,
        round: false,
        circle: false,
        icon: ""
      }
      // <<< Don't touch me - defaultConfig
    };
  }
};
</script>
