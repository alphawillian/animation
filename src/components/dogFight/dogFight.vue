<template>
  <layout>
    <template #desc>瓜分百万奖金项目的团队PK匹配时的 入场动画和匹配动画。</template>
    <template #changeStatus>
      <button class="animation-change" @click="changeStatus"></button>
    </template>
    <template #mainView>
      <div class="animation-line">
        <div
          :class="['dog-line', {'teamStatus0': teamStatus === 0}, {'teamStatus-1': teamStatus === -1}, {'teamStatus1': teamStatus === 1}]"
        >
          <img class="vs" src="//storage.jd.com/19million/images/img_vs.png" />
          <img class="dog1" src="//storage.jd.com/19million/images/img_dog1.png" />
          <img class="dog2" src="//storage.jd.com/19million/images/img_dog2.png" />
        </div>
      </div>
    </template>
    <template #codeHtml>
      <textarea rows="8">
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
    </template>
    <template #codeJs>
      <textarea rows="8">
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
    </template>
    <template #codeCss>
      <textarea rows="8">
        .animation-line{
          position: relative;
          width: 100%;
          height: 350rem/$r;
          text-align: center;
        }
        .dog-line{
          width: 100%;
          height: 298rem/$r;
          position: relative;
          .dog1{
            width: 246rem/$r;
            height: 298rem/$r;
            position: absolute;
            left: 100rem/$r;
            bottom: 20rem/$r;
            z-index: 10;
            animation: dog1Animation 3s forwards;
          }
          .dog2{
            width: 263rem/$r;
            height: 259rem/$r;
            position: absolute;
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
      teamStatus: 0
    }
  },
  created () { },
  mounted () {
    // this.changeStatus()
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
}
</script>

<style lang='scss' scoped>
$r: 100;
.animation-line{
  position: relative;
  width: 100%;
  height: 350rem/$r;
  text-align: center;
}
.dog-line{
  width: 100%;
  height: 298rem/$r;
  position: relative;
  .dog1{
    width: 246rem/$r;
    height: 298rem/$r;
    position: absolute;
    left: 100rem/$r;
    bottom: 20rem/$r;
    z-index: 10;
    animation: dog1Animation 3s forwards;
  }
  .dog2{
    width: 263rem/$r;
    height: 259rem/$r;
    position: absolute;
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
