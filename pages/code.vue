<template>
  <main-content>
    <div id="editor"/>
  </main-content>
</template>

<script>
const ace = require('brace')
require('brace/mode/javascript')
require('brace/theme/monokai')

export default {
  data: function () {
    return {
      editor: Object,
      beforeContent: '',
      initialCode: "// pass options to ace.edit\n" +
        "ace.edit(element, {\n" +
        "  mode: \"ace/mode/javascript\",\n" +
        "  selectionStyle: \"text\"\n" +
        "})\n\n" +
        "// use setOptions method to set several options at once\n" +
        "editor.setOptions({\n" +
        "  autoScrollEditorIntoView: true,\n" +
        "  copyWithEmptySelection: true,\n" +
        "})\n\n" +
        "// use setOptions method" +
        "editor.setOption(\"mergeUndoDeltas\", \"always\");\n" +
        "// some options are also available as methods e.g.\n" +
        "editor.setTheme(...)\n\n" +
        "// to get the value of the option use\n" +
        "editor.getOption(\"optionName\")"
    }
  },
  watch: {
    'content' (value) {
      if (this.beforeContent !== value) {
        this.editor.setValue(value, 1)
      }
    }
  },
  mounted () {
    const lang = 'javascript'
    const theme = 'monokai'
    this.editor = ace.edit("editor")
    this.editor.setOptions({
      autoScrollEditorIntoView: true,
      maxLines: 50,
      minLines: 20
    });
    this.editor.renderer.setScrollMargin(10, 10, 10, 10)
    this.editor.getSession().setMode(`ace/mode/${lang}`)
    this.editor.setTheme(`ace/theme/${theme}`)
    this.editor.getSession().setUseWorker(false);
    this.editor.setValue(this.initialCode, 1)

    this.editor.on('change', () => {
      this.beforeContent = this.editor.getValue()
      this.$emit('change-content', this.editor.getValue())
    })
  }
}
</script>
