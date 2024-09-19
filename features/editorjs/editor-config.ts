// import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
// import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
// import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";
// import Embed from "@editorjs/embed";
import CodeTool from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";

// npm i @editorjs/code @editorjs/embed @editorjs/header  @editorjs/inline-code @editorjs/list @editorjs/nested-list @editorjs/paragraph @editorjs/quote

export const EDITOR_CONFIG = {
  // paragraph: {
  //   class: Paragraph,
  //   inlineToolbar: true,
  // },

  header: {
    class: Header,
    shortcut: "CMD+SHIFT+H",
    config: {
      placeholder: "Enter a header",
      levels: [2, 3, 4],
      defaultLevel: 3,
    },
  },

  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+Q",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },

  // warning: {
  //   class: Warning,
  //   inlineToolbar: true,
  //   shortcut: "CMD+SHIFT+W",
  //   config: {
  //     titlePlaceholder: "Title",
  //     messagePlaceholder: "Message",
  //   },
  // },

  delimiter: Delimiter,

  list: {
    class: NestedList,
    shortcut: "CMD+SHIFT+L",
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },

  // embed: {
  //   class: Embed,
  //   inlineToolbar: true,
  // },

  code: CodeTool,

  inlineCode: {
    class: InlineCode,
    shortcut: "CMD+SHIFT+M",
  },
};
