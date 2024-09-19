import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";

// npm i @editorjs/code @editorjs/embed @editorjs/header  @editorjs/inline-code @editorjs/list @editorjs/nested-list @editorjs/paragraph @editorjs/quote

export const EDITOR_CONFIG = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },

  header: {
    class: Header,
    shortcut: "CMD+SHIFT+H",
  },
};
