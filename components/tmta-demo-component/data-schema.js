export default {
  type: "object",
  shortDesc: {
    en:
      "TODO: Write a brief description here. it is more better to add some pictures.</br/><image src='https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png'/>",
    zh_cn:
      "TODO：写下简单描述，如果有配图那更好</br/><image src='https://unpkg.com/tmta-demo-component/dist/assets/thumbnail.png'/>"
  },
  properties: {
    msg: {
      type: "string",
      description: {
        en: "This is a message",
        zh_cn: "这是一条消息"
      },
      enum: [
        {
          value: "hi daniel",
          desc: {
            en: "Say hi to daniel",
            zh_cn: "向丹尼尔问好"
          }
        },
        {
          value: "hello world",
          desc: {
            en: "Say hello to world",
            zh_cn: "向世界问好"
          }
        }
      ]
    }
  }
};
