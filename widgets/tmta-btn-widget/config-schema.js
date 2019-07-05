export default {
  type: "object",
  properties: {
    label: {
      type: "string",
      default: "Button",
      ui: {
        label: "Label",
        columns: 4
      }
    },
    type: {
      type: "string",
      default: "primary",
      ui: {
        label: "Type",
        widget: "select",
        columns: 4,
        widgetConfig: {
          enumSource: [
            {
              value: "primary",
              label: "Primary"
            },
            {
              value: "success",
              label: "Success"
            },
            {
              value: "warning",
              label: "Warning"
            },
            {
              value: "danger",
              label: "Danger"
            },
            {
              value: "info",
              label: "Info"
            },
            {
              value: "text",
              label: "Text"
            }
          ]
        }
      }
    },
    icon: {
      type: "string",
      ui: {
        label: "icon",
        columns: 4
      }
    },
    size: {
      type: "string",
      default: "small",
      ui: {
        label: "Size",
        widget: "radio",
        columns: 4,
        widgetConfig: {
          enumSource: [
            {
              value: "medium",
              label: "Medium"
            },
            {
              value: "small",
              label: "Small"
            },
            {
              value: "mini",
              label: "Mini"
            }
          ]
        }
      }
    },
    plain: {
      type: "boolean",
      ui: {
        label: "Plain",
        columns: 4
      }
    },
    round: {
      type: "boolean",
      ui: {
        label: "Round",
        columns: 4
      }
    },
    circle: {
      type: "boolean",
      ui: {
        label: "Circle",
        columns: 4
      }
    }
  },
  ui: {
    widgetConfig: {
      layout: "h"
    }
  }
};
