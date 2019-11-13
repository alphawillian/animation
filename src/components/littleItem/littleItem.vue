<template>
  <layout>
    <template #desc>小装饰动画，有小人招手，火箭等，有类似需求可以参考:</template>
    <template #changeStatus>
      <!-- <button class="animation-change" @click="changeStatus"></button> -->
    </template>
    <template #mainView>
      <div class="list-box">
        <div class="ren-box">
          <div class="star-head"></div>
          <div class="star-arm"></div>
          <div class="star-body"></div>
        </div>
        <div class="rocket-box">
          <img src="//storage.jd.com/1911joy/images/img_rocket_fire.png" class="rocket-fire1" />
          <img src="//storage.jd.com/1911joy/images/img_rocket_body.png" class="rocket-body1" />
        </div>
      </div>
    </template>
    <template #codeHtml>
      <textarea rows="8">
        <div class="ren-box">
          <div class="star-head"></div>
          <div class="star-arm"></div>
          <div class="star-body"></div>
        </div>
        <div class="rocket-box">
          <img src="//storage.jd.com/1911joy/images/img_rocket_fire.png" class="rocket-fire1" />
          <img src="//storage.jd.com/1911joy/images/img_rocket_body.png" class="rocket-body1" />
        </div>
      </textarea>
    </template>
    <template #codeJs>
      <textarea rows="8">
        mounted () {
          this.changeStatus()
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
            // 明星头动画
            let tm12 = window.TweenMax.to('.star-head', 0.5, {
              transformOrigin: 'center bottom',
              rotationZ: 20,
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            // 明星手动画
            let tm13 = window.TweenMax.to('.star-arm', 0.5, {
              transformOrigin: 'left center',
              rotationZ: 10,
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            // 持续repeat的动画没有完结态 所以注意时间轴层级
            let tlStar = new window.TimelineMax({ tweens: [tm12, tm13] })
            console.log(tlStar)

            // 火箭动画
            let rocket = window.TweenMax.to('.rocket-box', 2, {
              x: _this.remToPx(-0.1),
              y: _this.remToPx(0.25),
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            // 火焰动画
            let fire = window.TweenMax.to('.rocket-fire1', 1, {
              scaleX: 1.3,
              repeat: -1,
              yoyo: true,
              ease: window.Power1.easeInOut
            })
            console.log(rocket, fire)
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
        .list-box{
          width: 100%;
          max-width: 750rem/$r;
          height: 300rem/$r;
          position: relative;
          background-color: white;
        }
        .ren-box {
          display: inline-block;
          position: relative;
          top: 0;
          left: .2rem;
          width: 2rem;
          height: 2.5rem;
          .star-head {
            z-index: 3;
            position: absolute;
            bottom: 1.37rem;
            left: 0.17rem;
            width: .78rem;
            height: .98rem;
            @include bg-base;
            background-image: url(https://storage.jd.com/19718main/star-head.png);
          }
          .star-arm {
            z-index: 1;
            position: absolute;
            bottom: 0.78rem;
            left: 0.8rem;
            width: .91rem;
            height: .49rem;
            @include bg-base;
            background-image: url(https://storage.jd.com/19718main/star-arm.png);
            transform: rotate3d(0,0,1,-20deg);
            transform-origin: left center;
          }
          .star-body {
            z-index: 2;
            position: absolute;
            bottom: 0;
            left: 0.1rem;
            width: .83rem;
            height: 1.47rem;
            @include bg-base;
            background-image: url(https://storage.jd.com/19718main/star-body.png);
          }
        }
        .rocket-box{
          position: relative;
          display: inline-block;
          width: 48rem/$r;
          height: 84rem/$r;
          .rocket-body1{
            width: 48rem/$r;
            height: 57rem/$r;
            position: absolute;
            top: 0rem/$r;
            left: 0rem/$r;
          }
          .rocket-fire1{
            width: 25rem/$r;
            height: 57rem/$r;
            position: absolute;
            bottom: 0rem/$r;
            left: 12rem/$r;
          }
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
      // 明星头动画
      let tm12 = window.TweenMax.to('.star-head', 0.5, {
        transformOrigin: 'center bottom',
        rotationZ: 20,
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      // 明星手动画
      let tm13 = window.TweenMax.to('.star-arm', 0.5, {
        transformOrigin: 'left center',
        rotationZ: 10,
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      // 持续repeat的动画没有完结态 所以注意时间轴层级
      let tlStar = new window.TimelineMax({ tweens: [tm12, tm13] })
      console.log(tlStar)

      // 火箭动画
      let rocket = window.TweenMax.to('.rocket-box', 2, {
        x: _this.remToPx(-0.1),
        y: _this.remToPx(0.25),
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      // 火焰动画
      let fire = window.TweenMax.to('.rocket-fire1', 1, {
        scaleX: 1.3,
        repeat: -1,
        yoyo: true,
        ease: window.Power1.easeInOut
      })
      console.log(rocket, fire)
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
.list-box{
  width: 100%;
  max-width: 750rem/$r;
  height: 300rem/$r;
  position: relative;
  background-color: white;
}
.ren-box {
  display: inline-block;
  position: relative;
  top: 0;
  left: .2rem;
  width: 2rem;
  height: 2.5rem;
  .star-head {
    z-index: 3;
    position: absolute;
    bottom: 1.37rem;
    left: 0.17rem;
    width: .78rem;
    height: .98rem;
    @include bg-base;
    background-image: url(https://storage.jd.com/19718main/star-head.png);
  }
  .star-arm {
    z-index: 1;
    position: absolute;
    bottom: 0.78rem;
    left: 0.8rem;
    width: .91rem;
    height: .49rem;
    @include bg-base;
    background-image: url(https://storage.jd.com/19718main/star-arm.png);
    transform: rotate3d(0,0,1,-20deg);
    transform-origin: left center;
  }
  .star-body {
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0.1rem;
    width: .83rem;
    height: 1.47rem;
    @include bg-base;
    background-image: url(https://storage.jd.com/19718main/star-body.png);
  }
}
.rocket-box{
  position: relative;
  display: inline-block;
  width: 48rem/$r;
  height: 84rem/$r;
  .rocket-body1{
    width: 48rem/$r;
    height: 57rem/$r;
    position: absolute;
    top: 0rem/$r;
    left: 0rem/$r;
  }
  .rocket-fire1{
    width: 25rem/$r;
    height: 57rem/$r;
    position: absolute;
    bottom: 0rem/$r;
    left: 12rem/$r;
  }
}
</style>
