<template>
  <div id="app">
    <h2>Demo Place</h2>

    <div class="comp-wrapper">
      <Btn :config="config"/>
    </div>
    
    <CompConfigPanel v-model="config" :data-schema="dataSchema"/>
  </div>
</template>

<style lang="scss">
#app {
  .comp-wrapper {
    border: 1px dashed #dcdfe6;
    padding: 20px 0;
    border-left: none;
    border-right: none;
  }
}
</style>

<script>
import { CompConfigPanel } from "tmta-core";
import Btn from "./components/Btn.vue";
import dataSchema from "../data-schema.js";

export default {
  name: "app",
  components: {
    CompConfigPanel,
    Btn
  },
  data() {
    return {
      config: {
      },
      dataSchema
    };
  }
};
</script>
