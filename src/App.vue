<template>
  <main class="container">
    <div class="img-line">
      <img src="http://storage.jd.com/jrcommon/images/img_joy_lost.png" alt="迷路了" />
    </div>
    <p>页面飞到外太空了~</p>
    <button @click="goHref">参与其他活动</button>
  </main>
</template>

<script>
// import loading from './components/fullLoading/index.js'
// import Fetoast from './components/toast'
import { getParams } from '@jdpay/jdpay_utils'

export default {
  data () {
    return {
      sourceData: window.data_source_100002466, // 配置数据
      shareObj: {}, // 分享的文案 
      mainObj: {}
    }
  },
  created () { },
  mounted () {
    this.handleSourceData()
    window.JPTrack.emit('enterpage')
  },
  filters: {
  },
  watch: {},
  methods: {
    // 处理配置平台的数据
    handleSourceData () {
      this.setTitle()
      this.judgeTime()
      this.setShare()
    },
    goHref () {
      let url = 'https://m.jd.com/'
      let sourceUrl = this.sourceData.primaryPage.activityUrl
      if (getParams('go')) {
        url = getParams('go')
      } else if (sourceUrl) {
        url = sourceUrl
      }
      window.JPTrack.emit(['activity'], url)
    },
    // 设置页面title
    setTitle () {
      document.title = this.sourceData.pageTitle || '出行券看板'
      document.querySelector('title').innerText = this.sourceData.pageTitle || '出行券看板'
    },
    // 页面是否上线下
    judgeTime () {
      const timeNow = new Date().getTime()
      const timeInfo = this.sourceData.pageTime || {}
      const onlineDate = timeInfo.onlineDate
      const onlineLink = timeInfo.onlineLink
      const offlineDate = timeInfo.offlineDate
      const offlineLink = timeInfo.offlineLink
      if (onlineDate && onlineLink) {
        const timeStart = new Date(onlineDate).getTime()
        if (timeStart > timeNow) {
          console.log('未上线')
          location.href = onlineLink + '&timeLine=' + onlineDate
          return false
        }
      }
      if (offlineDate && offlineLink) {
        const timeEnd = new Date(offlineDate).getTime()
        if (timeEnd < timeNow) {
          console.log('已下线')
          location.href = offlineLink
          return false
        }
      }
    },
    // 设置分享
    setShare () {
      // eslint-disable-next-line
      const shareData = this.sourceData.share
      const optObj = {
        share_title: shareData.title, // 分享标题
        share_subtitle: shareData.desc, // 分享描述
        share_url: shareData.shareUrl || location.href, // 分享链接
        share_img: shareData.logo // 分享图标
      }
      // eslint-disable-next-line
      easyShareObj.setShare(optObj)
    }
  }

}
</script>

<style lang="scss" scoped>
$r:100;
.container {
  margin: 0 auto;
  width: 7.5rem;
  min-height: 100vh;
  background-color: whtie;
  position: relative;
  padding-top: 370rem/$r;
  text-align: center;
  text-align: center;
  .img-line{
    img{
      width: 269rem/$r;
      height: 254rem/$r;
    }
  }
  p{
    font-size: 26rem/$r;
    color: #212121;
    margin: 46rem/$r 0;
  }
  button{
    display: inline-block;
    width: 270rem/$r;
    height: 80rem/$r;
    border-radius: 40rem/$r;
    background-color: #df2317;
    font-size: 30rem/$r;
    letter-spacing: 1px;
    color: white;
  }
  

}

</style>
