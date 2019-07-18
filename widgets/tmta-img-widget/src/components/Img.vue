<template>
  <div class="img">
    <div
      class="img-area"
      @click="goPreview"
      :style="{'cursor': mergedConfig.preview === true ? 'pointer' : 'default'}"
    >
      <img
        class="small-image"
        :src="mergedConfig.src"
        :style="{'max-width': mergedConfig.maxWidth ? mergedConfig.maxWidth + 'px' : 'none','max-height': mergedConfig.maxHeight ? mergedConfig.maxHeight + 'px' : 'none'}"
      />
      <i class="zoom-icon el-icon-zoom-in" v-if="mergedConfig.preview === true"></i>
    </div>
    <el-dialog :title="$tmtalang('preview')" :visible.sync="dialogVisible" width="80%">
      <img :src="mergedConfig.src" style="display: block; margin: 0 auto; max-width: 100%;" />
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.img {
  .img-area {
    position: relative;
    float: left;
    .small-image {
      display: block;
    }
    .zoom-icon {
      position: absolute;
      right: 2px;
      bottom: 2px;
      z-index: 5;
      font-size: 20px;
      color: #222;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
    float: none;
  }
}
</style>

<script>
import { compMixin } from "tmta-core";

export default {
  name: "Img",
  mixins: [compMixin],
  i18nData: {
    en: {
      preview: "Preview"
    },
    zh_cn: {
      preview: "图片预览"
    }
  },
  data() {
    return {
      dialogVisible: false,
      // >>> Don't touch me - defaultConfig
      defaultConfig: {
        src: "",
        // fit: "",
        preview: false,
        maxWidth: "",
        maxHeight: ""
      }
      // <<< Don't touch me - defaultConfig
    };
  },
  methods: {
    goPreview() {
      if (this.mergedConfig.preview === true) {
        this.$data.dialogVisible = true;
      }
    }
  }
};
</script>
