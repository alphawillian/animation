<template>
  <layout>
    <template #desc>两张卡片竖直方向相向移动</template>
    <template #changeStatus>
      <button class="animation-change" @click="changeStatus"></button>
    </template>
    <template #mainView>
      <div class="match-block">
        <div class="matching">
          <div :class="['team', {'start-pk' : startPk}] ">
            <span class="team-blue"></span>
            <span class="team-red"></span>
            <i class="vs"></i>
          </div>
        </div>
      </div>
    </template>
    <template #codeHtml>
      <textarea rows="8">
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
    </template>
    <template #codeJs>
      <textarea rows="8">
        data () {
          return {
            startPk: false
          }
        },
        methods: {
          changeStatus () {
            this.startPk = false
            setTimeout(() => {
              this.startPk = true
            }, 300)
          }
        }
      </textarea>
    </template>
    <template #codeCss>
      <textarea rows="8">
      $r: 100;
      .match-block{
        width: 660rem/$r;
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
textarea{
  margin-top: 4px;
  background-color: #23241f;
  border-radius: 4px;
  color: #66d9ef;
  width: 100%;
}
.match-block{
  width: 660rem/$r;
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
