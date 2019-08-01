<template>
  <div class="demo-component">{{ $tmtalang('say') }}: {{ mergedConfig.msg }}</div>
</template>

<style scoped lang="scss">
.demo-component {
}
</style>

<script>
import { compMixin } from "tmta-core";

export default {
  name: "DemoComponent",
  mixins: [compMixin],
  i18nData: {
    en: {
      say: "Say"
    },
    zh_cn: {
      say: "说"
    }
  },
  data() {
    return {

      // >>> Don't touch me - defaultConfig
      defaultConfig: {
        msg: "hi dx"
      }
      // <<< Don't touch me - defaultConfig
    };
  }
};
</script>
