export default {
  type: 'object',
  shortDesc: {
    en:
      'Office button widget</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>',
    zh_cn: '官方按钮小部件</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>'
  },
  properties: {
    label: {
      type: 'string',
      description: {
        en: 'Button display text',
        zh_cn: '按钮显示文本'
      },
      enum: []
    },
    size: {
      type: 'string',
      description: {
        en: 'Size',
        zh_cn: '尺寸'
      },
      enum: ['medium', 'small', 'mini']
    },
    type: {
      type: 'string',
      description: {
        en: 'Type',
        zh_cn: '类型'
      },
      enum: ['primary', 'success', 'warning', 'danger', 'info', 'text']
    },
    plain: {
      type: 'boolean',
      description: {
        en: 'Plain button',
        zh_cn: '是否朴素按钮'
      },
      enum: []
    },
    round: {
      type: 'boolean',
      description: {
        en: 'Round button',
        zh_cn: '是否圆角按钮'
      },
      enum: []
    },
    circle: {
      type: 'boolean',
      description: {
        en: 'Circle button',
        zh_cn: '是否圆形按钮'
      },
      enum: []
    },
    icon: {
      type: 'string',
      description: {
        en: 'Icon class name. e.g. el-icon-edit',
        zh_cn: 'icon 类名。例如 el-icon-edit'
      },
      enum: []
    }
  }
};
