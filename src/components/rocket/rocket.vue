<template>
  <layout>
    <template #desc>718主会场，有火箭火焰喷射的效果，如有需要动画按照一定次序进行，以及比较平滑的移动时可以参考。</template>
    <template #changeStatus>
      <button class="animation-change" @click="changeStatus"></button>
    </template>
    <template #mainView>
      <div class="top-box">
        <template>
          <div class="top-superman1"></div>
          <div class="top-superman2"></div>
          <div class="top-num top-num7">
            <span class="top-push"></span>
          </div>
          <div class="top-num top-num1">
            <span class="top-push"></span>
          </div>
          <div class="top-num top-num8">
            <span class="top-push"></span>
          </div>
          <div class="top-band"></div>
        </template>
      </div>
    </template>
    <template #codeHtml>
      <textarea rows="8">
        <div class="top-box">
          <template>
            <div class="top-superman1"></div>
            <div class="top-superman2"></div>
            <div class="top-num top-num7">
              <span class="top-push"></span>
            </div>
            <div class="top-num top-num1">
              <span class="top-push"></span>
            </div>
            <div class="top-num top-num8">
              <span class="top-push"></span>
            </div>
            <div class="top-band"></div>
          </template>
        </div>
      </textarea>
    </template>
    <template #codeJs>
      <textarea rows="8">
        <!-- 如果页面有需要唤起商城APP使用m组件，引入 wq.360buyimg.com/js/common/dest/wq.imk.downloadAppPlugin.min.js,需要将m组件的js 放到TweenMax.min.js之后 -->
        <!-- 需在html文件里引入该js -->
        <script src="https://storage.jd.com/jrcommon/js/TweenMax.min.js"></script>
        mounted () {
          this.initAnimation()
        },
        methods: {
          remToPx (rem) { // rem换算px
            let fs = Number(document.querySelector('html').style.fontSize.slice(0, -2))
            return (rem * fs)
          },
          initAnimation () { // 初始化动画集合
            let _this = this
            // 火箭移动动画
            let tm1 = window.TweenMax.staggerFromTo('.top-num', 1, {
              y: _this.remToPx(5.9),
              opacity: 0
            }, {
              y: 0,
              opacity: 1,
              ease: window.Back.easeOut.config(2)
            }, 0.1)

            // 文字移动动画
            let tm2 = window.TweenMax.to('.top-num7', 2, {
              x: _this.remToPx(-0.05),
              y: _this.remToPx(0.2),
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            let tm3 = window.TweenMax.to('.top-num1', 2.5, {
              x: 0,
              y: _this.remToPx(-0.2),
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            let tm4 = window.TweenMax.to('.top-num8', 3, {
              x: _this.remToPx(0.05),
              y: _this.remToPx(-0.2),
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            // 推进动画
            let tm5 = window.TweenMax.to('.top-push', 1, {
              scaleX: 1.3,
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            // 超人动画
            let tm6 = window.TweenMax.fromTo('.top-superman1', 1, {
              x: _this.remToPx(-1.75),
              y: _this.remToPx(1.4),
              opacity: 0
            }, {
              x: 0,
              y: 0,
              opacity: 1,
              ease: window.Back.easeOut.config(2)
            })
            let tm7 = window.TweenMax.fromTo('.top-superman2', 1, {
              x: _this.remToPx(1.2),
              y: _this.remToPx(0.22),
              opacity: 0
            }, {
              x: 0,
              y: 0,
              opacity: 1,
              ease: window.Back.easeOut.config(2)
            })
            // 丝带动画
            let tm9 = window.TweenMax.fromTo('.top-band', 1, {
              x: _this.remToPx(1),
              opacity: 0,
              delay: 0
            }, {
              x: 0,
              opacity: 1,
              delay: 0,
              ease: window.Back.easeOut.config(2)
            })
            let tm10 = window.TweenMax.to('.top-band', 3, {
              x: _this.remToPx(-0.2),
              y: _this.remToPx(0.3),
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })

            // 持续repeat的动画没有完结态 所以注意时间轴层级
            let tl0 = new window.TimelineMax({ tweens: [tm1], onComplete: () => { } })
            let tl1 = new window.TimelineMax({ tweens: [tm2, tm3, tm4, tm5] })
            let tl2 = new window.TimelineMax({ tweens: [tm6, tm7, tm9] })
            let tl3 = new window.TimelineMax({ tweens: [tl2, tm10], align: 'sequence' })
            let tl4 = new window.TimelineMax({ tweens: [tl1, tl3] })
            let tlAll = new window.TimelineMax({ tweens: [tl0, tl4], align: 'sequence' })
            console.log(tlAll)
          }
        }
      </textarea>
    </template>
    <template #codeCss>
      <textarea rows="8">
        @mixin bg-base {
          background-repeat: no-repeat;
          -webkit-background-size: contain;
          background-size: contain;
        }
        .top-box {
          width: 7.5rem;
          height: 5.9rem;
          @include bg-base;
          background-image: url(https://storage.jd.com/19718main/top-bg3.png);
          position: relative;
          overflow: hidden;
        }
        .top-superman1 {
          position: absolute;
          top: 1.4rem;
          left: 0;
          width: 1.75rem;
          height: 1.29rem;
          @include bg-base;
          background-image: url(https://storage.jd.com/19718main/top-superman1.png);
          opacity: 0;
        }
        .top-superman2 {
          position: absolute;
          top: .22rem;
          right: 1.2rem;
          width: .94rem;
          height: .93rem;
          @include bg-base;
          background-image: url(https://storage.jd.com/19718main/top-superman2.png);
          opacity: 0;
        }
        .top-num {
          opacity: 0;
        }
        .top-num7 {
          position: absolute;
          top: .73rem;
          left: 1.5rem;
          width: 1.89rem;
          height: 2.85rem;
          @include bg-base;
          background-image: url(https://storage.jd.com/19718main/top-num7.png);
          .top-push {
            position: absolute;
            bottom: -1.35rem;
            left: -.4rem;
            width: 1.9rem;
            height: 1.65rem;
            @include bg-base;
            background-image: url(https://storage.jd.com/19718main/top-push2.png);
          }
        }
        .top-num1 {
          position: absolute;
          top: 1.4rem;
          left: 3rem;
          width: 1.34rem;
          height: 2.59rem;
          @include bg-base;
          background-image: url(https://storage.jd.com/19718main/top-num1.png);
          .top-push {
            position: absolute;
            bottom: -1.4rem;
            left: -.1rem;
            width: 1.9rem;
            height: 1.65rem;
            @include bg-base;
            background-image: url(https://storage.jd.com/19718main/top-push2.png);
          }
        }
        .top-num8 {
          position: absolute;
          top: .8rem;
          left: 4.35rem;
          width: 1.87rem;
          height: 3rem;
          @include bg-base;
          background-image: url(https://storage.jd.com/19718main/top-num8.png);
          .top-push {
            position: absolute;
            bottom: -1.4rem;
            left: 0;
            width: 1.9rem;
            height: 1.65rem;
            @include bg-base;
            background-image: url(https://storage.jd.com/19718main/top-push2.png);
          }
        }
        .top-band {
          z-index: 2;
          position: absolute;
          top: 1.03rem;
          left: 1.9rem;
          width: 5.59rem;
          height: 2.47rem;
          @include bg-base;
          background-image: url(https://storage.jd.com/19718main/top-band.png);
          opacity: 0;
        }
      </textarea>
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
    }
  },
  created () { },
  mounted () {
    this.changeStatus()
    this.initAnimation()
  },
  methods: {
    changeStatus () {
      this.initAnimation()
    },
    remToPx (rem) { // rem换算px
      let fs = Number(document.querySelector('html').style.fontSize.slice(0, -2))
      return (rem * fs)
    },
    initAnimation () { // 初始化动画集合
      let _this = this
      // 火箭移动动画
      let tm1 = window.TweenMax.staggerFromTo('.top-num', 1, {
        y: _this.remToPx(5.9),
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        ease: window.Back.easeOut.config(2)
      }, 0.1)

      // 文字移动动画
      let tm2 = window.TweenMax.to('.top-num7', 2, {
        x: _this.remToPx(-0.05),
        y: _this.remToPx(0.2),
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      let tm3 = window.TweenMax.to('.top-num1', 2.5, {
        x: 0,
        y: _this.remToPx(-0.2),
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      let tm4 = window.TweenMax.to('.top-num8', 3, {
        x: _this.remToPx(0.05),
        y: _this.remToPx(-0.2),
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      // 推进动画
      let tm5 = window.TweenMax.to('.top-push', 1, {
        scaleX: 1.3,
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      // 超人动画
      let tm6 = window.TweenMax.fromTo('.top-superman1', 1, {
        x: _this.remToPx(-1.75),
        y: _this.remToPx(1.4),
        opacity: 0
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: window.Back.easeOut.config(2)
      })
      let tm7 = window.TweenMax.fromTo('.top-superman2', 1, {
        x: _this.remToPx(1.2),
        y: _this.remToPx(0.22),
        opacity: 0
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: window.Back.easeOut.config(2)
      })
      // 丝带动画
      let tm9 = window.TweenMax.fromTo('.top-band', 1, {
        x: _this.remToPx(1),
        opacity: 0,
        delay: 0
      }, {
        x: 0,
        opacity: 1,
        delay: 0,
        ease: window.Back.easeOut.config(2)
      })
      let tm10 = window.TweenMax.to('.top-band', 3, {
        x: _this.remToPx(-0.2),
        y: _this.remToPx(0.3),
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })

      // 持续repeat的动画没有完结态 所以注意时间轴层级
      let tl0 = new window.TimelineMax({ tweens: [tm1], onComplete: () => { } })
      let tl1 = new window.TimelineMax({ tweens: [tm2, tm3, tm4, tm5] })
      let tl2 = new window.TimelineMax({ tweens: [tm6, tm7, tm9] })
      let tl3 = new window.TimelineMax({ tweens: [tl2, tm10], align: 'sequence' })
      let tl4 = new window.TimelineMax({ tweens: [tl1, tl3] })
      let tlAll = new window.TimelineMax({ tweens: [tl0, tl4], align: 'sequence' })
      console.log(tlAll)
    }
  }
}
</script>

<style lang='scss' scoped>
$r: 100;
@mixin bg-base {
  background-repeat: no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
}
.top-box {
  width: 7.5rem;
  height: 5.9rem;
  @include bg-base;
  background-image: url(https://storage.jd.com/19718main/top-bg3.png);
  position: relative;
  overflow: hidden;
}
.top-superman1 {
  position: absolute;
  top: 1.4rem;
  left: 0;
  width: 1.75rem;
  height: 1.29rem;
  @include bg-base;
  background-image: url(https://storage.jd.com/19718main/top-superman1.png);
  opacity: 0;
}
.top-superman2 {
  position: absolute;
  top: .22rem;
  right: 1.2rem;
  width: .94rem;
  height: .93rem;
  @include bg-base;
  background-image: url(https://storage.jd.com/19718main/top-superman2.png);
  opacity: 0;
}
.top-num {
  opacity: 0;
}
.top-num7 {
  position: absolute;
  top: .73rem;
  left: 1.5rem;
  width: 1.89rem;
  height: 2.85rem;
  @include bg-base;
  background-image: url(https://storage.jd.com/19718main/top-num7.png);
  .top-push {
    position: absolute;
    bottom: -1.35rem;
    left: -.4rem;
    width: 1.9rem;
    height: 1.65rem;
    @include bg-base;
    background-image: url(https://storage.jd.com/19718main/top-push2.png);
  }
}
.top-num1 {
  position: absolute;
  top: 1.4rem;
  left: 3rem;
  width: 1.34rem;
  height: 2.59rem;
  @include bg-base;
  background-image: url(https://storage.jd.com/19718main/top-num1.png);
  .top-push {
    position: absolute;
    bottom: -1.4rem;
    left: -.1rem;
    width: 1.9rem;
    height: 1.65rem;
    @include bg-base;
    background-image: url(https://storage.jd.com/19718main/top-push2.png);
  }
}
.top-num8 {
  position: absolute;
  top: .8rem;
  left: 4.35rem;
  width: 1.87rem;
  height: 3rem;
  @include bg-base;
  background-image: url(https://storage.jd.com/19718main/top-num8.png);
  .top-push {
    position: absolute;
    bottom: -1.4rem;
    left: 0;
    width: 1.9rem;
    height: 1.65rem;
    @include bg-base;
    background-image: url(https://storage.jd.com/19718main/top-push2.png);
  }
}
.top-band {
  z-index: 2;
  position: absolute;
  top: 1.03rem;
  left: 1.9rem;
  width: 5.59rem;
  height: 2.47rem;
  @include bg-base;
  background-image: url(https://storage.jd.com/19718main/top-band.png);
  opacity: 0;
}
</style>
