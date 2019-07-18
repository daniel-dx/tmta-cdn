<template>
  <span class="txt" :style="{color: mergedConfig.color, 'font-size': mergedConfig.fontSize + 'px', 'font-weight': mergedConfig.bold ? 'bold' : 'normal'}" v-html="mergedConfig.value || mergedConfig.html"></span>
</template>

<style scoped lang="scss">
.txt {
}
</style>

<script>
import { compMixin } from "tmta-core";

export default {
  name: "Txt",
  mixins: [compMixin],
  i18nData: {
    en: {},
    zh_cn: {}
  },
  data() {
    return {
      // >>> Don't touch me - defaultConfig
      defaultConfig: {
        value: "",
        html: "",
        color: "",
        fontSize: 14,
        bold: false
      }
      // <<< Don't touch me - defaultConfig
    };
  }
};
</script>
