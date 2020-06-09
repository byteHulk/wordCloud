<template>
  <div class="parent">
    <div id="detail" class="detail" style="display: none">
      <div class="detail-wrapper">
        <div class="detail-main">
          <div class="target_head">There are 64 days to complete the goal.</div>
          <div id="js-alert-box" class="circle-box">
            <svg class="alert-circle" width="234" height="234">
              <circle id="js-sec-circle" class="alert-sec-circle" cx="117" cy="117" r="108" fill="transparent"
                      stroke="#F4F1F1" stroke-width="10"></circle>
              <circle id="js-ding-circle" class="alert-ding-circle" cx="117" cy="117" r="108" fill="transparent"
                      stroke="#e68e09" stroke-width="9"></circle>
              <text class="alert-sec-unit" x="152" y="172" fill="#BDBDBD">%</text>
            </svg>
            <div class="alert-sec-title">Total progress</div>
            <div id="js-sec-text" class="alert-sec-text"></div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">Word list</div>
            <div class="line"></div>
          </div>
          <div class="star">
            <ul>
              <li v-for="(number_li,number_index) in numbers" v-if="number_index<7">
                <p>{{number_li.index}}</p>
                <i class="icon-finish"></i>
              </li>
            </ul>
            <ul>
              <li v-for="(number_li,number_index) in numbers" v-if="number_index>7">
                <p>{{number_li.index}}</p>
                <i class="icon-finish"></i></li>
            </ul>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">Details</div>
            <div class="line"></div>
          </div>
          <div class="progress_text">
            <span><a style="color: white;margin-right: 1em">Schedule</a><a style="color:#e68e09">4</a><a
              style="color:#8a8b8b">/11</a></span>
            <span style="color:#8a8b8b">2018-10-08</span>
          </div>
          <div class="progress">
            <div class="probox" title="当前进度为10%">
              <div class="propre"></div>
            </div>
            <!--<div class="progress_font"></div>-->
          </div>
          <button class="go icon-upload" @click="go()">Start reciting words</button>
        </div>
      </div>
    </div>
    <div id="word_parent" class="word_parent" ref="viewArea">
      <div class="word_header">
        <router-link tag="div" to="/home" class="word_icon more icon-circle-left"></router-link>
        <div class="cd-dropdown">
          <span @click="dropdown()" id="show_name">choose your list</span>
          <iscroll-view class="scroll-view" id="scroll-view" :options="{preventDefault: false}">
            <ul class="user" id="user_click">
              <li v-for="(number,index) in numbers" :id="'user_' + index" @click="user_li($event,index)">
                word list {{number.index}}
                <i class="icon-open-r"></i>
              </li>
            </ul>
          </iscroll-view>
          <!--<iscroll-view class="scroll-view" id="scroll-view" :options="{preventDefault: false}">-->
          <!--<ul class="user" id="user_click">-->
          <!--<li v-for="(number,index) in numbers" :id="'user_' + index" @click="user_li($event,index)">-->
          <!--word list {{number.index}}-->
          <!--<i class="icon-open-r"></i>-->
          <!--</li>-->
          <!--</ul>-->
          <!--</iscroll-view>-->
        </div>
        <div class="word_icon icon-check" @click="check()"></div>
      </div>
      <div class="word_content" id="word_content" style="-webkit-perspective: 1200!important;">
        <div class="bar" ref="bar">
          <div class="timeball" id="timeball">
            <div class="activeball"></div>
          </div>
          <div class="thecolorbar" id="thecolorbar"></div>
        </div>
        <div class="word" id="w1" :style="activeBarStyle" ref="list">
          <ul id="parn">
            <li v-for="(site,index) in seller" :id=" 'person_'+ index">
              <h1 class="icon-pronunciation icon-pro" @click="phonetic($event)">{{site.words}}</h1>
              <!--<audio autoplay src="http://47.94.199.2/test.mp3"></audio>-->
              <span>{{site.alphabet}}</span>
              <span>
                <p>{{site.translate1}}</p>
                <p>{{site.translate2}}</p>
                <p>{{site.translate3}}</p>
              </span>
              <span class="example_span">
                <i>Example</i>
                <p>{{site.sentence}}</p>
              </span>
              <span class="example_span">
                {{site.sentence_translate}}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="check_content">
        <div class="word1" id="w" :style="activeBarStyle">
          <ul id="parn1">
            <li v-for="(site,index) in seller" :id=" 'person2_'+ index" @click="rotate($event)">
              <div>
                <h1 class="icon-pronunciation icon-pr" @click="phonetic($event)">{{site.words}}</h1>
                <!--<audio autoplay src="http://47.94.199.2/test.mp3"></audio>-->
                <span class="alp">{{site.alphabet}}</span>
                <footer>
                  <nav class="bgbgbg"></nav>
                  <i class="iccon"></i>
                </footer>
              </div>
              <div>
                <span>
                <h4>释义</h4>
                <p>{{site.translate1}}</p>
                <p>{{site.translate2}}</p>
                <p>{{site.translate3}}</p>
                </span>
                <span class="example_span">
                <h4>例句</h4>
                <i>Example</i>
                <p>{{site.sentence}}</p>
                </span>
                <span class="example_span">
                  <h4>翻译</h4>
                {{site.sentence_translate}}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="word_footer">
          <div style="background: #49c89c;" @click="nextt">认识</div>
          <div style="background: #efc467;" @click="nextt">不认识</div>
          <div style="background: #3995e8;" @click="nextt">模糊</div>
        </div>
      </div>
      <i id="help" class="help icon-hand"></i>
      <!--<iscroll-view class="scroll-view" :options="{preventDefault: false}">-->
      <!--<ul>-->
      <!--<li v-for="lis in numbers">word list {{lis.index}}-->
      <!--<i class="icon-open"></i>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</iscroll-view>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import './requestAnimationFrame'
  import './svg-morpheus'

  export default {
    props: {
      additionalX: {
        type: Number,
        default: 50
      }
    },
    data() {
      return {
        translateX: 37.5,
        translateX1: 0,
        progress_population: 0,
        progress_week: 0,
        word_content: null,
        word_phonetic: null,
        word_alphabet: null,
        word_translate: null,
        sentence: null,
        sentence_translate: null,
        list_index: 0,
        click_coun: 0,
        position_index: 0,
        user: '1',
        inconid: ['svg-1'],
        easing: ['elastic-in'],
        duration: ['900'],
        rotation: ['counterclock'],
        numbers: [
          {index: '1'},
          {index: '2'},
          {index: '3'},
          {index: '4'},
          {index: '5'},
          {index: '6'},
          {index: '7'},
          {index: '8'},
          {index: '9'},
          {index: '10'},
          {index: '11'},
          {index: '12'},
          {index: '13'},
          {index: '14'},
          {index: '15'}
        ],
        seller: {}
      }
    },
    beforeCreate() {
      var self = this
      var test
      test = new XMLHttpRequest()
      test.open("GET", "http://39.96.48.33/wordCloud/testdata.json?number" + Math.random(), true)
      test.send()
      test.onreadystatechange = function () {
        if ((test.readyState == 4) && (test.status == 200)) {
          self.seller = JSON.parse(test.responseText).list_1
          document.getElementById('w1').style.display = 'none'
          // console.log(self.seller.list_1)
          self.$nextTick(function () {
            document.getElementById('person_0').classList.toggle('word-is-active')
            self.set_postion()
          })
        }
      }
    },
    mounted() {
      this.bindEvent()
      this.progress()
    },
    computed: {
      activeBarStyle() {
        return {
          transition: 'all 300ms',
          transform: `translate3d(${this.translateX}px, 0px, 0px)`
        }
      },
      isMoveLeft() {
        return this.firstX <= this.secondX
      },
      isMoveRight() {
        return this.firstX >= this.secondX
      },
      viewAreaWidth() {
        return this.$refs.viewArea.offsetWidth
      },
      listWidth() {
        return this.$refs.list.offsetWidth - this.viewAreaWidth
      },
      barWidth() {
        return this.$refs.bar.offsetWidth
      }
    },
    methods: {
      bindEvent() {
        var ta = document.getElementById("w1")
        ta.addEventListener('touchstart', this.handleTouchStart, false)
        ta.addEventListener('touchmove', this.handleTouchMove, false)
        ta.addEventListener('touchend', this.handleTouchEnd, false)
        this.touchbar = document.getElementById("timeball")
        this.touchbar.addEventListener('touchstart', this.TouchStart, false)
        this.touchbar.addEventListener('touchmove', this.TouchMove, false)
        this.touchbar.addEventListener('touchend', this.TouchEnd, false)

      },
      TouchStart() {
        cancelAnimationFrame(this.inertiaFrame)
        this.lastX1 = event.touches[0].clientX
      },
      TouchMove() {
        event.preventDefault()
        event.stopPropagation()
        this.startX1 = this.lastX1
        this.currentX1 = event.touches[0].clientX
        this.translateX1 += this.currentX1 - this.lastX1
        this.lastX1 = this.currentX1
        if ((this.translateX1 >= 0) && (this.translateX1 < 300)) {
          document.getElementById('timeball').style.transform = `translate3d(${this.translateX1}px, 0px, 0px)`
          document.getElementById('thecolorbar').style.width = this.translateX1
          // this.translateX = -this.translateX1 * 21.5
        }
      },
      TouchEnd() {
        if (this.translateX < -6375) {
          this.translateX = -6375
        }
        var tich = Math.round(this.translateX / -337.5)
        for (var i = (this.seller.length - 1); i >= 0; i--) {
          document.getElementById('person_' + i).classList.remove('word-is-active')
        }
        document.getElementById('person_' + tich).classList.toggle('word-is-active')
      },
      check() {
        document.getElementById('help').style.display = 'none'
        document.getElementById('word_content').style.display = 'none'
        var main = document.getElementById('word_parent')
        var load = document.createElement("div")
        var cartoon = document.createElement("div")
        load.setAttribute('class', 'loadingbox')
        cartoon.setAttribute('class', 'loader')
        load.setAttribute('id', 'loadingbox')
        // update.innerHTML = this.refresh_status
        main.appendChild(load)
        load.appendChild(cartoon)
        var self = this
        setTimeout('document.getElementById(\'loadingbox\').style.opacity = 0', 3000)
        setTimeout(() => {
          main.removeChild(load)
          load.removeChild(cartoon)
        }, 3200)
        setTimeout('document.getElementById(\'person2_\' + 0).classList.toggle(\'word-active\')', 3400)
        setTimeout('document.querySelector(\'.check_content\').style.display = \'block\'', 3400)
        setTimeout('document.getElementById(\'show_name\').innerHTML = \'Review\'', 3400)
        // document.getElementById('refresh').classList.toggle('refresh')
        // document.getElementById('refreshbox').style.opacity = '1'
      },
      rotate(event) {
        if (event.target.className !== 'before') {
          let target = event.target
          let next = target.parentNode.lastChild
          target.classList.toggle('letgo')
          next.classList.toggle('before')
          this.lasttarget = target
          this.lastnext = next
        } else {
          this.lasttarget.classList.toggle('letgo')
          this.lastnext.classList.toggle('before')
        }
      },
      nextt() {
        let qur = document.querySelector('.word-active')
        let lastchild = document.getElementById('parn1').lastChild
        if (qur !== lastchild) {
          for (var i = (this.seller.length - 1); i >= 0; i--) {
            document.getElementById('person2_' + i).classList.remove('word-active')
          }
          // console.log(qur.nextSibling)
          qur.nextSibling.classList.toggle('word-active')
          this.translateX = (this.translateX + -337.5)
        } else {
          this.success()
        }
      },
      success() {
        console.log('ddd')
        var main = document.getElementById('word_parent')
        var succ = document.createElement("div")
        var cartoon = document.createElement("div")
        succ.setAttribute('class', 'm-box')
        cartoon.setAttribute('class', 'm-duigou')
        succ.setAttribute('id', 'm-box')
        // update.innerHTML = this.refresh_status
        main.appendChild(succ)
        succ.appendChild(cartoon)
      },
      halk_getjson() {
        var values
        values = new XMLHttpRequest()
        values.open("POST", "http://111.225.138.69:701/api/values", true)
        values.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        values.send("fname=test")
        values.onreadystatechange = function () {
          if ((values.readyState == 4) && (values.status == 200)) {
            this.values = values.responseText
            console.log(this.values)
          }
        }
      },
      phonetic(event) {
        let that = this
        var target = event.target
        var inner = target.innerHTML
        var phone
        phone = new XMLHttpRequest()
        phone.open("POST", "http://39.96.48.33/wordCloud/getphonetic.php?number=" + Math.random(), true)
        phone.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        phone.send("fname=" + inner)
        phone.onreadystatechange = function () {
          if ((phone.readyState == 4) && (phone.status == 200)) {
            var audio = document.createElement('audio')
            audio.src = 'http://39.96.48.33/wordCloud/test.mp3?number=' + Math.random()
            audio.autoplay = true
            audio.playbackRate = 0.8
            audio.volume = 1
          }
        }
      },
      handleTouchStart(event) {
        cancelAnimationFrame(this.inertiaFrame)
        this.lastX = event.touches[0].clientX
        this.firstX = event.touches[0].clientX
        this.translate = this.translateX
        event.preventDefault()
      },
      handleTouchMove(event) {
        event.preventDefault()
        event.stopPropagation()
        this.touching = true
        this.startMoveTime = this.endMoveTime
        this.startX = this.lastX
        this.currentX = event.touches[0].clientX
        this.secondX = event.touches[0].clientX
        this.moveFellowTouch()
        this.endMoveTime = event.timeStamp
      },
      moveFellowTouch() {
        this.translateX += this.currentX - this.lastX
        this.lastX = this.currentX
        // document.getElementById('w1').style.transform = `translate3d(${this.translateX}px, 0px, 0px)`
      },
      handleTouchEnd(event) {
        var me = this
        if (this.checkReboundX()) {
          cancelAnimationFrame(this.inertiaFrame)
        }
        this.transandX = Math.abs(this.secondX - this.firstX)
        if (this.transandX > 200) {
          if (this.firstX <= this.secondX) {
            this.translateX = (this.translate + 337.5)
            if (this.checkReboundX()) {
              cancelAnimationFrame(this.inertiaFrame)
            } else {
              if (this.list_index > 0) {
                this.list_index = this.list_index - 1
                for (var i = (this.seller.length - 1); i >= 0; i--) {
                  document.getElementById('person_' + i).classList.remove('word-is-active')
                }
                document.getElementById('person_' + this.list_index).classList.toggle('word-is-active')
              }
            }
          } else {
            this.translateX = (this.translate - 337.5)
            // console.log(this.translateX)
            if (this.checkReboundX()) {
              cancelAnimationFrame(this.inertiaFrame)
            } else {
              if (this.list_index < 19) {
                this.list_index = this.list_index + 1
              }
              for (var i = 0, len = this.seller.length; i < len; i++) {
                document.getElementById('person_' + i).classList.remove('word-is-active')
              }
              document.getElementById('person_' + this.list_index).classList.toggle('word-is-active')
            }
          }
        } else {
          this.translateX = this.translate
        }
      },
      checkReboundX() {
        this.reBounding = false
        if (this.translateX > (0 + this.additionalX)) {
          this.reBounding = true
          this.translateX = 37.5
        } else if (this.translateX < (-this.listWidth - this.additionalX)) {
          // console.log(this.listWidth)
          this.reBounding = true
          this.translateX = -this.listWidth
        }
        // return this.translateX === 0 || this.translateX === -this.listWidth
      },
      progress() {
        var t = 99
        var n = document.getElementById("js-ding-circle")
        document.getElementById("js-sec-text").innerHTML = t
        setTimeout(function () {
          if (101 == t) {
            // alert('dd')
          } else {
            document.getElementById("js-sec-text").innerHTML = t
            var e = Math.round(((100 - t) * 7.9))
            if (t > 80) {
              e = e + (t * (t / 190))
            }
            n.style.strokeDashoffset = e
          }
        }, 970)
      },
      go() {
        document.getElementById('detail').style.top = '-100%'
        document.getElementById('word_parent').classList.toggle('word_filter')
      },
      download() {
        document.getElementById('help').style.display = 'none'
        document.getElementById('detail').style.top = '0px'
        document.getElementById('word_parent').classList.toggle('word_filter')
      },
      set_postion() {
        for (var i = 0, len = this.numbers.length; i < len; i++) {
          if (this.position_index % 2 == 0) {
            document.getElementById('user_' + this.position_index).style.transform = 'translateX(230px)'
            this.position_index++
          } else {
            document.getElementById('user_' + this.position_index).style.transform = 'translateX(-230px)'
            this.position_index++
          }
        }
      },
      dropdown() {
        if (document.getElementById('scroll-view').style.display == 'block') {
          setTimeout(this.claert, 900)
        } else {
          document.getElementById('scroll-view').style.display = 'block'
        }
        document.getElementById('help').style.display = 'none'
        for (var i = 0, len = this.numbers.length; i < len; i++) {
          document.getElementById('user_' + i).classList.toggle('word-is-active')
        }
        document.getElementById('scroll-view').classList.toggle('dis')
        document.getElementById('show_name').classList.toggle('data-span')
      },
      claert() {
        document.getElementById('scroll-view').style.display = 'none'
      },
      user_li(e, index) {
        var target = e.target
        this.dropdown()
        document.getElementById('show_name').innerHTML = target.innerText
        index = index + 1
        var self = this
        var test
        test = new XMLHttpRequest()
        test.open("GET", "http://39.96.48.33/wordCloud/testdata.json?number" + Math.random(), true)
        test.send()
        test.onreadystatechange = function () {
          if ((test.readyState == 4) && (test.status == 200)) {
            var text = 'list_' + index
            self.seller = JSON.parse(test.responseText)[text]
            document.getElementById('w1').style.display = 'block'
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .parent
    position relative
    height 100%
    /*display flex*/
    /*flex-direction column*/
    overflow hidden
    /*justify-content space-between*/
    /*background url("./backgound.png") no-repeat*/
    /*-webkit-background-size: cover*/
    /*background-size: cover*/
    .detail
      position fixed
      z-index 3
      top -100%
      left 0
      width 100%
      height 100%
      overflow hidden
      background: rgba(7, 17, 27, 0.8)
      transition: top .7s cubic-bezier(0.175, 0.885, 0.320, .999)
      .detail-wrapper
        min-height 100%
        color white
        width 100%
        .detail-main
          /*margin-top 64px*/
          padding 0 37.5px 64px 37.5px
          .target_head
            height 40px
            line-height 40px
            font-size 14px
            font-weight 500
            white-space: nowrap
          /*background rgba(255,255,255, .1)*/
          .circle-box
            margin 0
            position: relative /*transform: perspective(1000)
            -moz-transform: perspective(1000)
            -o-transform: perspective(1000)
            -webkit-transform: perspective(1000)*/
            .alert-circle
              margin 0
              text-align center
              .alert-sec-circle
                stroke-dashoffset: 0
                stroke-dasharray: 735
              .alert-ding-circle
                stroke-dashoffset: 735
                stroke-dasharray: 735
                transform rotate(-89.9deg)
                -webkit-transform rotate(-89.9deg)
                transform-origin 117px 117px
                -webkit-transform-origin 117px 117px
                transition: stroke-dashoffset 1s cubic-bezier(0.175, 0.885, 0.320, .999)
              .total
                color white
              .number
                stroke-width: 1
                font-size: 80px
                font-weight 700
                text-anchor: middle
                dominant-baseline: middle
                pointer-events: auto

              .alert-sec-unit
                font-size: 34px
            .alert-sec-title
              position: absolute
              top 23%
              /*transform translateY(-50%)*/
              left: 50%
              transform translate3d(-50%, -50%, 0)
              color: #e0e0e0
              font-size: 16px
              font-weight 700
              white-space: nowrap

            .alert-sec-text
              position: absolute
              top 50%
              /*transform translateY(-50%)*/
              left: 50%
              transform translate3d(-50%, -50%, 0)
              width: 76px
              color: #e0e0e0
              font-size: 68px
        .star
          font-size 13px
          position relative
          width 100%
          height 65px
          ul:nth-child(2)
            position absolute
            right -375px
            width 100%
            display flex
            flex-direction row
            justify-content space-between
          ul
            position absolute
            width 100%
            display flex
            flex-direction row
            justify-content space-between
            li
              list-style-type none
              flex-grow 1
              p
                margin 1em 0 2em 0
        .title
          display flex
          width 100%
          margin 28px auto 24px auto
          .line
            flex 1
            position relative
            top -6px
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding 0 12px
            font-weight 700
            font-style 14px
        .progress_text
          position relative
          /*margin: auto 37.5px auto 37.5px*/
          height 24px
        span:nth-child(1)
          position absolute
          left 1em
        span:nth-child(2)
          position absolute
          right 1em
        .progress
          text-align center
          padding 0 1em 0 1em
          .probox
            width: 100%
            height: 30px
            position: relative
            overflow: hidden
            box-shadow: 0 0 5px #FFFFFF
            -moz-box-shadow: 0 0 5px #FFFFFF
            -webkit-box-shadow: 0 0 5px #FFFFFF
            -o-box-shadow: 0 0 5px #FFFFFFowrap
          .propre
            transition: all 300ms ease 0s
            width: 20%
            height: 100%
            background-color: rgb(0, 153, 136)
            position: absolute
            z-index: 2
            top: 0px
            left: 0px
        .go
          border 1px solid rgba(255, 255, 255, .8)
          border-radius 20px
          background inherit
          width 60%
          line-height 40px
          color white
          margin-top 1em
          &::before
            font-size 13px
            line-height 14px
            margin-right 1em
    .word_parent
      position relative
      z-index 2
      width 100%
      height 100%
      .word_header
        width 100%
        height 8%
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .16)
        display flex
        flex-direction row
        justify-content space-between
        padding 0 1em 0 1em
        box-sizing border-box
        position relative
        z-index 6
        .word_icon
          position relative
          font-size 24px
          width 20%
          height 100%
        .word_icon:before
          position: absolute
          top 50%
          transform translate3d(-50%, -50%, 0)
        .cd-dropdown
          width 60%
          height 100%
          position relative
          border-left 1px solid black
          border-right 1px solid black
          .scroll-view
            touch-action: none
            position: fixed
            /*max-height 0*/
            top: 55px
            bottom: 0
            left: 0
            right: 0
            overflow: hidden
            -webkit-overflow-scrolling: touch
            z-index 5000
            transition: all 300ms ease 0ms
            display none
          span
            z-index: 1005
            /*box-shadow: 0 1px 1px rgba(0,0,0,1)*/
            width: 100%
            height: 100%
            line-height: 53px
            font-weight: 700
            font-size: 16px
            display: block
            padding: 0 50px 0 10px
            position: relative
            cursor: pointer
            box-sizing border-box
            &::after
              content: '\25BC'
              position: absolute
              right: 0
              top: 14%
              width: 50px
              text-align: center
              font-size: 12px
              padding: 10px
              height: 70%
              line-height: 24px
              border-left: 1px solid black
              box-sizing: border-box
          .data-span
            z-index: 1005
            &::after
              content: '\25B2' !important

          .user
            position: relative
            width 100%
            height auto
            transition: all 300ms ease 0ms
            font-size 18px
            line-height 54px
            overflow hidden
            z-index 2000
            display block
            li
              z-index 2000
              list-style-type none
              border-1px(rgba(0, 0, 0, 0.5))
              background: #fff1e5
              text-align left
              text-indent 20px
              margin-left: 0px
              opacity: 0
              /*transform: none*/
              transition: all 300ms ease 0ms
              margin-bottom .15em
              i
                opacity 1
                &::before
                  position absolute
                  top 1em
                  right 1em

      .box
        position fixed
        width 100%
        height 100%
        overflow hidden
        background: rgba(7, 17, 27, 0.8)
        display none
        z-index 5
      .help
        opacity 1
        position absolute
        font-size 80px
        top 40%
        left 50%
        transform translate3d(-50%, -50%, 0)
        width 50%
        height 20%
        background: inherit
        z-index 9
        animation: contop 3s cubic-bezier(0.175, 0.885, 0.320, .999) 5
        -moz-animation: contop 3s cubic-bezier(0.175, 0.885, 0.320, .999) 5
        -webkit-animation: contop 3s cubic-bezier(0.175, 0.885, 0.320, .999) 5
        -o-animation: contop 3s cubic-bezier(0.175, 0.885, 0.320, .999) 5
      .word_content
        width 100%
        height 92%
        position absolute
        overflow hidden
        -webkit-perspective: 1200
        -moz-perspective: 1200
        -ms-perspective: 1200
        perspective: 1200
        -webkit-transform-origin 50% 50%
        z-index 4
        .bar
          position relative
          width 300px
          height 4px
          background: #ebe8e0
          margin-top 2rem
          left 37.5px
          z-index -1
          .timeball
            width 14px
            height 14px
            /*background-color: inherit*/
            /*transition-duration 300ms*/
            border-radius: 50%
            position: relative
            left 0
            top: -5px
            box-sizing: border-box
            background-color: #049dff
            z-index 2
            .activeball
              background-color: hsl(0, 0%, 100%)
              border-radius: 50%
              width: 4px
              height: 4px
              position: absolute
              right: 5px
              top: 5px
              z-index: 3
              box-sizing: border-box
          .thecolorbar
            background-color: #049dff
            width: 0%
            height: 100%
            position: absolute
            top: 0
            left: 0
            /*transition: width .1s linear 0s*/
            /*animation: animate-positive 2s*/
            z-index 1
        .word
          position absolute
          margin-top 2rem
          transition-duration: 330ms
          transform-style preserve-3d
          transform: translate3d(37.5px, 0px, 0px)
          /*-webkit-box-sizing: content-box*/
          /*-moz-box-sizing: content-box*/
          /*box-sizing: content-box*/
          ul
            display flex
            flex-direction row
            box-sizing: content-box
            li
              opacity .7
              list-style-type none
              height 35rem
              width 300px
              background: white
              border-radius 5%
              box-shadow: 5px 7px 2px rgba(0, 0, 0, 0.1)
              transform: translate3d(0, 0, -150px)
              backface-visibility: hidden
              transition-duration: 330ms
              margin-right 37.5px
              .icon-pro
                position relative
                pointer-events: none
                &::before
                  pointer-events: auto
                  font-size 19px
                  position absolute
                  right -21px
                  top -1px
                  color #1ad5da
              h1
                margin-top 4em
                display inline-block
              span
                margin-top 1.5em
                display block
                i
                  background: #d8f7f8
                  color #1ad5da
                  padding .2em .4em .2em .4em
                  margin-right .3em
                  border-radius 7px
                  display inline
                  font-size 11px
                  line-height 20px
                p
                  margin-top .4em
                  padding .2em 0 0 0
              .example_span
                font-size: 12px
                -webkit-text-size-adjust: none
                padding 0 1.4em 0 1.4em
                text-align left
                line-height 20px
                p
                  display inline
                  line-height 20px

  .word_filter
    filter blur(4px)

  .word-is-active
    opacity 1 !important
    transform: translate3d(0, 0, 0) !important

  .dis
    max-height 779px !important

  @keyframes contop
    0% {
      top: 50%
    }
    100% {
      top: 15%
    }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .loadingbox
    position fixed
    top 45%
    left 50%
    transform translate3d(-50%, -50%, 0)
    width 120px
    height 120px
    background: #D6D6D6
    border-radius 10%
    opacity .7

  .loader {
    font-size: 10px;
    margin: 15% auto;
    text-indent: -9999em;
    width: 7em;
    height: 7em;
    border-radius: 50%;
    background: #ffffff;
    background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
  }

  .loader:before {
    width: 50%;
    height: 50%;
    background: #FFF;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  .loader:after {
    background: #D6D6D6
    opacity 1
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .word1
    position absolute
    margin-top 2rem
    transition-duration: 330ms
    transform-style preserve-3d
    transform: translate3d(37.5px, 0px, 0px)
    /*-webkit-box-sizing: content-box*/
    /*-moz-box-sizing: content-box*/
    /*box-sizing: content-box*/
    ul
      display flex
      flex-direction row
      box-sizing: content-box
      li
        opacity .7
        list-style-type none
        pointer-events auto
        height 35rem
        width 300px
        /*background: white*/
        border-radius 5%
        transform: translate3d(0, 0, -150px)
        backface-visibility: hidden
        transition-duration: 330ms
        margin-right 37.5px
        transition: 1s
        float: left
        margin-top: 1px
        position: relative
        box-sizing: border-box
        perspective: 800px
        div:nth-child(1)
          width 100%
          height 100%
          position: absolute;
          top: 0;
          left: 0;
          border-radius 5% /*background-repeat: no-repeat;
          background-position: center center;*/
          backface-visibility: hidden;
          transition: 1s;
          background: white
          box-shadow: 5px 7px 2px rgba(0, 0, 0, 0.1)
        /*background-color: pink;*/
        div:nth-child(2)
          width: 100%;
          height: 100%;
          position: absolute;
          border-radius 5%
          top: 0;
          left: 0;
          background: white
          /*background-color: dodgerblue;*/
          text-indent: 2em;
          transform: rotateY(-180deg);
          backface-visibility: hidden;
          transition: 1s;
          span:nth-child(1)
            pointer-events: none
            margin-top 12em
            text-align left
            line-height 20px
          span
            pointer-events: none
            margin-top 1em
            padding 0 1.4em 0 1.4em
            display block
            h4
              pointer-events: none
              text-align left
              text-indent 0
            i
              pointer-events: none
              background: #d8f7f8
              color #1ad5da
              padding .2em .4em .2em .4em
              margin-right .3em
              border-radius 7px
              display inline
              font-size 11px
              line-height 20px
            p
              pointer-events: none
              display inline
              margin-top .4em
              padding .2em 0 0 0
        .example_span
          pointer-events: none
          font-size: 12px
          -webkit-text-size-adjust: none
          padding 0 1.4em 0 1.4em
          text-align left
          line-height 20px
          p
            pointer-events: none
            display inline
            line-height 20px
        .icon-pr
          pointer-events: none
          position relative
          /*pointer-events: none*/
          &::before
            /*pointer-events: auto*/
            font-size 19px
            position absolute
            left -5px
            top 3rem
            color #3fc597
        h1
          pointer-events: none
          margin-top 4em
          display inline-block
        span
          pointer-events: none
          margin-top 1.5em
          display block
        .alp
          pointer-events: none
          padding-left 3em

  .check_content
    display none
    width 100%
    height 92%
    position relative
    overflow hidden
    -webkit-perspective: 1200 !important
    /*-moz-perspective: 1200*/
    /*-ms-perspective: 1200*/
    /*perspective: 1200*/
    -webkit-transform-origin 50% 50%
    z-index 4

  .letgo
    transform: rotateY(180deg) !important

  .before
    transform: rotateY(0deg) !important

  .word_footer
    position absolute
    bottom 0
    width 100%
    background: white
    display flex
    flex-direction: row
    justify-content space-around
    padding 2em 0
    box-shadow: 5px 7px 2px rgba(0, 0, 0, 0.1)
    div
      width 70px
      height 40px
      border-radius 2px
      color white
      font-size 15px
      line-height 40px
      font-weight 400

  .word-active
    opacity 1 !important
    transform: translate3d(0, 0, 0) !important

  footer
    pointer-events: none
    position absolute
    bottom 0
    width 100%
    height 270px
    border-radius: 5%
    background: #f1f1f1
    .iccon
      display block
      position relative
      left 50%
      top 20%
      transform translate3d(-50%, -50%, 0)
      width 70px
      height 70px
      background: url("./click.svg")
      -webkit-background-size: 100%
      background-size: 100%
      &:before
        content '点击卡片显示释义'
        font-weight 400
        width 140px
        color #575757
        position absolute
        bottom -4%

  .bgbgbg
    height 30%
    background: url("./bg.png")
    -webkit-background-size: 100%
    background-size: 100%

  .m-box
    width 120px
    height 120px
    top 35%
    left 50%
    transform translate3d(-50%, -50%, 0)
    position: fixed
    margin: 100px auto
    background: #D6D6D6
    opacity .7
    z-index 99999
    border-radius 10%
  /*border-radius: 50%*/
  .m-duigou
    width: 100px
    height: 50px
    position: absolute
    left: 50%
    top: 50%
    margin: -40px 0 0 -50px
    transform: rotate(-45deg)
    overflow: hidden

  .m-duigou:before, .m-duigou:after
    content: ""
    position: absolute
    background: #fff
    border-radius: 2px

  .m-duigou:before
    width: 2px
    height: 50px
    left: 0
    -webkit-animation: dgLeft 0.5s linear 3s 1 both;
    animation: dgLeft 0.5s linear 3s 1 both

  .m-duigou:after
    width: 100px
    height: 2px
    bottom: 0
    -webkit-animation: dgRight 0.5s linear 3.5s 1 both
    animation: dgRight 0.5s linear 3.5s 1 both

  @-webkit-keyframes dgLeft
    0% {
      top: -100%
    }
    100% {
      op: 0%
    }

  @-webkit-keyframes dgRight
    0% {
      left: -100%
    }
    100% {
      left: 0%
    }
</style>
