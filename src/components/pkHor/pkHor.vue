<template>
  <layout>
    <template #desc>两张卡片水平方向相向移动</template>
    <template #changeStatus>
      <button class="animation-change" @click="changeStatus"></button>
    </template>
    <template #mainView>
      <div class="match-block">
        <div class="matched">
          <div :class="['team', {'start-pk' : startPk}] ">
            <span class="team-blue team-item"></span>
            <span class="team-red team-item"></span>
            <i class="vs"></i>
          </div>
        </div>
      </div>
    </template>
    <template #codeHtml>
      <textarea rows="8">
        <div class="match-block">
          <div class="matched">
            <div :class="['team', {'start-pk' : startPk}] ">
              <span class="team-blue team-item"></span>
              <span class="team-red team-item"></span>
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
        height: 590rem/$r;
        background: white;
        border-top-left-radius: 66rem/$r;
        border-top-right-radius: 66rem/$r;
        border-bottom-left-radius: 14rem/$r;
        border-bottom-right-radius: 14rem/$r;
        padding: 55rem/$r 0rem/$r 40rem/$r 0rem/$r;
        margin: 0 auto;
        // 匹配完成
        .matched{
          position: relative;
          .team{
            width: 100%;
            height: 445rem/$r;
            position: relative;
            &.start-pk{
              .team-blue{
                animation: vsBlueAnimation 0.5s ease-in 0.5s forwards;
              }
              .team-red{
                animation: vsRedAnimation 0.5s ease-in 0.5s forwards;
              }
            }
            .team-blue{
              display: inline-block;
              width: 367rem/$r;
              height: 461rem/$r;
              padding-right: 30rem/$r;
              background-image: url('//storage.jd.com/1911joy/images/bg_team_blue.png');
              background-size: 100% 100%;
              position: absolute;
              left: -500rem/$r;
              opacity: 0;
            }
            .team-red{
              display: inline-block;
              width: 366rem/$r;
              height: 461rem/$r;
              padding-left: 10rem/$r;
              background-image: url('//storage.jd.com/1911joy/images/bg_team_red.png');
              background-size: 100% 100%;
              position: absolute;
              right: -500rem/$r;
              opacity: 0;
            }
            .vs{
              display: inline-block;
              width: 167rem/$r;
              height: 122rem/$r;
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
      @keyframes vsBlueAnimation {
        from{
          opacity: 0;
          left: -500rem/$r;
        }
        75%{
          opacity: 0.9;
          left: 120rem/$r;
        }
        to{
          opacity: 1;
          left: 10rem/$r;
        }
      }
      @keyframes vsRedAnimation {
        from{
          opacity: 0;
          right: -500rem/$r;
        }
        75%{
          opacity: 0.9;
          right: 120rem/$r;
        }
        to{
          opacity: 1;
          right: 0rem/$r;
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
  padding: 20rem/$r 0rem/$r 10rem/$r 0rem/$r;
  margin: 0 auto;
  // 匹配完成
  .matched{
    position: relative;
    .team{
      width: 100%;
      height: 445rem/$r;
      position: relative;
      &.start-pk{
        .team-blue{
          animation: vsBlueAnimation 0.5s ease-in 0.5s forwards;
        }
        .team-red{
          animation: vsRedAnimation 0.5s ease-in 0.5s forwards;
        }
      }
      .team-blue{
        display: inline-block;
        width: 367rem/$r;
        height: 461rem/$r;
        padding-right: 30rem/$r;
        background-image: url('//storage.jd.com/1911joy/images/bg_team_blue.png');
        background-size: 100% 100%;
        position: absolute;
        left: -500rem/$r;
        opacity: 0;
      }
      .team-red{
        display: inline-block;
        width: 366rem/$r;
        height: 461rem/$r;
        padding-left: 10rem/$r;
        background-image: url('//storage.jd.com/1911joy/images/bg_team_red.png');
        background-size: 100% 100%;
        position: absolute;
        right: -500rem/$r;
        opacity: 0;
      }
      .vs{
        display: inline-block;
        width: 167rem/$r;
        height: 122rem/$r;
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
@keyframes vsBlueAnimation {
  from{
    opacity: 0;
    left: -500rem/$r;
  }
  75%{
    opacity: 0.9;
    left: 120rem/$r;
  }
  to{
    opacity: 1;
    left: 10rem/$r;
  }
}
@keyframes vsRedAnimation {
  from{
    opacity: 0;
    right: -500rem/$r;
  }
  75%{
    opacity: 0.9;
    right: 120rem/$r;
  }
  to{
    opacity: 1;
    right: 0rem/$r;
  }
}
</style>
