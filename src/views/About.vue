<template>
  <div class="about">
    <swiper
      @mouseenter.native='enterSwiper'
      @mouseleave.native='leaveSwiper'
      class="swiper"
      ref="mySwiper"
      :options="swiperOptions">
      <swiper-slide
        class="swiper-slide"
        v-for="item in dealData"
        :key="item.a">
        <div
          v-for="res in item"
          :key='res.saveUrl'
          class="video-p">
          <video
            :key='res.saveUrl'
            class="res"
            style="width: 100%;height: 100%;"
            :data-src="res.saveUrl"
            poster="../assets/logo.png"
            controls
          >
          <!-- {{res.saveUrl}}   -->
          </video>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: [],
  data () {
    return {
      data: [
        {
          'comment_count': '2',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200416/6815977805591940356.mp4',
          'create_time': '1586968525000',
          'user_id': '63185304394',
          'nickname': '欣杨小同学\uD83C\uDF52',
          'item_name': '其他人员',
          'douyinhao': '36547415',
          'video_id': '6815977805591940356',
          'video_desc': '#宠物 #猫咪 #萌宠 为什么会有这么可爱的小猫咪❤️@抖音小助手'
        },
        {
          'comment_count': '2',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200415/6815770529086164239.mp4',
          'create_time': '1586920242000',
          'user_id': '68490068174',
          'nickname': 'Raxide_',
          'douyinhao': '71574517',
          'video_id': '6815770529086164239',
          'video_desc': '#冒个泡泡 #好听的音乐'
        },
        {
          'comment_count': '39',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200415/6815517965811879181.mp4',
          'create_time': '1586861443000',
          'user_id': '69570649779',
          'nickname': '暮色の年华',
          'douyinhao': '76582808',
          'video_id': '6815517965811879181',
          'video_desc': '曾经我也是铁路上的一名职工，因为发了一点意外，让我脱下了这件衣服，如果没有发生意外，也许我现在还在铁路上工作。'
        },
        {
          'comment_count': '0',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200415/6815471703204859136.mp4',
          'create_time': '1586850666000',
          'user_id': '70951400789',
          'nickname': '米可爱',
          'douyinhao': '84017420',
          'video_id': '6815471703204859136',
          'video_desc': '我的小暖男这么小就开始关心妈妈了、只要你在妈妈的病也很快就好起来的\uD83D\uDE18\uD83D\uDE18❤️'
        },
        {
          'comment_count': '0',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200414/6815465943586721038.mp4',
          'create_time': '1586849332000',
          'user_id': '72703809275',
          'nickname': '故里。',
          'douyinhao': '1751901141',
          'video_id': '6815465943586721038',
          'video_desc': '所有的心酸难过委屈，到最后都会变成一个嗯字。'
        },
        {
          'comment_count': '0',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200414/6815458704716991751.mp4',
          'create_time': '1586847640000',
          'user_id': '103535846194',
          'nickname': '1501802830',
          'douyinhao': '1669612789',
          'video_id': '6815458704716991751',
          'video_desc': ''
        },
        {
          'comment_count': '2',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200414/6815163078523555087.mp4',
          'create_time': '1586778808000',
          'user_id': '106547902683',
          'nickname': '用户9715789514140',
          'douyinhao': '2086099780',
          'video_id': '6815163078523555087',
          'video_desc': '我也来一个\uD83D\uDE02\uD83D\uDE02\uD83D\uDE02'
        },
        {
          'comment_count': '3',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200413/6815090601785134340.mp4',
          'create_time': '1586761939000',
          'user_id': '63185304394',
          'nickname': '欣杨小同学\uD83C\uDF52',
          'item_name': '其他人员',
          'douyinhao': '36547415',
          'video_id': '6815090601785134340',
          'video_desc': '#mugshot 我尽力了\uD83D\uDE43'
        },
        {
          'comment_count': '0',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200412/6814502821417733383.mp4',
          'create_time': '1586625091000',
          'user_id': '100415291786',
          'nickname': '\uD83D\uDC57么么哒H\uD83D\uDC60',
          'douyinhao': '1070598062',
          'video_id': '6814502821417733383',
          'video_desc': '\uD83D\uDC95'
        },
        {
          'comment_count': '1',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200411/6814332334364577037.mp4',
          'create_time': '1586585386000',
          'user_id': '93824062919',
          'nickname': '恩恩&格格',
          'douyinhao': '815849581',
          'video_id': '6814332334364577037',
          'video_desc': '咳嗽是加好友，滴滴是来消息，敲门是好友上线，还记得这个声音吗？#年少的你#青葱岁月#天龙八部网游'
        },
        {
          'comment_count': '1',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200411/6814260778942713103.mp4',
          'create_time': '1586568726000',
          'user_id': '68490068174',
          'nickname': 'Raxide_',
          'douyinhao': '71574517',
          'video_id': '6814260778942713103',
          'video_desc': '#来个全身照'
        },
        {
          'comment_count': '11',
          'app_name': 'douyin',
          'saveUrl': 'http://218.84.186.2:30009/videos/videos/20200410/6813405948896447751.mp4',
          'create_time': '1586369712000',
          'user_id': '72703809275',
          'nickname': '故里。',
          'douyinhao': '1751901141',
          'video_id': '6813405948896447751',
          'video_desc': '你是什么星座？'
        }
      ],
      videoT: false,
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 3,
        loop: true,
        // speed: 6000,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        on: {
          click: (e) => {
            // 单视频播放
            // this.noPlay(e.target.innerHTML)
            this.noPlay(e.target.getAttribute('data-src'))
            // 判断播放状态
            if (e.target.autoplay) { // 第二次点击，状态自动播放
              e.target.autoplay = false
              // e.target.setAttribute('controls', false)
              return
            }
            // 第一次点击，当前视频播放
            e.target.setAttribute('src', e.target.getAttribute('data-src'))
            e.target.setAttribute('autoplay', true)
            // e.target.setAttribute('controls', true)
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    dealData () {
      // return this.getData()

      let result = []
      let length = this.data.length
      let integer = length / 3
      while (integer > 0) {
        result.push(this.data.splice(0, 3))
        --integer
      }
      return result
    }
  },
  watch: {

  },
  mounted () {
    // console.log(this.dealData)
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    noPlay (text) { // 单视频播放
      let videos = document.getElementsByTagName('video')
      Array.from(videos).forEach(dom => {
        // dom.innerHTML != text ? dom.pause() : ''
        return dom.getAttribute('data-src') !== text ? dom.pause() : ''
        // dom.innerHTML != text ? dom.setAttribute('controls', '') : ''
      })
    },
    enterSwiper (e) { // 鼠标进入，swiper停止轮播
      this.swiper.autoplay.stop()
    },
    leaveSwiper () { // 鼠标离开，swiper开始轮播
      this.swiper.autoplay.start()
    },
    getData () {
      let result = []
      let length = this.data.length
      let integer = length / 3
      while (integer > 0) {
        result.push(this.data.splice(0, 3))
        --integer
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper {
    width: 500px;
    height: 400px;
    border: 1px solid #000;
  }
  .swiper-slide {
    background-color: #eee;
    display: flex;
  }
  video {
    width: 98% !important;
    margin-right: 3px;
    margin-bottom: 3px;
  }
  .video-p {
    position: relative;
    width: 33.33%;
  }
  // .video-play {
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   width: 40px;
  //   height: 40px;
  //   background-color: #f40;
  //   border-radius: 50%;
  // }
</style>
