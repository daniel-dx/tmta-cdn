export default {
  type: "object",
  shortDesc: {
    en: `Official list component - style 1</br/>
      dx support: {{$item}} - row data; {{$selectedItems}} - selected rows's data
      <image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>`,
    zh_cn: `官方列表组件 - 样式1</br/>
      支持dx表达式：{{$item}} - 行数据; {{$selectedItems}} - 选中的行数据
      <image src="https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png"/>`
  },
  properties: {
    initLoadData: {
      type: "boolean",
      description: {
        en: "Whether data is automatically loaded at initialization time",
        zh_cn: "初始化时是否自动加载数据"
      }
    },
    onEvent_search: {
      type: "string",
      description: {
        en:
          "Listens for event to trigger the search behavior. Event data structures received：{resetPage: true, query: {}}",
        zh_cn:
          "监听事件以触发的搜索行为。接收的事件数据结构：{resetPage: true, query: {}}"
      },
      enum: [
        {
          value: "search list",
          desc: {
            en: "Just a demo value",
            zh_cn: "仅仅是演示的数据"
          }
        }
      ]
    },
    toolbar: {
      type: "object",
      description: {
        en: "Toolbar",
        zh_cn: "工具栏"
      },
      properties: {
        batch: {
          type: "array",
          description: {
            en: "Batch operations",
            zh_cn: "批量操作"
          },
          items: {
            type: "$tmta-widget"
          }
        },
        normal: {
          type: "array",
          description: {
            en: "Nonbatch operations",
            zh_cn: "非批量操作"
          },
          items: {
            type: "$tmta-widget"
          }
        }
      }
    },
    list: {
      type: "object",
      description: {
        en: "List",
        zh_cn: "列表"
      },
      properties: {
        datasource: {
          type: "object",
          description: {
            en: "Datasource",
            zh_cn: "数据源"
          },
          properties: {
            apiUrl: {
              type: "string",
              description: {
                en: "API URL",
                zh_cn: "API URL"
              },
              enum: [
                {
                  value: "https://xxxx/api/demo/list",
                  desc: {
                    en: "Just a demo value",
                    zh_cn: "仅仅是演示的数据"
                  }
                }
              ]
            },
            method: {
              type: "string",
              description: {
                en: "Method",
                zh_cn: "Method"
              },
              enum: ["GET", "POST"]
            },
            paramFields: {
              type: "object",
              description: {
                en: "Parameter fields",
                zh_cn: "参数字段"
              },
              properties: {
                pageSize: {
                  type: "string",
                  description: {
                    en: "Page size field",
                    zh_cn: "每页项数的字段"
                  },
                  enum: [
                    {
                      value: "pageSize",
                      desc: {
                        en: "Just a demo value",
                        zh_cn: "仅仅是演示的数据"
                      }
                    }
                  ]
                },
                pageNum: {
                  type: "string",
                  description: {
                    en: "Page number field",
                    zh_cn: "页码字段"
                  },
                  enum: [
                    {
                      value: "pageNum",
                      desc: {
                        en: "Just a demo value",
                        zh_cn: "仅仅是演示的数据"
                      }
                    }
                  ]
                },
                sortField: {
                  type: "string",
                  description: {
                    en: "Sort field",
                    zh_cn: "排序字段"
                  },
                  enum: [
                    {
                      value: "sortField",
                      desc: {
                        en: "Just a demo value",
                        zh_cn: "仅仅是演示的数据"
                      }
                    }
                  ]
                },
                sortOrder: {
                  type: "string",
                  description: {
                    en: "Sort order field",
                    zh_cn: "排序顺序字段"
                  },
                  enum: [
                    {
                      value: "sortOrder",
                      desc: {
                        en: "Just a demo value",
                        zh_cn: "仅仅是演示的数据"
                      }
                    }
                  ]
                },
                query: {
                  type: "string",
                  description: {
                    en:
                      "Query field. Null means that key of the query condition is used as the field",
                    zh_cn: "查询条件字段。空即表示查询条件的key作为字段"
                  },
                  enum: [
                    {
                      value: "query",
                      desc: {
                        en: "Just a demo value",
                        zh_cn: "仅仅是演示的数据"
                      }
                    }
                  ]
                }
              }
            },
            otherParams: {
              type: "array",
              description: {
                en: "Other parameters",
                zh_cn: "其它参数"
              },
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string",
                    description: {
                      en: "Key",
                      zh_cn: "Key"
                    },
                    enum: [
                      {
                        value: "name",
                        desc: {
                          en: "Just a demo value",
                          zh_cn: "仅仅是演示的数据"
                        }
                      }
                    ]
                  },
                  value: {
                    type: "string",
                    description: {
                      en: "Value",
                      zh_cn: "Value"
                    },
                    enum: [
                      {
                        value: "daniel",
                        desc: {
                          en: "Just a demo value",
                          zh_cn: "仅仅是演示的数据"
                        }
                      }
                    ]
                  }
                }
              }
            },
            resField: {
              type: "object",
              description: {
                en: "Response field",
                zh_cn: "响应数据字段"
              },
              properties: {
                total: {
                  type: "string",
                  description: {
                    en: "Total",
                    zh_cn: "总项数"
                  },
                  enum: [
                    {
                      value: "total",
                      desc: {
                        en: "Just a demo value",
                        zh_cn: "仅仅是演示的数据"
                      }
                    }
                  ]
                },
                data: {
                  type: "string",
                  description: {
                    en: "List data",
                    zh_cn: "列表数据"
                  },
                  enum: [
                    {
                      value: "data",
                      desc: {
                        en: "Just a demo value",
                        zh_cn: "仅仅是演示的数据"
                      }
                    }
                  ]
                }
              }
            }
          }
        },
        selectable: {
          type: "boolean",
          description: {
            en: "Selectable",
            zh_cn: "项是否可选"
          },
          enum: []
        },
        columnsCustom: {
          type: "boolean",
          description: {
            en: "Whether the displayed columns can be configured",
            zh_cn: "是否可配置显示的列"
          },
          enum: []
        },
        columns: {
          type: "array",
          description: {
            en: "Columns configuration",
            zh_cn: "列配置"
          },
          items: {
            type: "object",
            properties: {
              header: {
                type: "string",
                description: {
                  en: "Header",
                  zh_cn: "表头"
                },
                enum: [
                  {
                    value: "Name",
                    desc: {
                      en: "Just a demo value",
                      zh_cn: "仅仅是演示的数据"
                    }
                  }
                ]
              },
              defShow: {
                type: "boolean",
                description: {
                  en: "Show default. Only valid when columnsCustom is true",
                  zh_cn: "是否默认显示。仅当 columnsCustom 为true时有效"
                },
                enum: []
              },
              sortField: {
                type: "string",
                description: {
                  en: "Sort field",
                  zh_cn: "排序字段"
                },
                enum: [
                  {
                    value: "name",
                    desc: {
                      en: "Just a demo value",
                      zh_cn: "仅仅是演示的数据"
                    }
                  }
                ]
              },
              show: {
                type: "boolean",
                description: {
                  en: "Show",
                  zh_cn: "是否显示"
                }
              },
              dataField: {
                type: "string",
                description: {
                  en: "Binding data field",
                  zh_cn: "绑定的数据字段"
                },
                enum: [
                  {
                    value: "name",
                    desc: {
                      en: "Just a demo value",
                      zh_cn: "仅仅是演示的数据"
                    }
                  }
                ]
              },
              useWidget: {
                type: "$tmta-widget"
              }
            }
          }
        },
        actions: {
          type: "array",
          description: {
            en: "Actions",
            zh_cn: "操作"
          },
          items: {
            type: "$tmta-widget",
            description: {
              en: "Use the widget, priority is higher than dataField",
              zh_cn: "使用小部件，优先级比 dataField 高"
            }
          }
        },
        actionColumn: {
          type: "object",
          description: {
            en: "Action column configure",
            zh_cn: "操作列配置"
          },
          properties: {
            width: {
              type: "string",
              description: {
                en: "Width",
                zh_cn: "宽度"
              },
              enum: [
                {
                  value: "60px",
                  desc: {
                    en: "Just a demo value",
                    zh_cn: "仅仅是演示的数据"
                  }
                }
              ]
            }
          }
        }
      }
    },
    paging: {
      type: "object",
      description: {
        en: "Paging configuration",
        zh_cn: "分页设置"
      },
      properties: {
        show: {
          type: "boolean",
          description: {
            en: "Show",
            zh_cn: "是否显示"
          },
          enum: []
        },
        infiniteMode: {
          type: "boolean",
          description: {
            en: "Enable infinite mode",
            zh_cn: "启用无限加载模式"
          },
          enum: []
        },
        autoLoad: {
          type: "boolean",
          description: {
            en: "Automatic rolling load",
            zh_cn: "滚动自动加载"
          },
          enum: []
        },
        layout: {
          type: "array",
          description: {
            en: "Layout",
            zh_cn: "分页布局"
          },
          items: {
            type: "string",
            enum: [
              {
                value: '"prev", "pager", "next", "jumper", "total"',
                desc: {
                  en: "Just a demo value",
                  zh_cn: "仅仅是演示的数据"
                }
              }
            ]
          }
        }
      }
    }
  },
  default: {
    initLoadData: true,
    onEvent_search: "search list",
    toolbar: {
      batch: [
        {
          widget: {
            name: "tmta-btn-widget",
            config: {
              label: "Delete",
              type: "danger"
            },
            actionConfirm: {
              preCheck: "dx: {{$selectedItems}}.length > 0",
              checkFailedMsg: "Please select at least one item",
              confirmMsg: "Are you sure to delete the selected items?"
            },
            actions: [
              {
                type: "ajax",
                ajaxUrl: "https://daniel-dx.github.io/mock-host/users",
                ajaxMethod: "get",
                ajaxParams: {
                  ids: "dx: {{$selectedItems[e].id}}"
                },
                ajaxSuccessMsg: "successfully deleted",
                ajaxSuccessEvent: {
                  name: "search list",
                  data: {
                    resetPage: false
                  }
                }
              }
            ]
          }
        }
      ],
      normal: [
        {
          widget: {
            name: "tmta-btn-widget",
            config: {
              label: "New"
            },
            actions: [
              {
                type: "modal",
                modalTitle: "New",
                modalPage: {
                  name: "demo-edit"
                }
              }
            ]
          }
        }
      ]
    },
    list: {
      datasource: {
        apiUrl: "https://daniel-dx.github.io/mock-host/users",
        method: "GET",
        paramFields: {
          pageSize: "pageSize",
          pageNum: "pageNum",
          sortField: "sortField",
          sortOrder: "sortOrder",
          query: ""
        },
        otherParams: [],
        resField: {
          total: "total",
          data: "data"
        }
      },
      selectable: true,
      columnsCustom: false,
      columns: [
        {
          header: "ID",
          sortField: "id",
          dataField: "id"
        },
        {
          header: "Name",
          sortField: "name",
          dataField: "name"
        },
        {
          header: "Photo",
          useWidget: {
            widget: {
              name: "tmta-img-widget",
              config: {
                src: "dx: {{$item.photo}}",
                preview: true,
                maxHeight: 80
              }
            }
          }
        }
      ],
      actions: [
        {
          widget: {
            name: "tmta-btn-widget",
            config: {
              label: "",
              size: "mini",
              icon: "el-icon-delete"
            },
            actionConfirm: {
              confirmMsg: "Are you sure to delete this item?"
            },
            actions: [
              {
                type: "ajax",
                ajaxUrl: "https://daniel-dx.github.io/mock-host/users",
                ajaxMethod: "get",
                ajaxParams: {
                  id: "dx: {{$item.id}}"
                },
                ajaxSuccessMsg: "successfully deleted",
                ajaxSuccessEvent: {
                  name: "search list",
                  data: {
                    resetPage: false
                  }
                }
              }
            ]
          }
        }
      ],
      actionColumn: {
        width: ""
      }
    },
    paging: {
      show: true,
      infiniteMode: false,
      autoLoad: false,
      layout: ["prev", "pager", "next", "jumper", "total"]
    }
  }
};
