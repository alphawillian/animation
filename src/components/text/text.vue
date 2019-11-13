<template>
  <layout>
    <template #desc>文字的动画效果</template>
    <template #changeStatus>
      <button class="animation-change" @click="changeStatus"></button>
    </template>
    <template #mainView>
      <div class="list-box">
        <div class="style-item style3">
          <h2>3d text</h2>
          <h2>animated</h2>
        </div>
        <div class="style-item">
          <p class="line1 titleTxt">交行亿通行联名卡</p>
          <p class="line2 titleTxt">每月乘地铁最高省100元</p>
        </div>
        <div class="style-item">
          <p class="cardTxt">办理交行亿通行联名卡</p>
        </div>
      </div>
    </template>
    <template #codeHtml>
      <textarea rows="8">
        <div class="list-box">
          <div class="style-item style3">
            <h2>3d text</h2>
            <h2>animated</h2>
          </div>
          <div class="style-item">
            <p class="line1 titleTxt">交行亿通行联名卡</p>
            <p class="line2 titleTxt">每月乘地铁最高省100元</p>
          </div>
          <div class="style-item">
            <p class="cardTxt">办理交行亿通行联名卡</p>
          </div>
        </div>
      </textarea>
    </template>
    <template #codeJs>
      <textarea rows="8">
        mounted () {
          this.initAnimation()
        },
        methods: {
          initAnimation () {
            /* eslint-disable */
            let tagline = new SplitText('.titleTxt')
            let tl = new TimelineLite({ onUpdate: 0 })
            tl.staggerFrom(tagline.chars, 0.3, { opacity: 0, rotation: 90, scale: 0, x: 20, y: 60, ease: Back.easeOut }, 0.1)

            let $text = $('.cardTxt')
            let tl2 = new TimelineLite({ onUpdate: 0 })
            $text.html('<span class="cardTxtItem">' + $text.html().split('').join('</span><span class="cardTxtItem">').split('<span> </span>').join('<span class="cardTxtItem"> </span>') + '</span>')
            TweenLite.set($text, { perspective: 500 })
            tl2.staggerTo($('.cardTxt span'), 4, { transformOrigin: '50% 50% -30px', rotationY: -360, rotationX: 360, rotation: 360, ease: Elastic.easeInOut }, 0.02)

            let tl3 = new TimelineMax({ repeat: 1, repeatDelay: 1, yoyo: true });
            tl3.staggerTo(".style3 h2", 0.2, { className: "+=superShadow", top: "-=10px", ease: Power1.easeIn }, "0.3", "start")
            /* eslint-enable */
          }
        }
      </textarea>
    </template>
    <template #codeCss>
      <textarea rows="8">
        .list-box{
          background-color: black;
          color: white;
          font-size: 38rem/$r;
          padding: 20rem/$r 0;
        }
        .style-item{
          text-align: center; 
          margin-top: 20rem/$r;
          p{
            text-align: center;
            font-size: 24px;
          }
          .cardTxt{
            /deep/ span{
              position:relative;
              display:inline-block;
            }
          }
          &.style3{
            h2{
              font-size: 60px;
            }
          }
          .superShadow {
            text-shadow:     
              0 1px 0 hsl(174,5%,80%),
              0 2px 0 hsl(174,5%,75%),
              0 3px 0 hsl(174,5%,70%),
              0 4px 0 hsl(174,5%,66%),
              0 5px 0 hsl(174,5%,64%),
              0 6px 0 hsl(174,5%,62%),
              0 7px 0 hsl(174,5%,61%),
              0 8px 0 hsl(174,5%,60%),

              0 0 5px rgba(0,0,0,.05),
              0 1px 3px rgba(0,0,0,.2),
              0 3px 5px rgba(0,0,0,.2),
              0 5px 10px rgba(0,0,0,.2),
              0 10px 10px rgba(0,0,0,.2),
              0 20px 20px rgba(0,0,0,.3);
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
      showStyle2: true
    }
  },
  created () { },
  mounted () {
    // this.changeStatus()
  },
  methods: {
    changeStatus () {
      let $style1Line1 = $('.titleTxt.line1')
      let $style1Line2 = $('.titleTxt.line2')
      let $style2Line1 = $('.cardTxt')
      $style1Line1.html('交行亿通行联名卡')
      $style1Line2.html('每月乘地铁最高省100元')
      $style2Line1.html('办理交行亿通行联名卡')
      setTimeout(() => {
        this.initAnimation()
      }, 400)
    },
    initAnimation () {
      /* eslint-disable */
      let tagline = new SplitText('.titleTxt')
      let tl = new TimelineLite({ onUpdate: 0 })
      tl.staggerFrom(tagline.chars, 0.3, { opacity: 0, rotation: 90, scale: 0, x: 20, y: 60, ease: Back.easeOut }, 0.1)

      let $text = $('.cardTxt')
      let tl2 = new TimelineLite({ onUpdate: 0 })
      $text.html('<span class="cardTxtItem">' + $text.html().split('').join('</span><span class="cardTxtItem">').split('<span> </span>').join('<span class="cardTxtItem">&nbsp;</span>') + '</span>')
      TweenLite.set($text, { perspective: 500 })
      tl2.staggerTo($('.cardTxt span'), 4, { transformOrigin: '50% 50% -30px', rotationY: -360, rotationX: 360, rotation: 360, ease: Elastic.easeInOut }, 0.02)

      let tl3 = new TimelineMax({ repeat: 1, repeatDelay: 1, yoyo: true });
      tl3.staggerTo(".style3 h2", 0.2, { className: "+=superShadow", top: "-=10px", ease: Power1.easeIn }, "0.3", "start")
      /* eslint-enable */
    }
  }
}
</script>

<style lang='scss' scoped>
$r: 100;
.list-box{
  background-color: black;
  color: white;
  font-size: 38rem/$r;
  padding: 20rem/$r 0;
}
.style-item{
  text-align: center;
  margin-top: 20rem/$r;
  p{
    text-align: center;
    font-size: 24px;
  }
  .cardTxt{
    /deep/ span{
      position:relative;
      display:inline-block;
    }
  }
  &.style3{
    h2{
      font-size: 60px;
    }
  }
  .superShadow {
    text-shadow:     
      0 1px 0 hsl(174,5%,80%),
      0 2px 0 hsl(174,5%,75%),
      0 3px 0 hsl(174,5%,70%),
      0 4px 0 hsl(174,5%,66%),
      0 5px 0 hsl(174,5%,64%),
      0 6px 0 hsl(174,5%,62%),
      0 7px 0 hsl(174,5%,61%),
      0 8px 0 hsl(174,5%,60%),

      0 0 5px rgba(0,0,0,.05),
      0 1px 3px rgba(0,0,0,.2),
      0 3px 5px rgba(0,0,0,.2),
      0 5px 10px rgba(0,0,0,.2),
      0 10px 10px rgba(0,0,0,.2),
      0 20px 20px rgba(0,0,0,.3);
  }
}

</style>
