import  { RichUtils } from 'draft-js';

export default () => {
  return {
    customStyleMap: {
      'COOL': {
        background: 'blue',
        padding: '0 .3em',
        color: '#fff',
      }
    },
    keyBindingFn: (e) => {
      if (e.metaKey && e.key === 'h') {
        return 'highlight';
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === 'highlight') {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'COOL'));
        return true;
      }
    },
  };
};