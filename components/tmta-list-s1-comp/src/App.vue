<template>
  <div id="app">
    <h2>Demo Place</h2>

    <div class="comp-wrapper">
      <CompConfigPanel v-model="config" :data-schema="dataSchema" :max-lines="40"/>
      <ListS1 :config="config"/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  .comp-wrapper {
    display: flex;
    > * {
      flex: 1;
    }

    border: 1px dashed #dcdfe6;
    padding: 20px 0;
    border-left: none;
    border-right: none;
  }
}
</style>

<script>
import { CompConfigPanel } from "tmta-core";
import ListS1 from "./components/ListS1.vue";
import dataSchema from "../data-schema.js";

export default {
  name: "app",
  components: {
    CompConfigPanel,
    ListS1
  },
  data() {
    return {
      config: dataSchema.default,
      dataSchema
    };
  }
};
</script>
