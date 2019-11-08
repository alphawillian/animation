<template>
  <div class="dialog" v-show="isShow" @touchmove.prevent>
    <div :class="['dialog-in', {'shrink' : !isContentShow}]">
      <i class="close" @click="close"></i>
      <div class="content rule">
        <p class="title myfont">活动规则</p>
        <div class="list-box">
          <ul class="list">
            <li class="item" v-for="(item, index) in ruleList" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  components: {},
  data () {
    return {
      lastTop: 0,
      isShow: false,
      isContentShow: false, // 内容区展示
      animationTime: 400 // 动画延时
    }
  },
  props: {
    ruleList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created () { },
  mounted () { },
  methods: {
    // 弹窗的显示
    show () {
      this.isShow = true
      this.isContentShow = true
      this.$nextTick(() => {
        this.ruleScrollInit()
      })
    },
    // 弹窗的关闭
    close () {
      this.isContentShow = false
      setTimeout(() => {
        this.isShow = false
      }, this.animationTime)
    },
    // 规则弹框滚动初始化
    ruleScrollInit () {
      console.log('scrollrule')
      let wrapper = document.querySelector('.list-box')
      let scroll = new BScroll(wrapper)
      console.log(scroll)
    }
  }
}
</script>

<style lang='scss' scoped>
$r:50;
.dialog {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  font-size: 12rem/$r;
  .dialog-in{
    display: inline-block;
    width: 300rem/$r;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: normal 0.4s forwards;
    &.shrink{
      animation: shrink 0.4s forwards;
    }
    .close{
      display: inline-block;
      width: 25rem/$r;
      height: 25rem/$r;
      background-image: url('//storage.360buyimg.com/commons/close-btn.png');
      background-size: 100% 100%;
      position: absolute;
      top: 4rem/$r;
      right: 4rem/$r;
      z-index: 10;
    }
    .content{
      box-sizing: border-box;
      position: relative;
      width: 100%;
      min-height: 225rem/$r;
      background: white;
      padding: 0 10rem/$r 35rem/$r 10rem/$r;
      border-radius: 6rem/$r;
      text-align: center;
    }
  }
  // 
  .content{
    // 活动规则
    &.rule{
      padding: 0 20rem/$r;
      padding-bottom: 20rem/$r;
      .title{
        font-size: 16rem/$r;
        color: #333;
        padding: 10rem/$r 0 10rem/$r 0;
        margin: 0;
      }
      .list-box{
        min-height: 40vh;
        max-height: 55vh;
        overflow: hidden;
      }
      .list{
        text-align: left;
        .item{
          font-size: 12rem/$r;
          color: #666;
          line-height: 1.3;
        }
      }
    }
  }
}
@keyframes normal
{
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes shrink
{
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    transform: translate(-50%, -50%) scale(0);
  }
}

</style>
