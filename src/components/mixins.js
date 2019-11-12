let mixins = {
  data () {
    return {
      showAllCode: false,
      showHtmlCode: false,
      showJsCode: false,
      showCssCode: false
    }
  },
  methods: {
    codeShowHide (type) {
      switch (type) {
        case 'all':
          this.showAllCode = !this.showAllCode
          break
        case 'html':
          this.showHtmlCode = !this.showHtmlCode
          break
        case 'js':
          this.showJsCode = !this.showJsCode
          break
        case 'css':
          this.showCssCode = !this.showCssCode
          break
      }
    }
  }
}
export default mixins
