<template>
  <div class="animation-container">
    <p class="animation-desc">瓜分百万奖金项目的团队PK匹配时的 入场动画和匹配动画。</p>
    <div class="animation-change-line">
      <button class="animation-change" @click="changeStatus"></button>
    </div>
    <div class="view-container">
      <div class="animation-line">
        <div
          :class="['dog-line', {'teamStatus0': teamStatus === 0}, {'teamStatus-1': teamStatus === -1}, {'teamStatus1': teamStatus === 1}]"
        >
          <img class="vs" src="//storage.jd.com/19million/images/img_vs.png" />
          <img class="dog1" src="//storage.jd.com/19million/images/img_dog1.png" />
          <img class="dog2" src="//storage.jd.com/19million/images/img_dog2.png" />
        </div>
      </div>
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
              <textarea rows="8" v-if="showHtmlCode">
              <div class="animation-line">
                <div
                  :class="['dog-line', {'teamStatus0': teamStatus === 0}, {'teamStatus-1': teamStatus === -1}, {'teamStatus1': teamStatus === 1}]"
                >
                  <img class="vs" src="//storage.jd.com/19million/images/img_vs.png" />
                  <img class="dog1" src="//storage.jd.com/19million/images/img_dog1.png" />
                  <img class="dog2" src="//storage.jd.com/19million/images/img_dog2.png" />
                </div>
              </div>
            </textarea>
            </transition>
          </li>
          <li class="code-item">
            <div class="name" @click="codeShowHide('js')">
              <span class="txt">js代码</span>
              <i :class="['arrow', {'arrow-up': showJsCode}]"></i>
            </div>
            <transition name="fade">
              <textarea rows="8" v-if="showJsCode">
                data () {
                  return {
                    teamStatus: 0
                  }
                },
                methods: {
                  changeStatus () {
                    if (this.teamStatus === 0) {
                      this.teamStatus = -1
                    } else if (this.teamStatus === -1) {
                      this.teamStatus = 1
                    } else if (this.teamStatus === 1) {
                      this.teamStatus = 0
                    }
                  }
                }
              </textarea>
            </transition>
          </li>
          <li class="code-item">
            <div class="name" @click="codeShowHide('css')">
              <span class="txt">css代码</span>
              <i :class="['arrow', {'arrow-up': showCssCode}]"></i>
            </div>
            <transition name="fade">
              <textarea rows="8" v-if="showCssCode">
                .view-container{
                  padding: 0 20rem/$r;
                  .animation-line{
                    position: relative;
                    width: 100%;
                    height: 350rem/$r;
                    text-align: center;
                  }
                  .dog-line{
                    width: 100%;
                    height: 298rem/$r;
                    position: absolute;
                    top: 60rem/$r;
                    .dog1{
                      width: 246rem/$r;
                      height: 298rem/$r;
                      position: absolute;
                      // left: -246rem/$r;
                      // bottom: 0;
                      left: 100rem/$r;
                      bottom: 20rem/$r;
                      z-index: 10;
                      animation: dog1Animation 3s forwards;
                      // animation: dog1Animation 3s infinite;
                    }
                    .dog2{
                      width: 263rem/$r;
                      height: 259rem/$r;
                      position: absolute;
                      // right: -263rem/$r;
                      // bottom: 0;
                      right: 100rem/$r;
                      bottom: 0rem/$r;
                      z-index: 10;
                      animation: dog2Animation 3s forwards;
                    }
                    .vs{
                      width: 375rem/$r;
                      height: 350rem/$r;
                      position: relative;
                      z-index: 1;
                    }
                    // 准备匹配
                    &.teamStatus0{
                      .dog1{
                        animation: dog1Animation0 3s forwards;
                      }
                      .dog2{
                        animation: dog2Animation0 3s forwards;
                      }
                    }
                    // 准备匹配
                    &.teamStatus-1{
                      .dog1{
                        animation: dog1Animation-1 2s infinite;
                      }
                      .dog2{
                        animation: dog2Animation-1 2s infinite;
                      }
                    }
                    // 准备匹配
                    &.teamStatus1{
                      .dog1{
                        animation: dog1Animation1 1.5s forwards;
                      }
                      .dog2{
                        animation: dog2Animation1 1.5s forwards;
                      }
                    }
                  }
                }
                @keyframes dog1Animation0 {
                  0%{
                    left: -246rem/$r;
                    bottom: 0;
                  }
                  60% {
                    left: 100rem/$r;
                    bottom: 0;
                  }
                  68% {
                    left: 100rem/$r;
                    bottom: 10rem/$r;
                  }
                  75% {
                    left: 100rem/$r;
                    bottom: -10rem/$r;
                  }
                  83% {
                    left: 100rem/$r;
                    bottom: 0;
                  }
                  100%{
                    left: 40rem/$r;
                    bottom: 0;
                  }
                }
                @keyframes dog2Animation0 {
                  0%{
                    right: -263rem/$r;
                    bottom: 0;
                  }
                  60% {
                    right: 100rem/$r;
                    bottom: 0;
                  }
                  68% {
                    right: 100rem/$r;
                    bottom: -10rem/$r;
                  }
                  75% {
                    right: 100rem/$r;
                    bottom: 10rem/$r;
                  }
                  83% {
                    right: 100rem/$r;
                    bottom: 0rem/$r;
                  }
                  100%{
                    right: 40rem/$r;
                    bottom: 0;
                  }
                }
                @keyframes dog1Animation-1 {
                  0%{
                    left: 40rem/$r;
                    bottom: 0;
                  }
                  10%{
                    left: 80rem/$r;
                    bottom: 10rem/$r;
                  }
                  20%{
                    left: 120rem/$r;
                    bottom: 20rem/$r;
                  }
                  30%{
                    left: 100rem/$r;
                    bottom: 0;
                  }
                  40%{
                    left: 80rem/$r;
                    bottom: -20rem/$r;
                  }
                  50%{
                    left: 60rem/$r;
                    bottom: 0;
                  }
                  60%{
                    left: 80rem/$r;
                    bottom: -20rem/$r;
                  }
                  70%{
                    left: 90rem/$r;
                    bottom: 0;
                  }
                  80%{
                    left: 120rem/$r;
                    bottom: 20rem/$r;
                  }
                  90%{
                    left: 90rem/$r;
                    bottom: 10rem/$r;
                  }
                  100%{
                    left: 40rem/$r;
                    bottom: 0;
                  }
                }
                @keyframes dog2Animation-1 {
                  0%{
                    right: 40rem/$r;
                    bottom: 0;
                  }
                  10%{
                    right: 80rem/$r;
                    bottom: 10rem/$r;
                  }
                  20%{
                    right: 100rem/$r;
                    bottom: 0;
                  }
                  30%{
                    right: 80rem/$r;
                    bottom: 20rem/$r;
                  }
                  40%{
                    right: 120rem/$r;
                    bottom: 10rem/$r;
                  }
                  50%{
                    right: 60rem/$r;
                    bottom: 0;
                  }
                  60%{
                    right: 80rem/$r;
                    bottom: 20rem/$r;
                  }
                  70%{
                    right: 70rem/$r;
                    bottom: 0;
                  }
                  80%{
                    right: 50rem/$r;
                    bottom: -10rem/$r;
                  }
                  90%{
                    right: 60rem/$r;
                    bottom: 10rem/$r;
                  }
                  100%{
                    right: 40rem/$r;
                    bottom: 0;
                  }
                  
                }
                @keyframes dog1Animation1 {
                  0%{
                    left: 40rem/$r;
                    bottom: 0;
                  }
                  100%{
                    left: 40rem/$r;
                    bottom: 0;
                  }
                }
                @keyframes dog2Animation1 {
                  0%{
                    right: 40rem/$r;
                    bottom: 0;
                  }
                  100%{
                    right: 40rem/$r;
                    bottom: 0;
                  }
                }
                

              </textarea>
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
      teamStatus: 0
    }
  },
  created () { },
  mounted () { },
  methods: {
    changeStatus () {
      if (this.teamStatus === 0) {
        this.teamStatus = -1
      } else if (this.teamStatus === -1) {
        this.teamStatus = 1
      } else if (this.teamStatus === 1) {
        this.teamStatus = 0
      }
    }
  }
}
</script>

