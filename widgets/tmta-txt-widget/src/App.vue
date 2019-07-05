<template>
  <div id="app">
    <h2>Demo Place</h2>

    <div class="comp-wrapper">
      <Txt :config="config"/>
    </div>
    
    <ncform
      :form-schema="configSchema"
      v-model="config"
      form-name="configForm"
    ></ncform>
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
import Txt from "./components/Txt.vue";
import configSchema from "../config-schema.js";

export default {
  name: "app",
  components: {
    Txt
  },
  data() {
    return {
      config: {
        msg: "Hello Daniel"
      },
      configSchema
    };
  }
};
</script>
