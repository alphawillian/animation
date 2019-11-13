<template>
  <layout>
    <template #desc>高速福袋项目 有流苏、汽车和扇子元素动画，如有流苏摆动、汽车前进，扇子扇动可以参考。</template>
    <template #changeStatus>
      <!-- <button class="animation-change" @click="changeStatus"></button> -->
    </template>
    <template #mainView>
      <div class="content-box-out">
        <div class="content-box">
          <img class="content-bg" src="https://storage.jd.com/fe-zx/gsfudai/container_bg.png" />
          <img class="money-right" src="https://storage.jd.com/fe-zx/gsfudai/money_left.png" />
          <img class="money-left" src="https://storage.jd.com/fe-zx/gsfudai/money_right.png" />
          <img class="car-bg" src="https://storage.jd.com/fe-zx/gsfudai/car.png" />
          <img class="fan-left" src="https://storage.jd.com/fe-zx/gsfudai/fan_left.png" />
          <img class="fan-right" src="https://storage.jd.com/fe-zx/gsfudai/fan_right.png" />
        </div>
      </div>
    </template>
    <template #codeHtml>
      <textarea rows="8">
        <div class="content-box-out">
          <div class="content-box">
            <img class="content-bg" src="https://storage.jd.com/fe-zx/gsfudai/container_bg.png" />
            <img class="money-right" src="https://storage.jd.com/fe-zx/gsfudai/money_left.png" />
            <img class="money-left" src="https://storage.jd.com/fe-zx/gsfudai/money_right.png" />
            <img class="car-bg" src="https://storage.jd.com/fe-zx/gsfudai/car.png" />
            <img class="fan-left" src="https://storage.jd.com/fe-zx/gsfudai/fan_left.png" />
            <img class="fan-right" src="https://storage.jd.com/fe-zx/gsfudai/fan_right.png" />
          </div>
        </div>
      </textarea>
    </template>
    <template #codeJs>
      <textarea rows="2">无</textarea>
    </template>
    <template #codeCss>
      <textarea rows="8">
        .content-box-out{
          background-image: url(https://storage.jd.com/fe-zx/gsfudai/body_bg.png);
          background-repeat: repeat-y;
          background-size: 100%;
          padding-bottom: 1rem;
        }
        .content-box {
          width: 100%;
          position: relative;
          .content-bg {
            width: 100%;
          }
          .money-right {
            z-index: 5;
            position: absolute;
            top: 3.5rem;
            right: .88rem;
            width: .62rem;
            height: 2.91rem;
            transform-origin: center top;
            animation: tassel 2s infinite;
          }
          .money-left {
            z-index: 5;
            position: absolute;
            top: 3.5rem;
            left: .88rem;
            width: .66rem;
            height: 2.84rem;
            transform-origin: center top;
            animation: tassel 2s infinite;
          }
          .car-bg {
            z-index: 5;
            margin: auto;
            position: absolute;
            bottom: -.7rem;
            left: 0;
            right: 0;
            width: 6.37rem;
            height: 5.29rem;
            animation: wobble .5s infinite;
          }
          .fan-left {
            z-index: 7;
            margin: auto;
            position: absolute;
            bottom: -.8rem;
            left: 0;
            width: 1.95rem;
            height: 3.12rem;
            transform-origin: left center;
            animation: fanleft 1s infinite;
          }
          .fan-right {
            z-index: 7;
            margin: auto;
            position: absolute;
            bottom: -.8rem;
            right: 0;
            width: 1.44rem;
            height: 3.12rem;
            transform-origin: right center;
            animation: fanright 1s infinite;
          }
        }
        @keyframes wobble {
          from {
            transform: translate3d(1%, 0, 0);
          }
          12.5% {
            transform: translate3d(.5%, -.5%, 0);
          }
          25% {
            transform: translate3d(0, -.5%, 0);
          }
          37.5% {
            transform: translate3d(-.5%, -.5%, 0);
          }
          50% {
            transform: translate3d(-1%, 0, 0);
          }
          62.5% {
            transform: translate3d(-.5%, .5%, 0);
          }
          75% {
            transform: translate3d(0, .5%, 0);
          }
          87.5% {
            transform: translate3d(.5%, .5%, 0);
          }
          100% {
            transform: translate3d(1%, 0, 0);
          }
        }

        @keyframes fanleft {
          0% {
            transform: rotate3d(0,0,0,0);
          }
          25% {
            transform: rotate3d(1,1,0,45deg);
          }
          50% {
            transform: rotate3d(0,0,0,0);
          }
          75% {
            transform: rotate3d(-1,-1,0,45deg);
          }
          100% {
            transform: rotate3d(0,0,0,0);
          }
        }
        @keyframes fanright {
          0% {
            transform: rotate3d(0,0,0,0);
          }
          25% {
            transform: rotate3d(1,-1,0,45deg);
          }
          50% {
            transform: rotate3d(0,0,0,0);
          }
          75% {
            transform: rotate3d(-1,1,0,45deg);
          }
          100% {
            transform: rotate3d(0,0,0,0);
          }
        }

        @keyframes tassel {
          from {
            transform: rotate3d(0,0,1,1deg);
          }
          50% {
            transform: rotate3d(0,0,1,-1deg);
          }
          100% {
            transform: rotate3d(0,0,1,1deg);
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
textarea{
  margin-top: 4px;
  background-color: #23241f;
  border-radius: 4px;
  color: #66d9ef;
  width: 100%;
}
.content-box-out{
  background-image: url(https://storage.jd.com/fe-zx/gsfudai/body_bg.png);
  background-repeat: repeat-y;
  background-size: 100%;
  padding-bottom: 1rem;
}
.content-box {
  width: 100%;
  position: relative;
  .content-bg {
    width: 100%;
  }
  .money-right {
    z-index: 5;
    position: absolute;
    top: 3.5rem;
    right: .88rem;
    width: .62rem;
    height: 2.91rem;
    transform-origin: center top;
    animation: tassel 2s infinite;
  }
  .money-left {
    z-index: 5;
    position: absolute;
    top: 3.5rem;
    left: .88rem;
    width: .66rem;
    height: 2.84rem;
    transform-origin: center top;
    animation: tassel 2s infinite;
  }
  .car-bg {
    z-index: 5;
    margin: auto;
    position: absolute;
    bottom: -.7rem;
    left: 0;
    right: 0;
    width: 6.37rem;
    height: 5.29rem;
    animation: wobble .5s infinite;
  }
  .fan-left {
    z-index: 7;
    margin: auto;
    position: absolute;
    bottom: -.8rem;
    left: 0;
    width: 1.95rem;
    height: 3.12rem;
    transform-origin: left center;
    animation: fanleft 1s infinite;
  }
  .fan-right {
    z-index: 7;
    margin: auto;
    position: absolute;
    bottom: -.8rem;
    right: 0;
    width: 1.44rem;
    height: 3.12rem;
    transform-origin: right center;
    animation: fanright 1s infinite;
  }
}
@keyframes wobble {
  from {
    transform: translate3d(1%, 0, 0);
  }
  12.5% {
    transform: translate3d(.5%, -.5%, 0);
  }
  25% {
    transform: translate3d(0, -.5%, 0);
  }
  37.5% {
    transform: translate3d(-.5%, -.5%, 0);
  }
  50% {
    transform: translate3d(-1%, 0, 0);
  }
  62.5% {
    transform: translate3d(-.5%, .5%, 0);
  }
  75% {
    transform: translate3d(0, .5%, 0);
  }
  87.5% {
    transform: translate3d(.5%, .5%, 0);
  }
  100% {
    transform: translate3d(1%, 0, 0);
  }
}

@keyframes fanleft {
  0% {
    transform: rotate3d(0,0,0,0);
  }
  25% {
    transform: rotate3d(1,1,0,45deg);
  }
  50% {
    transform: rotate3d(0,0,0,0);
  }
  75% {
    transform: rotate3d(-1,-1,0,45deg);
  }
  100% {
    transform: rotate3d(0,0,0,0);
  }
}
@keyframes fanright {
  0% {
    transform: rotate3d(0,0,0,0);
  }
  25% {
    transform: rotate3d(1,-1,0,45deg);
  }
  50% {
    transform: rotate3d(0,0,0,0);
  }
  75% {
    transform: rotate3d(-1,1,0,45deg);
  }
  100% {
    transform: rotate3d(0,0,0,0);
  }
}

@keyframes tassel {
  from {
    transform: rotate3d(0,0,1,1deg);
  }
  50% {
    transform: rotate3d(0,0,1,-1deg);
  }
  100% {
    transform: rotate3d(0,0,1,1deg);
  }
}
</style>
