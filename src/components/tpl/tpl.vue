<template>
  <div class="animation-container">
    <p class="animation-desc">
      <slot name="desc"></slot>
    </p>
    <div class="animation-change-line">
      <slot name="changeStatus"></slot>
    </div>
    <div class="view-container">
      <slot name="mainView"></slot>
    </div>
    <div class="code-container">
      <div class="name" @click="codeShowHide('all')">
        <span class="txt">详细代码</span>
        <i :class="['arrow', {'arrow-up': showAllCode}]"></i>
      </div>
      <transition name="fade">
        <ul class="code-all" v-if="showAllCode">
          <li class="code-item">
            <div class="name" @click="codeShowHide('html')">
              <span class="txt">html代码</span>
              <i :class="['arrow', {'arrow-up': showHtmlCode}]"></i>
            </div>
            <transition name="fade">
              <div v-if="showHtmlCode">
                <slot name="codeHtml"></slot>
              </div>
            </transition>
          </li>
          <li class="code-item">
            <div class="name" @click="codeShowHide('js')">
              <span class="txt">js代码</span>
              <i :class="['arrow', {'arrow-up': showJsCode}]"></i>
            </div>
            <transition name="fade">
              <div v-if="showJsCode">
                <slot name="codeJs"></slot>
              </div>
            </transition>
          </li>
          <li class="code-item">
            <div class="name" @click="codeShowHide('css')">
              <span class="txt">css代码</span>
              <i :class="['arrow', {'arrow-up': showCssCode}]"></i>
            </div>
            <transition name="fade">
              <div v-if="showCssCode">
                <slot name="codeCss"></slot>
              </div>
            </transition>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import mixins from '../mixins.js'
export default {
  name: '',
  components: {},
  mixins: [mixins],
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {
    // changeStatus () {
    // }
  }
}
</script>

<style lang='scss' scoped>
$r: 100;
.animation-container{
  margin-bottom: 40px;
  background-color: #ededed;
  border-radius: 8rem/$r;
}
.code-container{
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  .name{
    font-size: 12px;
    // padding-left: 2em;
    .txt{
      font-size: 14px;
      color: #333;
    }
    i{
      display: inline-block;
      margin-left: 4px;
      width: 16px;
      height: 16px;
      background-image: url('https://img30.360buyimg.com/jr_image/jfs/t1/104053/6/2075/1975/5dca5662Ef7d2135e/ccb0fe99c26032d1.png');
      background-size: 100% 100%;
      // animation: arrowDown 0.5s ease forwards;
      position: relative;
      top: 3px;
      transform: rotate(0);
      transition: transform 0.5s;
      &.arrow-up{
        transform: rotate(-180deg);
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
.animation-container{
  padding-bottom: 10rem/$r;
  .animation-change-line{
    text-align: right;
    padding-right: 20rem/$r;
    // height: 36px;
    font-size: 0;
    padding-bottom: 6px;
  }
  .animation-change{
    width: 30px;
    height: 30px;
    background-image: url('https://img30.360buyimg.com/jr_image/jfs/t1/81951/31/15196/4270/5dca4e17Eead2a2ad/1a3c07f8a93dc8de.png');
    background-size: 100% 100%;
    background-color: transparent;
    border: none;
  }
  .animation-desc{
    padding: 10rem/$r;
    text-indent: 2em;
    line-height: 1.4;
    color: #333;
    font-size: 14px;
  }
}
.animation-container{
  .view-container{
  }
}
</style>
