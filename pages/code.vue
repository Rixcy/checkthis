<template>
  <main-content>
    <div class="p-4 shadow-md">
      <input
        v-model="text"
        type="text"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline">
      <button
        :class="[
          'border-2',
          'border-green',
          'hover:text-white',
          'text-xs',
          'font-bold',
          'py-2',
          'px-4',
          'rounded',
          'focus:outline-none',
          { 'bg-green-dark' : splitActive },
          { 'text-white': splitActive },
          { 'text-green': !splitActive },
          { 'hover:bg-green': !splitActive }
        ]"
        @click="toggleActive('split')">Split Class</button>
      <button
        :class="[
          'border-2',
          'border-blue',
          'hover:text-white',
          'text-xs',
          'font-bold',
          'py-2',
          'px-4',
          'rounded',
          'focus:outline-none',
          { 'bg-blue-dark' : darkActive },
          { 'text-white': darkActive },
          { 'text-blue': !darkActive },
          { 'hover:bg-blue': !darkActive }
        ]"
        @click="toggleActive('dark')">Dark Mode</button>
    </div>
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
      splitActive: false,
      darkActive: false,
      text: '',
      editor: Object,
      beforeContent: '',
      initialCode: `// pass options to ace.edit
ace.edit(element, {
  mode: "ace/mode/javascript",
  selectionStyle: "text"
})

// use setOptions method to set several options at once
editor.setOptions({
  autoScrollEditorIntoView: true,
  copyWithEmptySelection: true,
})

// use setOptions method
editor.setOption("mergeUndoDeltas", "always");

// some options are also available as methods e.g.
editor.setTheme(...)

// to get the value of the option use
editor.getOption("optionName")`
    }
  },
  computed: {
    splitClass() {
      if (this.text.length < 1 || !this.splitActive) return
      const a = this.text.split('"')
      if (a.length > 1) {
        const b = a[1].split(" ")
        let c = ""
        for (let i = 0; i < b.length; i++) {
          c += `\n  '${b[i]}',`
        }
        c = `:class="[${c}\n]"`
        return c
      }
    },
    darkMode() {
      if (this.text.length < 1 || !this.darkActive) return
      const a = this.text.split("'")
      if (a.length > 1) {
        let b = `{ '${a[1]}': darkMode },\n{ '${a[1]}': !darkMode },`
        return b
      }
    }
  },
  watch: {
    splitClass: function (value) {
      if (this.beforeContent !== value) {
        this.editor.setValue(value, 1)
      }
    },
    darkMode: function (value) {
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
  },
  methods: {
    toggleActive(el) {
      if (el == 'dark') {
        this.text = ''
        this.splitActive = false
        this.darkActive = !this.darkActive
      } else if (el == 'split') {
        this.text = ''
        this.darkActive = false
        this.splitActive = !this.splitActive
      }
    }
  },
}
</script>
