export default {
  type: "object",
  shortDesc: {
    en:
      'Official filter component - style 1</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>',
    zh_cn:
      '官方查询组件 - 样式1</br/><image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>'
  },
  properties: {
    normal: {
      type: "object",
      description: {
        en: "Normal filter conditions",
        zh_cn: "普通查询条件"
      },
    },
    adv: {
      type: "object",
      description: {
        en: "Advanced filter conditions. Use advanced queries when normal query conditions exceed one line",
        zh_cn: "高级查询条件。当普通查询条件超过一行才使用高级查询"
      },
    },
    autoQueryFields: {
      type: "array",
      description: {
        en: "Fields that automatically triggers a query event. That is, it can be triggered automatically without clicking the query button. It is recommended for use in drop-down boxes, etc. Pick from normal and advanced filter conditions",
        zh_cn: "自动触发查询事件的字段，即不用点击查询按钮即可自动触发，建议用于下拉框等。从普通查询和高级查询条件中选取"
      },
      items: {
        type: "string",
      }
    },
    emitEvent_change: {
      type: "object",
      description: {
        en: "Event emitted when query conditions changed",
        zh_cn: "触发的查询事件"
      },
      properties: {
        name: {
          type: 'string',
          description: {
            en: "Event name",
            zh_cn: "事件名称"
          },
          enum: [
            {
              value: "search conditions change",
              desc: {
                en: "Just demo data",
                zh_cn: "仅仅是演示的数据"
              }
            }
          ]
        },
        dataKey: {
          type: 'string',
          description: {
            en: "The key name of the event data.",
            zh_cn: "事件数据的key。"
          },
          enum: [
            {
              value: "query",
              desc: {
                en: "Just demo data",
                zh_cn: "仅仅是演示的数据"
              }
            }
          ]
        }
      }
    }
  },
  default: {
    normal: {
        type: 'object',
        properties: {
            keyword: {
                type: 'string',
                ui: {
                    label: 'Keyword',
                    columns: 4
                }
            }
        },
        ui: {
            widgetConfig: {
                layout: 'h'
            }
        }
    },
    autoQueryFields: [],
    emitEvent_change: {
        name: "search conditions change",
        dataKey: 'query'
    }
  }
};
