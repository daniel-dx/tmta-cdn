<template>
  <div id="app">
    <h2>Demo Place</h2>

    <div class="comp-wrapper">
      <CompConfigPanel v-model="config" :data-schema="dataSchema" :max-lines="40"/>
      <FilterS1 :config="config"/>
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
import FilterS1 from "./components/FilterS1.vue";
import dataSchema from "../data-schema.js";
import { eventHub, CompConfigPanel } from "tmta-core";

export default {
  name: "app",
  components: {
    CompConfigPanel,
    FilterS1
  },
  created() {
    eventHub.$on("search conditions change", data => {
      console.log(">>>", JSON.stringify(data, null, 2));
    });
  },
  data() {
    return {
      config: dataSchema.default,
      dataSchema
    };
  }
};
</script>