<style lang='scss' scoped>
$r: 100;
.code-container{
  padding-top: 40px;
  padding-right: 20px;
  padding-left: 20px;
  .name{
    padding-left: 2em;
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
  textarea{
    background-color: #23241f;
    border-radius: 4px;
    color: #66d9ef;
    width: 100%;
  }
}
.animation-container{
  padding-bottom: 10rem/$r;
  .animation-change-line{
    text-align: right;
    padding-right: 20rem/$r;
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
    padding: 0 20rem/$r;
    .animation-line{
      position: relative;
      width: 100%;
      height: 350rem/$r;
      text-align: center;
    }
    .dog-line{
      width: 100%;
      height: 298rem/$r;
      position: absolute;
      top: 60rem/$r;
      .dog1{
        width: 246rem/$r;
        height: 298rem/$r;
        position: absolute;
        // left: -246rem/$r;
        // bottom: 0;
        left: 100rem/$r;
        bottom: 20rem/$r;
        z-index: 10;
        animation: dog1Animation 3s forwards;
        // animation: dog1Animation 3s infinite;
      }
      .dog2{
        width: 263rem/$r;
        height: 259rem/$r;
        position: absolute;
        // right: -263rem/$r;
        // bottom: 0;
        right: 100rem/$r;
        bottom: 0rem/$r;
        z-index: 10;
        animation: dog2Animation 3s forwards;
      }
      .vs{
        width: 375rem/$r;
        height: 350rem/$r;
        position: relative;
        z-index: 1;
      }
      // 准备匹配
      &.teamStatus0{
        .dog1{
          animation: dog1Animation0 3s forwards;
        }
        .dog2{
          animation: dog2Animation0 3s forwards;
        }
      }
      // 准备匹配
      &.teamStatus-1{
        .dog1{
          animation: dog1Animation-1 2s infinite;
        }
        .dog2{
          animation: dog2Animation-1 2s infinite;
        }
      }
      // 准备匹配
      &.teamStatus1{
        .dog1{
          animation: dog1Animation1 1.5s forwards;
        }
        .dog2{
          animation: dog2Animation1 1.5s forwards;
        }
      }
    }
  }
}
@keyframes dog1Animation0 {
  0%{
    left: -246rem/$r;
    bottom: 0;
  }
  60% {
    left: 100rem/$r;
    bottom: 0;
  }
  68% {
    left: 100rem/$r;
    bottom: 10rem/$r;
  }
  75% {
    left: 100rem/$r;
    bottom: -10rem/$r;
  }
  83% {
    left: 100rem/$r;
    bottom: 0;
  }
  100%{
    left: 40rem/$r;
    bottom: 0;
  }
}
@keyframes dog2Animation0 {
  0%{
    right: -263rem/$r;
    bottom: 0;
  }
  60% {
    right: 100rem/$r;
    bottom: 0;
  }
  68% {
    right: 100rem/$r;
    bottom: -10rem/$r;
  }
  75% {
    right: 100rem/$r;
    bottom: 10rem/$r;
  }
  83% {
    right: 100rem/$r;
    bottom: 0rem/$r;
  }
  100%{
    right: 40rem/$r;
    bottom: 0;
  }
}
@keyframes dog1Animation-1 {
  0%{
    left: 40rem/$r;
    bottom: 0;
  }
  10%{
    left: 80rem/$r;
    bottom: 10rem/$r;
  }
  20%{
    left: 120rem/$r;
    bottom: 20rem/$r;
  }
  30%{
    left: 100rem/$r;
    bottom: 0;
  }
  40%{
    left: 80rem/$r;
    bottom: -20rem/$r;
  }
  50%{
    left: 60rem/$r;
    bottom: 0;
  }
  60%{
    left: 80rem/$r;
    bottom: -20rem/$r;
  }
  70%{
    left: 90rem/$r;
    bottom: 0;
  }
  80%{
    left: 120rem/$r;
    bottom: 20rem/$r;
  }
  90%{
    left: 90rem/$r;
    bottom: 10rem/$r;
  }
  100%{
    left: 40rem/$r;
    bottom: 0;
  }
}
@keyframes dog2Animation-1 {
  0%{
    right: 40rem/$r;
    bottom: 0;
  }
  10%{
    right: 80rem/$r;
    bottom: 10rem/$r;
  }
  20%{
    right: 100rem/$r;
    bottom: 0;
  }
  30%{
    right: 80rem/$r;
    bottom: 20rem/$r;
  }
  40%{
    right: 120rem/$r;
    bottom: 10rem/$r;
  }
  50%{
    right: 60rem/$r;
    bottom: 0;
  }
  60%{
    right: 80rem/$r;
    bottom: 20rem/$r;
  }
  70%{
    right: 70rem/$r;
    bottom: 0;
  }
  80%{
    right: 50rem/$r;
    bottom: -10rem/$r;
  }
  90%{
    right: 60rem/$r;
    bottom: 10rem/$r;
  }
  100%{
    right: 40rem/$r;
    bottom: 0;
  }
  
}
@keyframes dog1Animation1 {
  0%{
    left: 40rem/$r;
    bottom: 0;
  }
  100%{
    left: 40rem/$r;
    bottom: 0;
  }
}
@keyframes dog2Animation1 {
  0%{
    right: 40rem/$r;
    bottom: 0;
  }
  100%{
    right: 40rem/$r;
    bottom: 0;
  }
}
</style>
