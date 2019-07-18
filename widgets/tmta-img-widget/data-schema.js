export default {
  type: 'object',
  shortDesc: {
    en: 'Official image widget</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>',
    zh_cn: '官方图片小部件</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>'
  },
  properties: {
    src: {
      type: 'string',
      description: {
        en: 'Image src',
        zh_cn: '图片链接'
      },
      enum: [
        {
          value: 'https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png',
          desc: {
            en: 'Just a demo value',
            zh_cn: '仅仅是演示的数据'
          }
        }
      ]
    },
    preview: {
      type: 'boolean',
      description: {
        en: 'Show preview function',
        zh_cn: '是否提供预览功能'
      },
      enum: []
    },
    maxWidth: {
      type: 'number',
      description: {
        en: 'Max width',
        zh_cn: '最大宽度'
      },
      enum: [
        {
          value: 100,
          desc: {
            en: 'Just a demo value',
            zh_cn: '仅仅是演示的数据'
          }
        }
      ]
    },
    maxHeight: {
      type: 'number',
      description: {
        en: 'Max height',
        zh_cn: '最大高度'
      },
      enum: [
        {
          value: 100,
          desc: {
            en: 'Just a demo value',
            zh_cn: '仅仅是演示的数据'
          }
        }
      ]
    }
  }
};
