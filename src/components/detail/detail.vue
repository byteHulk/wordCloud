<template>
  <div class="container">
    <div class="header">
      <router-link tag="div" to="/home" class="word_icon more icon-circle-left"></router-link>
      <div class="cd-dropdown">
        <span @click="dropdown()" id="show_name">NBA</span>
        <!--<iscroll-view class="scroll-view" id="scroll-view" :options="{preventDefault: false}">-->
        <!--<ul class="user" id="user_click">-->
        <!--<li v-for="(number,index) in numbers" :id="'user_' + index" @click="user_li($event,index)">-->
        <!--word list {{number.index}}-->
        <!--<i class="icon-open-r"></i>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</iscroll-view>-->
      </div>
      <div class="word_icon icon-more" @click="download()"></div>
    </div>
    <iscroll-view class="scroll-view" @scrollStart="log" ref="iscroll"
                  :options="{preventDefault: false,scrollbars:true,fadeScrollbars:true,interactiveScrollbars:true}">
      <div class="content" id="news_content">
        <header>LeBron James had a dunk attempt blocked for just the 9th time in his career
          <span>Ten hours ago</span>
          <span class="myft">+ myFT</span>
        </header>
        <img class="avatar"
             src="https://www.gannett-cdn.com/presto/2018/12/19/USAT/a060f302-9e9b-4e5a-984e-8e7ee4394457-USATSI_11869201.jpg"/>
        <div class="text_detail">
          <p><span>The</span> <span>NBA</span> <span>world</span> <span>saw</span> <span>one</span> <span>of</span>
            <span>the</span> <span>rarest</span> <span>sights</span> <span>in</span> <span>basketball</span> <span>Tuesday</span>
            <span>night</span>: <span>a</span> <span>block</span> <span>on</span> <span>a</span> <span>LeBron</span>
            <span>James</span> <span>dunk</span> <span>attempt</span>.</p>

          <p><span>Early</span> <span>in</span> <span>the</span> <span>first</span> <span>quarter</span> <span>of</span>
            <span>the</span> <span>Los Angeles</span> <span>Lakers'</span> <span>game</span> <span>against</span> <span>the</span>
            <span>Brooklyn</span> <span>Nets</span>, James <span>drove</span> the <span>lane</span>
            <span>and</span> <span>went</span> <span>up</span> <span>for</span> <span>a</span> <span>dunk</span>. <span>He</span>
            <span>was</span> <span>met</span> <span>at</span> <span>the</span> <span>rim</span> <span>by</span> <span>second-year</span>
            <span>center</span> <span>Jarrett Allen</span>. </p>

          <p><span>And</span> <span>Allen</span> <span>won</span>.</p>

          <p><span>According</span> to <span>ESPN</span> <span>Stats</span> & <span>Info</span> , <span>it</span> <span>was</span>
            <span>just</span> the <span>ninth</span> <span>time</span> in James' <span>career</span> <span>that</span>
            <span>he</span> <span>was</span> <span>blocked</span> on a <span>dunk</span>
            <span>attempt</span>. <span>Considering</span> that James had <span>attempted</span> to <span>throw</span>
            <span>down</span> 1,850 <span>times</span> in his <span>illustrious</span> <span>career</span> to that
            <span>point</span> , it was <span>mighty</span> <span>impressive</span> by Allen.</p>

          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">Jarrett Allen <span>PROTECTS</span> THE <span>RIM</span> for the <a
              href="https://twitter.com/BrooklynNets?ref_src=twsrc%5Etfw">@BrooklynNets</a>!</p>
            <p>BKN <span>leads</span> 10-9 <span>early</span> in Q1 on <a
              href="https://twitter.com/NBATV?ref_src=twsrc%5Etfw">@NBATV</a>. <a
              href="https://twitter.com/hashtag/WeGoHard?src=hash&amp;ref_src=twsrc%5Etfw">#WeGoHard</a><a
              href="https://t.co/QH2el6Uljy" data-uotrack="storyinlinelink"
              target="_blank">pic.twitter.com/QH2el6Uljy</a></p>— NBA (@NBA) <a
            href="https://twitter.com/NBA/status/1075191134148853760?ref_src=twsrc%5Etfw"><span>December</span> 19, 2018</a>
          </blockquote>
          <p><span>It</span> <span>was</span> a <span>big</span> <span>moment</span> in a <span>big</span> 115-110
            <span>win</span> for the <span>Nets</span>, <span>who</span> <span>won</span> <span>their</span>
            <span>sixth</span> <span>game</span> in a <span>row</span> — the <span>longest</span>
            <span>current</span> <span>winning</span> <span>streak</span> in the NBA.</p>

          <p>"<span>If</span> <span>you</span> <span>go</span> <span>up</span> <span>and</span> <span>you</span> <span>block</span>
            <span>it</span>, <span>you</span>'re <span>going</span> to be on the <span>highlight</span>. You get <span>dunked</span>
            on, you're <span>going</span> to be
            on the <span>highlight</span>. <span>So</span> <span>just</span> go up and <span>protect</span> the <span>rim</span>,"
            Allen <span>told</span> <span>reporters</span> of the <span>play</span>, <a><span>per</span> ESPN.</a></p>

          <p><span>Of</span> <span>course</span>, the <span>block</span> was <span>merely</span> a <span>blip</span> on
            James' <span>night</span>. He <span>finished</span> with 36 <span>points</span> and 13 <span>rebounds</span>,
            <span>both</span>
            <span>game-highs</span>, and <span>dished</span> out <span>eight</span> <span>assists</span>.</p>

          <p>“He’s in his 20s, I’m in my 30s. Takes me a <span>little</span> <span>longer</span> to get
            <span>warmed</span> up," James <span>said</span> of Allen's
            <span>early-game</span> <span>block</span>.</p>

          <p>Allen is <span>just</span> the <span>eighth</span> <span>player</span> to <span>block</span> a James <span>dunk</span>
            — per ESPN's <span>SportsCenter</span>, <span>Amar'e</span> <span>Stoudemire</span>
            <span>accomplished</span> the <span>feat</span> <span>twice</span>.</p>

          <p>"That's a <span>helluva</span> <span>list</span> to be on," Allen said. "(James is) an <span>amazing</span>
            player. I got the <span>chance</span> to do it, so
            I'm on the <span>list</span> <span>forever</span> <span>now</span>."</p>

          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">Jarrett Allen came at the king ... and he did not miss.<a
              href="https://t.co/2K7LMeZDdb">pic.twitter.com/2K7LMeZDdb</a></p>— ESPN (@espn) <a
            href="https://twitter.com/espn/status/1075253204651257856?ref_src=twsrc%5Etfw">December 19, 2018</a>
          </blockquote>
          <p><span>Contributing</span>: <span>Associated</span> <span>Press</span>.</p>

          <p><span>Follow</span> <span>USA</span> <span>TODAY</span> <span>ports</span>' Jace Evans on
            <span>Twitter</span> <a>@JaceTEvans.</a></p>
        </div>
      </div>
    </iscroll-view>
    <footer id="footer">
      <div class="div" v-if="this.finally.translation">
        <div id="fon1" v-if="this.finally.query" class="fonsion">
          <h1 class="icon-pronunciation">{{this.finally.query}}</h1>
        </div>
        <div class="exam_type">
          <span id="get4">CET4</span>
          <span id="kao" style="color: #990f3d;border: 1px solid #990f3d">考研</span>
          <span id="gmat" style="color: #fdbe2e;border: 1px solid #fdbe2e">GMAT</span>
          <span id="ielts" style="color: #ec1e38;border: 1px solid #ec1e38">IELTS</span>
          <span id="toefl" style="color: #053380;border: 1px solid #053380">TOEFL</span>
          <span id="gao" style="color: cornflowerblue;border: 1px solid cornflowerblue">高中</span>
          <span id="chu" style="color: coral;border: 1px solid coral">初中</span>
          <span id="shang" style="color: #3c546e;border: 1px solid #3c546e">商务英语</span>
        </div>
        <div class="fonsion" v-if="this.finally.basic">
          <span v-if="this.finally.basic.phonetic">/{{this.finally.basic.phonetic}}/</span>
        </div>
        <!--<div class="fonsion" v-else>-->
        <!--<span>/{{this.finally.basic.us-phonetic}}/</span>-->
        <!--</div>-->
        <div class="fonsion" v-if="this.finally.basic">
          <p>{{this.finally.basic.explains[0]}}</p>
          <p>{{this.finally.basic.explains[1]}}</p>
        </div>
        <div class="fonsion" v-if="this.finally.web">
          <p>网络释义:</p>
          <p><span>{{this.finally.web[0].value[0]}}</span>,<span>{{this.finally.web[0].value[1]}}</span>,<span>{{this.finally.web[0].value[2]}}</span>
            <span>{{this.finally.web[0].key}}</span></p>
          <p><span>{{this.finally.web[1].value[0]}}</span>,<span>{{this.finally.web[1].value[1]}}</span></span>
            <!--//,<span>{{this.finally.web[1].value[2]}}-->
            <span>{{this.finally.web[1].key}}</span></p>
          <p><span>{{this.finally.web[2].value[0]}}</span>,<span>{{this.finally.web[2].value[1]}}</span> <span>{{this.finally.web[2].key}}</span>
          </p>
          <!--<p>{{this.finally.web[1]}}</p>-->
          <!--<p>{{this.finally.web[2]}}</p>-->
        </div>
        <div class="fonsion" v-else>
          <p>{{this.finally.translation[0]}}</p>
        </div>
        <br/>
        <!--<p v-if="this.finally.basic">{{this.finally.basic.explains}}</p>-->
      </div>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        finally: {},
        lastoPoint: null,
        click_count: 0
      }
    },
    mounted() {
      this.touch()
    },
    methods: {
      touch() {
        var ta = document.getElementById("news_content")
        ta.addEventListener('touchstart', this.Touch_Start, false)
      },
      Touch_Start() {
        if (this.lastoPoint !== null) {
          this.lastoPoint.style.color = "black"
          this.lastoPoint.style.backgroundColor = "inherit"
          this.lastoPoint.style.padding = "0px"
        }
        var pointX = event.touches[0].clientX
        var pointY = event.touches[0].clientY
        var oPoint = document.elementFromPoint(pointX, pointY)
        this.lastoPoint = oPoint
        if (oPoint.nodeName === 'SPAN') {
          var s = ''
          s = oPoint.innerHTML
          var chooseSpan = oPoint
          this.checkWords(s, chooseSpan)
        }

      },
      checkWords(word, ele) {
        this.save_result(word)
        ele.style.color = "#fff"
        ele.style.backgroundColor = "rgb(0,153,223)"
        ele.style.padding = "0 .2em"
      },
      save_result(word) {
        if (this.click_count !== 0) {
          this.clear()
        }
        this.click_count++
        let that = this
        var check
        check = new XMLHttpRequest()
        check.open("POST", "http://39.96.48.33/wordCloud/checkword.php?number=" + Math.random(), true)
        check.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        check.send("fname=" + word)
        check.onreadystatechange = function () {
          if ((check.readyState == 4) && (check.status == 200)) {
            that.finally = JSON.parse(check.responseText)
            document.getElementById("footer").style.maxHeight = '250px'
            that.$nextTick(function () {
              if (that.finally.basic) {
                if (that.finally.basic.exam_type) {
                  if (that.finally.basic.exam_type.indexOf('IELTS') !== -1) {
                    document.getElementById("ielts").style.display = 'inline-block'
                  }
                  if (that.finally.basic.exam_type.indexOf('CET4') !== -1) {
                    document.getElementById("get4").style.display = 'inline-block'
                  }
                  if (that.finally.basic.exam_type.indexOf('考研') !== -1) {
                    document.getElementById("kao").style.display = 'inline-block'
                  }
                  if (that.finally.basic.exam_type.indexOf('GMAT') !== -1) {
                    document.getElementById("gmat").style.display = 'inline-block'
                  }
                  if (that.finally.basic.exam_type.indexOf('TOEFL') !== -1) {
                    document.getElementById("toefl").style.display = 'inline-block'
                  }
                  if (that.finally.basic.exam_type.indexOf('高中') !== -1) {
                    document.getElementById("gao").style.display = 'inline-block'
                  }
                  if (that.finally.basic.exam_type.indexOf('初中') !== -1) {
                    document.getElementById("chu").style.display = 'inline-block'
                  }
                  if (that.finally.basic.exam_type.indexOf('商务英语') !== -1) {
                    document.getElementById("shang").style.display = 'inline-block'
                  }
                }
              }
              //   var fonsion = document.querySelectorAll(".fonsion")
              //   for (var i = fonsion.length - 1; i >= 0; i--) {
              //     // fonsion[i].style.animation = 'trans .25s ease-out .1s 1 alternate'
              //   }
            })
            // document.getElementById("fon1").classList.toggle('trans')
            // console.log(document.getElementById("fon1"))
            // console.log(document.querySelectorAll(".fonsion"))
            // var fonsion = document.querySelectorAll(".fonsion")
            // for (var i = fonsion.length - 1; i >= 0; i--) {
            //   fonsion[i].classList.toggle('trans')
            // }
            // console.log('success')
          }
        }
      },
      log() {
        // var footer =
        if (this.click_count !== 0) {
          document.getElementById("footer").style.maxHeight = '0px'
          this.clear()
        }
        // document.querySelectorAll("#fonsion").classList.toggle('trans')
      },
      clear() {
        document.getElementById("ielts").style.display = 'none'
        document.getElementById("get4").style.display = 'none'
        document.getElementById("kao").style.display = 'none'
        document.getElementById("gmat").style.display = 'none'
        document.getElementById("toefl").style.display = 'none'
        document.getElementById("gao").style.display = 'none'
        document.getElementById("chu").style.display = 'none'
        document.getElementById("shang").style.display = 'none'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .container
    position relative
    height 100%
    /*display flex*/
    /*flex-direction column*/
    overflow hidden
    .header
      width 100%
      height 8%
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .16)
      display flex
      flex-direction row
      justify-content space-between
      padding 0 1em 0 1em
      box-sizing border-box
      position relative
      background-color: #fff1e5
      z-index 6
      .cd-dropdown
        width 60%
        height 100%
        position relative
        /*border-left 1px solid black*/
        /*border-right 1px solid black*/
        span
          z-index: 1005
          /*box-shadow: 0 1px 1px rgba(0,0,0,1)*/
          width: 100%
          height: 100%
          line-height: 53px
          font-weight: 700
          font-size: 16px
          display: block
          /*padding: 0 50px 0 10px*/
          position: relative
          cursor: pointer
          box-sizing border-box
      .word_icon
        position relative
        font-size 24px
        width 20%
        height 100%
      .word_icon:before
        position: absolute
        top 50%
        transform translate3d(-50%, -50%, 0)
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
      z-index 5
      transition: all 300ms ease 0ms
      .content
        padding 0 1em
        box-sizing content-box
        text-align left
        header
          font-weight: 700
          font-family: FinancierDisplayWeb, serif
          font-size: 22px
          line-height: 24px
          width 100%
          display inline-block
          word-break: break-all
          box-sizing: content-box
          padding-bottom .5em
          padding-top .3em
          border-1px(rgba(0, 0, 0, 1))
          span
            display inline-block
            margin-top .2em
            font-size: 16px
            line-height: 16px
            color #990f3d
            margin-right .2em
          .myft
            padding: 4px 6px
            font-size: 12px
            line-height: 14px
            background-color: rgba(0, 0, 0, 0)
            color: #0d7680 !important
            border: 1px solid #0d7680
            font-family: MetricWeb, sans-serif
        .avatar
          margin-top .5em
          margin-bottom .5em
          width 100%
          display block
          /*background url("./con.jpg")*/
          -webkit-background-size: 100%
          background-size: 100%
          /*height 7rem*/
          /*margin-right 1em*/
          box-sizing: content-box
        .text_detail
          font: 15px / 24px arial, sans-serif
          line-height: 20px
          /*text-indent: 2em*/
          word-break: break-all
          margin-top: 0
          color: #333
          margin-bottom: 0
          opacity: .9
          -webkit-font-smoothing: antialiased
          .twitter-tweet
            margin: .5em auto
            border-left: 2px solid #c9c9c9
            color: #797979
            font: 400 14px / 22px arial, sans-serif
            /*margin: 0 0 15px 60px*/
            word-break keep-all !important
            overflow: auto
            padding-left: 20px
          p
            margin-bottom .5em
          a
            color: #4ec4ff
            text-decoration: none

  footer
    position absolute
    text-align left
    text-indent 4%
    background #fff1e5
    bottom 0px
    width 100%
    max-height 0px
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, .16)
    z-index: 6
    transition all 1s cubic-bezier(0.175, 0.885, 0.320, .999)
    .div
      opacity 1
      position relative
      .exam_type
        position absolute
        top .5em
        right .5em
        width 50%
        height 40%
        word-break keep-all
        text-align right
        transform translate3d(30px, 0px, 0)
        /*animation-iteration-count: infinite*/
        animation: transX .25s ease-out
        animation-delay: .05s
        animation-direction: alternate
        animation-fill-mode: forwards
        > span
          border: 1px solid #0d7680
          padding: 2px 4px
          font-size: 12px
          line-height: 12px
          color: #0d7680
          margin-right .2em
          margin-bottom .4em
          display none
          text-indent 0%
      /*word-break break-word*/
      div
        transform translate3d(0, 50px, 0)
        /*position absolute*/
        /*top 50px*/
        margin-top .5em
        transition all 1s cubic-bezier(0.175, 0.885, 0.320, .999)
        /*animation-iteration-count: infinite*/
        animation: transY .25s ease-out
        animation-delay: .25s
        animation-direction: alternate
        animation-fill-mode: forwards
        p
          margin-bottom .3em
          font: 400 13px / 17px sans-serif
        > span
          font: 400 15px / 25px sans-serif
          color #707070

  .icon-pronunciation
    position relative
    pointer-events: none
    display inline
    &::before
      pointer-events: auto
      font-size 27px
      /*line-height 22px*/
      position absolute
      right -4rem
      top 1px
      color #0d7680

  @keyframes transY
    to {
      transform translate3d(0, 0, 0)
    }

  @keyframes transX
    to {
      transform translate3d(0, 0, 0)
    }

  /* .trans
     transform translate3d(0, 0px, 0) !important
     margin-top .5em
     transition all 1s cubic-bezier(0.175, 0.885, 0.320, .999)*/
</style>
