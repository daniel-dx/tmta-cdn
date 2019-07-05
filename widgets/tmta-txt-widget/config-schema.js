export default {
  type: "object",
  properties: {
    value: {
      type: "string",
      default: "Hi Daniel",
      ui: {
        label: "Value",
        columns: 6,
        widget: "nc-dx-input",
        widgetConfig: {
          realWidget: {
            widget: "input"
          }
        }
      }
    },
    html: {
      type: "string",
      ui: {
        label: "Html",
        columns: 6,
        widget: "nc-dx-input",
        widgetConfig: {
          realWidget: {
            widget: "input"
          }
        }
      }
    },
    fontSize: {
      type: "number",
      default: 14,
      ui: {
        label: "Font Size",
        columns: 3,
        widget: "input-number"
      }
    },
    bold: {
      type: "boolean",
      default: false,
      ui: {
        label: "Bold",
        columns: 3
      }
    },
    color: {
      type: "string",
      ui: {
        label: "Color",
        columns: 3,
        widget: "color-picker"
      }
    }
  },
  ui: {
    widgetConfig: {
      layout: "h"
    }
  }
};
