export default {
  type: "object",
  shortDesc: {
    en:
      'Official text widget</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>',
    zh_cn:
      '官方文本小部件</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>'
  },
  properties: {
    value: {
      type: "string",
      description: {
        en: "Plain text value",
        zh_cn: "纯文本"
      },
      enum: [
        {
          value: "Hi Daniel",
          desc: {
            en: "Just a demo value",
            zh_cn: "仅仅是演示的数据"
          }
        }
      ]
    },
    html: {
      type: "string",
      description: {
        en: "Html value",
        zh_cn: "Html内容"
      },
      enum: [
        {
          value: "<p>Hi Daniel</p>",
          desc: {
            en: "Just a demo value",
            zh_cn: "仅仅是演示的数据"
          }
        }
      ]
    },
    color: {
      type: "string",
      description: {
        en: "Text color",
        zh_cn: "文本颜色"
      },
      enum: [
        {
          value: "#67C23A",
          desc: {
            en: "Just a demo value",
            zh_cn: "仅仅是演示的数据"
          }
        }
      ]
    },
    fontSize: {
      type: "number",
      description: {
        en: "Font size",
        zh_cn: "字体大小"
      },
      enum: [
        {
          value: "14",
          desc: {
            en: "Just a demo value",
            zh_cn: "仅仅是演示的数据"
          }
        }
      ]
    },
    bold: {
      type: "boolean",
      description: {
        en: "Bold",
        zh_cn: "是否加粗"
      },
      enum: []
    }
  }
};
