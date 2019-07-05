export default {
  type: "object",
  properties: {
    src: {
      type: "string",
      default:
        "https://c.vpimg1.com/upcb/2019/07/02/34/ias_156207502789747_570x273_90.jpg",
      ui: {
        label: "Src",
        columns: 12,
        widget: "nc-dx-input",
        widgetConfig: {
          realWidget: {
            widget: "input"
          }
        }
      }
    },
    // fit: {
    //   type: 'string',
    //   ui: {
    //     label: 'Fit',
    //     columns: 3,
    //     widget: 'select',
    //     widgetConfig: {
    //       enumSource: [
    //         {
    //           value: 'fill',
    //           label: 'Fill'
    //         },
    //         {
    //           value: 'contain',
    //           label: 'Contain'
    //         },
    //         {
    //           value: 'cover',
    //           label: 'Cover'
    //         },
    //         {
    //           value: 'none',
    //           label: 'None'
    //         },
    //         {
    //           value: 'scale-down',
    //           label: 'Scale Down'
    //         }
    //       ]
    //     }
    //   }
    // },
    maxWidth: {
      type: "number",
      ui: {
        label: "Max Width",
        columns: 3
      }
    },
    maxHeight: {
      type: "number",
      ui: {
        label: "max Height",
        columns: 3
      }
    },
    preview: {
      type: "boolean",
      ui: {
        label: "Preview",
        columns: 3
      }
    }
  },
  ui: {
    widgetConfig: {
      layout: "h"
    }
  }
};
