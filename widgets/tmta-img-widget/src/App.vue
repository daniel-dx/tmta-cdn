<template>
  <div id="app">
    <h2>Demo Place</h2>

    <div class="comp-wrapper">
      <Img :config="config"/>
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
import Img from "./components/Img.vue";
import dataSchema from "../data-schema.js";

export default {
  name: "app",
  components: {
    CompConfigPanel,
    Img
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
