<template>
  <layout>
    <template #desc></template>
    <template #changeStatus>
      <button class="animation-change" @click="changeStatus"></button>
    </template>
    <template #mainView></template>
    <template #codeHtml>
      <textarea rows="8"></textarea>
    </template>
    <template #codeJs>
      <textarea rows="8"></textarea>
    </template>
    <template #codeCss>
      <textarea rows="8"></textarea>
    </template>
  </layout>
</template>

<script>
import mixins from '../mixins.js'
import layout from '../tpl/tpl'
export default {
  name: '',
  components: {
    layout
  },
  mixins: [mixins],
  data () {
    return {
      startPk: false
    }
  },
  created () { },
  mounted () {
    this.changeStatus()
  },
  methods: {
    changeStatus () {
    }
  }
}
</script>

<style lang='scss' scoped>
$r: 100;
</style>
