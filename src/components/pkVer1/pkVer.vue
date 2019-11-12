<template>
  <div class="animation-container">
    <p class="animation-desc">瓜分百万奖金项目的团队PK匹配时的 入场动画和匹配动画。</p>
    <div class="animation-change-line">
      <button class="animation-change" @click="changeStatus"></button>
    </div>
    <div class="view-container">
      <div class="match-block">
        <div class="matching">
          <div :class="['team', {'start-pk' : startPk}] ">
            <span class="team-blue"></span>
            <span class="team-red"></span>
            <i class="vs"></i>
          </div>
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
                <div class="match-block">
                  <div class="matching">
                    <div :class="['team', {'start-pk' : startPk}] ">
                      <span class="team-blue"></span>
                      <span class="team-red"></span>
                      <i class="vs"></i>
                    </div>
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
              <textarea rows="8" v-if="showJsCode"></textarea>
            </transition>
          </li>
          <li class="code-item">
            <div class="name" @click="codeShowHide('css')">
              <span class="txt">css代码</span>
              <i :class="['arrow', {'arrow-up': showCssCode}]"></i>
            </div>
            <transition name="fade">
              <textarea rows="8" v-if="showCssCode">
                .match-block{
                  width: 660rem/$r;
                  height: 590rem/$r;
                  background: white;
                  border-top-left-radius: 66rem/$r;
                  border-top-right-radius: 66rem/$r;
                  border-bottom-left-radius: 14rem/$r;
                  border-bottom-right-radius: 14rem/$r;
                  padding: 55rem/$r 0rem/$r 40rem/$r 0rem/$r;
                  margin: 0 auto;
                  // 匹配中
                  .matching{
                    padding-left: 17rem/$r;
                    padding-right: 7rem/$r;
                    .team{
                      width: 100%;
                      height: 445rem/$r;
                      position: relative;
                      &.start-pk{
                        .team-blue{
                          animation: vsingBlueAnimation 0.5s ease-in 0.5s forwards;
                        }
                        .team-red{
                          animation: vsingRedAnimation 0.5s ease-in 0.5s forwards;
                        }
                      }
                      .team-blue{
                        display: inline-block;
                        width: 358rem/$r;
                        height: 445rem/$r;
                        background-image: url('//storage.jd.com/1911joy/images/bg_vs_team_blue.png');
                        background-size: 100% 100%;
                        position: absolute;
                        top: -500rem/$r;
                        left: 0;
                        opacity: 0;
                        // animation: vsingBlueAnimation 0.5s ease-in 0.5s forwards;
                      }
                      .team-red{
                        display: inline-block;
                        width: 358rem/$r;
                        height: 445rem/$r;
                        background-image: url('//storage.jd.com/1911joy/images/bg_vs_team_red.png');
                        background-size: 100% 100%;
                        position: absolute;
                        bottom: -500rem/$r;
                        right: 0;
                        opacity: 0;
                        // animation: vsingRedAnimation 0.5s ease-in 0.5s forwards;
                      }
                      .vs{
                        display: inline-block;
                        width: 232rem/$r;
                        height: 170rem/$r;
                        background-image: url('//storage.jd.com/1911joy/images/icon_bg_vs.png');
                        background-size: 100% 100%;
                        position: absolute;
                        left: 51%;
                        top: 50%;
                        opacity: 1;
                        transform: translate(-50%, -50%);
                        transform-origin: (50%, 50%);
                      }
                    }
                  }
                  
                }
                @keyframes vsingBlueAnimation {
                  from{
                    opacity: 0;
                    top: -500rem/$r;
                  }
                  75%{
                    opacity: 0.9;
                    top: 120rem/$r;
                  }
                  to{
                    opacity: 1;
                    top: 0rem/$r;
                  }
                }
                @keyframes vsingRedAnimation {
                  from{
                    opacity: 0;
                    bottom: -500rem/$r;
                  }
                  75%{
                    opacity: 0.9;
                    bottom: 120rem/$r;
                  }
                  to{
                    opacity: 1;
                    bottom: 0rem/$r;
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
      startPk: false
    }
  },
  created () { },
  mounted () {
    this.changeStatus()
  },
  methods: {
    changeStatus () {
      this.startPk = false
      setTimeout(() => {
        this.startPk = true
      }, 300)
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
    width: 100%;
    background-color: #23241f;
    border-radius: 4px;
    color: #66d9ef;
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
    
  }
}
.match-block{
  width: 660rem/$r;
  height: 590rem/$r;
  background: white;
  border-top-left-radius: 66rem/$r;
  border-top-right-radius: 66rem/$r;
  border-bottom-left-radius: 14rem/$r;
  border-bottom-right-radius: 14rem/$r;
  padding: 55rem/$r 0rem/$r 40rem/$r 0rem/$r;
  margin: 0 auto;
  // 匹配中
  .matching{
    padding-left: 17rem/$r;
    padding-right: 7rem/$r;
    .team{
      width: 100%;
      height: 445rem/$r;
      position: relative;
      &.start-pk{
        .team-blue{
          animation: vsingBlueAnimation 0.5s ease-in 0.5s forwards;
        }
        .team-red{
          animation: vsingRedAnimation 0.5s ease-in 0.5s forwards;
        }
      }
      .team-blue{
        display: inline-block;
        width: 358rem/$r;
        height: 445rem/$r;
        background-image: url('//storage.jd.com/1911joy/images/bg_vs_team_blue.png');
        background-size: 100% 100%;
        position: absolute;
        top: -500rem/$r;
        left: 0;
        opacity: 0;
        // animation: vsingBlueAnimation 0.5s ease-in 0.5s forwards;
      }
      .team-red{
        display: inline-block;
        width: 358rem/$r;
        height: 445rem/$r;
        background-image: url('//storage.jd.com/1911joy/images/bg_vs_team_red.png');
        background-size: 100% 100%;
        position: absolute;
        bottom: -500rem/$r;
        right: 0;
        opacity: 0;
        // animation: vsingRedAnimation 0.5s ease-in 0.5s forwards;
      }
      .vs{
        display: inline-block;
        width: 232rem/$r;
        height: 170rem/$r;
        background-image: url('//storage.jd.com/1911joy/images/icon_bg_vs.png');
        background-size: 100% 100%;
        position: absolute;
        left: 51%;
        top: 50%;
        opacity: 1;
        transform: translate(-50%, -50%);
        transform-origin: (50%, 50%);
      }
    }
  }
  
}
@keyframes vsingBlueAnimation {
  from{
    opacity: 0;
    top: -500rem/$r;
  }
  75%{
    opacity: 0.9;
    top: 120rem/$r;
  }
  to{
    opacity: 1;
    top: 0rem/$r;
  }
}
@keyframes vsingRedAnimation {
  from{
    opacity: 0;
    bottom: -500rem/$r;
  }
  75%{
    opacity: 0.9;
    bottom: 120rem/$r;
  }
  to{
    opacity: 1;
    bottom: 0rem/$r;
  }
}

</style>
