<template>
  <div id="home" class="home">
    <div class="main" id="main">
      <div id="box" class="box" @click="box1()"></div>
      <iscroll-view class="scroll-view" ref="iscroll"
                    :options="{preventDefault: false,scrollbars:true,fadeScrollbars:true,interactiveScrollbars:true}">
        <div class="header">
          <h1>NEWSPAPPER</h1>
          <div class="remarks">
            <div></div>
            <span>Courage is going from failure to failure without losing enthusiasm.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -Winston Churchill</span>
          </div>
          <div class="text_box">
            <div class="news" id="news">
              <ul id="newsholder" class="newsholder hidden" style="display: block; height: 100%;">
                <li data-subcategory="金融" data-category="谷歌新闻" data-color="14ab05" class="nbsp" style="opacity: 1;"><a
                  href="#">Giannis:&nbsp;Bucks&nbsp;played&nbsp;game'&nbsp;inlossto&nbsp;Celtics</a></li>
                <li data-subcategory="体育" data-category="雅虎新闻" data-color="f45151" class="nbsp" style="opacity: 0;"><a
                  href="#">Three&nbsp;burning&nbsp;questions&nbsp;dominating&nbsp;the&nbsp;West</a></li>
                <li data-subcategory="财富" data-category="谷歌新闻" data-color="23a0e8" class="nbsp" style="opacity: 0;"><a
                  href="#">DeAndre&nbsp;Jordan's&nbsp;remarkable&nbsp;free&nbsp;throw&nbsp;revival</a></li>
                <li data-subcategory="财富" data-category="今日美国" data-color="14ab05" class="nbsp" style="opacity: 0;"><a
                  href="#">Nuggets&nbsp;bringing&nbsp;back&nbsp;awesome&nbsp;old&nbsp;uniforms</a></li>
                <li data-subcategory="体育" data-category="新闻扫描" data-color="cf29b9" class="nbsp" style="opacity: 0;"><a
                  href="#">Unhappy&nbsp;JR&nbsp;Smith&nbsp;wants&nbsp;Cavaliers&nbsp;to&nbsp;trade&nbsp;him</a></li>
                <li data-subcategory="科技" data-category="福克斯新闻" data-color="1979ab" class="nbsp" style="opacity: 0;"><a
                  href="#">DELL&nbsp;will&nbsp;work&nbsp;in&nbsp;lone&nbsp;star&nbsp;state.</a></li>
                <li data-subcategory="科技" data-category="Abc News" data-color="f45151" class="nbsp" style="opacity: 0;">
                  <a href="#">Return&nbsp;to&nbsp;school&nbsp;and&nbsp;save&nbsp;money&nbsp;for&nbsp;students</a></li>
                <li data-subcategory="财富" data-category="Usa Today" data-color="ed4c4c" class="nbsp"
                    style="opacity: 0;"><a href="#">Will&nbsp;rising&nbsp;oil&nbsp;prices&nbsp;inhibit&nbsp;the&nbsp;stock&nbsp;market?</a>
                </li>
                <li data-subcategory="健康" data-category="Abc News" data-color="cf29b9" class="nbsp" style="opacity: 0;">
                  <a href="#">Disputed&nbsp;lung&nbsp;transplant&nbsp;girls&nbsp;go&nbsp;home</a></li>
                <li data-subcategory="金融" data-category="Yahoo News" data-color="f45151" class="nbsp"
                    style="opacity: 0;"><a href="#">Oil&nbsp;is&nbsp;high&nbsp;stocks&nbsp;may&nbsp;be&nbsp;postponed&nbsp;in&nbsp;Syria</a>
                </li>
              </ul>
            </div>
            <div class="type">
              <ul id="news_type" class="news_type">
                <li data-subcategory="科技" class=""><a>Sport</a></li>
                <li data-subcategory="金融" class="" style="background-color: rgb(207, 41, 185);"><a>GOLF</a></li>
                <li data-subcategory="体育" class="active-cat" style="background-color: rgb(207, 41, 185);"><a>NCAA</a>
                </li>
                <li data-subcategory="财富" class="" style="background-color: rgb(207, 41, 185);"><a>NHL</a></li>
                <li data-subcategory="健康" class="" style="background-color: rgb(207, 41, 185);"><a>MLB</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="title">
            <div class="bg">
              <div class="bg_text">
                <span
                  class="title-space-after">Trail Blazers' Damian Lillard playing 'stronger ... more efficient</span>
              </div>
            </div>
            <div class="line"></div>
          </div>
          <div class="inner">
            <ul class="inner-type">
              <li class="new_1">
                <ul>
                  <div class="headline">
                    <span>Daily Briefing Today's top </span>
                    <span class="headtitle">Nba </span>
                    <span>stories</span>
                  </div>
                  <router-link to="/detail" tag="li" v-for="(nba,index) in news" v-if="index>list_min && index<list_max">
                    <div>
                      <img class="avatar" v-bind:src="nba.con"/>
                      <a>{{nba.headline}}</a>
                    </div>
                  </router-link>
                </ul>
              </li>
              <li class="new_2">
                <ul>
                  <div class="headline">
                    <span>Daily Briefing Today's top </span>
                    <span class="headtitle">Business </span>
                    <span>stories</span>
                  </div>
                  <li v-for="(bus,bus_index) in bueiness" v-if="bus_index>=0 && bus_index<19">
                    <div>
                      <img class="avatar" v-bind:src="bus.src"/>
                      <a>{{bus.inner}}</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="new_3">
                <ul>
                  <div class="headline">
                    <span>Daily Briefing Today's top </span>
                    <span class="headtitle">technology </span>
                    <span>stories</span>
                  </div>
                  <li v-for="(ain,ain_index) in ainess" v-if="ain_index>=0 && ain_index<20">
                    <div>
                      <img class="avatar" v-bind:src="ain.src"/>
                      <a>{{ain.inner}}</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="new_4"></li>
            </ul>
          </div>
        </div>
      </iscroll-view>
      <div class="footer">
        <div id="hamburger_remove" class="btn hamburger hamburger--collapse-r">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
          <!--<span class="s-1"></span>-->
          <!--<span class="s-2"></span>-->
          <!--<span class="s-3"></span>-->
        </div>
        <div class="btn padding icon-onedrive"></div>
        <div id="btnre" class="btn padding">
          <div id="refresh" class="click_none icon-refresh" @click="btnre()"></div>
        </div>
        <div class="btn padding updated">updated {{time}}</div>
        <div class="btn padding icon-par" @click="icon_set_up()">
          <div id="icon-set-up" class="icon-set-up"></div>
          <div id="icon-exit" class="icon-exit"></div>
        </div>
      </div>
    </div>
    <div class="navigation" id="navigation">
      <h2 class="icon icon-nintendo-switch">Siderbar</h2>
      <ul>
        <li><a class="icon-data icon-Home">Home Page<span id="icon-af" class="icon-open icon-af"
                                                          @click="open_or()"></span></a>
          <ul id="order" class="order">
            <li class="icon-order">Click labels to reorder</li>
            <li class="icon-order" @click="order_nba()"><span class="path1"></span><span class="path2"></span>NBA</li>
            <li class="icon-order" @click="order_bue()"><span class="path1"></span><span class="path2"></span>BUEINESS
            </li>
            <li class="icon-order" @click="order_tech()"><span class="path1"></span><span class="path2"></span>TECHNOLOGY
            </li>
          </ul>
        </li>
        <router-link to="/content" tag="li"><a class="icon-data icon-memory">Word Memory</a></router-link>
        <li><a class="icon-data icon-newword">Glossary</a></li>
        <router-link to="/chart" tag="li"><a class="icon-data icon-chart">Chart</a></router-link>
      </ul>
    </div>
    <div id="home_set" class="home_set">
      <ul>
        <li class="icon-set_up_con"><p>settings</p></li>
        <li class="icon-info"><p>info</p></li>
        <li class="icon-night">
          <span class="path1"></span>
          <span class="path2"></span>
          <p>switch to night</p>
        </li>
        <li class="icon-user"><p>subscribe</p></li>
        <router-link to="/login" tag="li" class="icon-go_sign"><p>sign in</p></router-link>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import './requestAnimationFrame'

  export default {
    data() {
      return {
        translateY: 0,
        list_min: 0,
        list_max: 19,
        time: '',
        set_click: 'set-up',
        click_type: null,
        set_humber: 'set-up',
        btn_count: 0,
        timer: undefined,
        setTimeout: undefined,
        con_index: 0,
        text_time: undefined,
        refresh_status: '',
        news: {},
        bueiness: {},
        ainess: {}
      }
    },
    beforeCreate() {
      var self = this
      var test
      test = new XMLHttpRequest()
      test.open("GET", "http://39.96.48.33/wordCloud/data_nba.json?number" + Math.random(), true)
      test.send()
      test.onreadystatechange = function () {
        if ((test.readyState == 4) && (test.status == 200)) {
          self.news = JSON.parse(test.responseText).asset_collection
          // console.log(self.news)
        }
      }
      var buness
      buness = new XMLHttpRequest()
      buness.open("GET", "http://39.96.48.33/wordCloud/data-business.json?number" + Math.random(), true)
      buness.send()
      buness.onreadystatechange = function () {
        if ((buness.readyState == 4) && (buness.status == 200)) {
          self.bueiness = JSON.parse(buness.responseText).news0
          // console.log(self.bueiness)
        }
      }
      var fom
      fom = new XMLHttpRequest()
      fom.open("GET", "http://39.96.48.33/wordCloud/data-ai.json?number" + Math.random(), true)
      fom.send()
      fom.onreadystatechange = function () {
        if ((fom.readyState == 4) && (fom.status == 200)) {
          self.ainess = JSON.parse(fom.responseText).ai0
          // console.log(self.bueiness)
        }
      }
    },
    destroyed() {
      this.setTimeout && window.clearInterval(this.setTimeout)
      this.timer && window.clearInterval(this.timer)
    },
    mounted() {
      this.watch()
      this.fordate()
      this.bindEvent()
      this.Dynamic_news()
    },
    methods: {
      bindEvent() {
        document.addEventListener('click', this.addRippleEffect, false)
        // this.$el.addEventListener('touchstart', this.handleTouchStart, false)
        // this.$el.addEventListener('touchmove', this.handleTouchMove, false)
        // this.$el.addEventListener('touchend', this.handleTouchEnd, false)
      },
      getjson(filename, receive, arrayname) {
        var self = this
        var fon
        var retVal = false
        this.list_min = 20
        this.list_max = 39
        fon = new XMLHttpRequest()
        fon.open("GET", "http://39.96.48.33/wordCloud/" + filename + ".json?number" + Math.random(), true)
        fon.send()
        fon.onreadystatechange = function () {
          if ((fon.readyState == 4) && (fon.status == 200)) {
            // console.log(arrayname)
            if (fon.responseText.indexOf(arrayname) !== -1) {
              self[receive] = JSON.parse(fon.responseText)[arrayname]
              self.refresh_status = 'edition update'
            } else {
              self.refresh_status = 'unable to update displaying previous edition'
            }
            retVal = true
            self.$nextTick(function () {
              var main = document.getElementById('main')
              var update = document.createElement("span")
              update.setAttribute('class', 'refreshbox')
              update.setAttribute('id', 'refreshbox')
              update.innerHTML = this.refresh_status
              main.appendChild(update)
              document.getElementById('refresh').classList.toggle('refresh')
              document.getElementById('refreshbox').style.opacity = '1'
              setTimeout("document.getElementById('refreshbox').style.opacity='0'", 750)
              setTimeout("main.removeChild(document.getElementById('refreshbox'))", 1500)
            })
          }
        }
        return retVal
      },
      fordate() {
        var start = new Date()
        var h = start.getHours()
        var min = start.getMinutes()
        var str
        if (h > 12) {
          h -= 12
          str = " PM"
        } else {
          str = " AM"
        }
        if (min < 10) {
          min = '0' + min
        }
        this.time = h + ':' + min + str
      },
      Dynamic_news() {
        var news = document.getElementById('news')
        var newsholder = document.getElementById('newsholder')
        // news.prepend('<div class="cover"><div class="flasher">_</div></div>')
        var cover = document.createElement("div")
        var flasher = document.createElement("div")
        cover.setAttribute("class", "cover")
        cover.style.width = '100%'
        cover.style.height = '100%'
        cover.style.position = 'absolute'
        cover.style.bottom = '0'
        cover.style.left = '20px'
        // cover.style.z-index = '2'
        cover.style.float = 'right'
        flasher.style.width = '5px'
        flasher.style.height = '5px'
        flasher.style.padding = '.5em 0 0 0'
        flasher.setAttribute("class", "flasher")
        flasher.innerHTML = "_"
        news.insertBefore(cover, newsholder)
        cover.appendChild(flasher)
        this.setcolor()
        // comble = 0
        this.timer = setInterval(() => {
          var nbsp = document.querySelectorAll(".nbsp")
          for (var i = nbsp.length - 1; i >= 0; i--) {
            if (nbsp[i].style.opacity == '1') {
              var comble = nbsp[i].offsetWidth
            }
          }
          if (newsholder.offsetWidth < comble) {
            newsholder.style.width = newsholder.offsetWidth + 0.5
            document.querySelector('.cover').style.left = document.querySelector('.cover').offsetLeft + 0.5 + 'px'
          } else {
            newsholder.style.width = 'auto'
            if (document.querySelector('.cover')) {
              document.querySelector('.flasher').style.opacity = '0'
              document.querySelector('.cover').style.left = '0px'
              news.removeChild(cover)
              var chars = ['nba', 'con', 'text', 'hon']
              var item = chars[Math.floor(Math.random() * chars.length)]
              this.setTimeout = setTimeout(() => {
                this.Dynamic_news_type(item)
              }, 2000)

            }
            // clearInterval(this.timer)
            // clearInterval(this.timer)
            // this.color && window.clearInterval(this.color)
            // clearInterval(this.color)
          }
          // console.log(newsholder.style.width)
        }, 20)
      },
      Dynamic_news_type(type) {
        clearInterval(this.timer)
        clearInterval(this.setTimeout)
        this.con_index++
        var news_type = document.getElementById('news_type')
        switch (type) {
          case 'nba' :
            news_type.style.transform = 'translateY(0px)'
            break
          case 'con' :
            news_type.style.transform = 'translateY(-36px)'
            break
          case 'text' :
            news_type.style.transform = 'translateY(-72px)'
            break
          case 'hon' :
            news_type.style.transform = 'translateY(-108px)'
            break
        }
        document.getElementById('newsholder').style.width = '0px'
        var y = document.querySelectorAll(".nbsp")
        for (var i = y.length - 1; i >= 0; i--) {
          y[i].style.opacity = '0'
        }
        if (this.con_index > 9) {
          this.con_index = 0
        }
        y[this.con_index].style.opacity = '1'

        this.Dynamic_news()
      },
      setcolor() {
        // var flasher = document.querySelector('.flasher')
        // this.timer = setInterval(() => {
        //   if (flasher.style.opacity == '0') {
        //     flasher.style.opacity = '1'
        //   } else {
        //     flasher.style.opacity = '0'
        //   }
        // }, 5000)
      },
      order_nba() {
        this.box1()
        const iscroll = this.$refs.iscroll
        iscroll.scrollTo(0, -425, 1000)
        iscroll.refresh()
      },
      order_bue() {
        this.box1()
        const iscroll = this.$refs.iscroll
        iscroll.scrollTo(0, -2529, 1000)
        iscroll.refresh()
      },
      order_tech() {
        this.box1()
        const iscroll = this.$refs.iscroll
        iscroll.scrollTo(0, -4745, 1000)
        iscroll.refresh()
      },
      watch() {
        var me = this
        var forEach = function (t, o, r) {
          if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
        }
        var hamburgers = document.querySelectorAll(".hamburger")
        if (hamburgers.length > 0) {
          forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
              this.classList.toggle("is-active")
              document.getElementById('main').classList.toggle("right")
              document.getElementById('navigation').classList.toggle("right")
              if (me.set_click === 'exit')
                me.icon_set_up()
              me.click_type = 'hambureger'
              if (me.set_humber === 'set-up') {
                document.getElementById('box').style.display = 'block'
                me.set_humber = 'exit'
              } else {
                document.getElementById('box').style.display = 'none'
                me.set_humber = 'set-up'
              }
            }, false)
          })
        }
        var isFirst = true
        var main = document.getElementById('main')
        main.addEventListener("transitionend", function () {
          if (isFirst) {
            document.getElementById('order').classList.toggle("open")
            document.getElementById('icon-af').classList.toggle("icon-af-is")
            document.getElementById('icon-af').classList.toggle("icon-af")
            isFirst = false
          } else {
          }
        }, false)
      },
      open_or() {
        document.getElementById('order').classList.toggle("open")
        document.getElementById('icon-af').classList.toggle("icon-af-is")
        document.getElementById('icon-af').classList.toggle("icon-af")
        this.isFirst = true
        // document.getElementById('icon-af').classList.toggle("open")
        // var beforeStyle = window.getComputedStyle(document.getElementById('icon-af'), ":before")
        // console.log(beforeStyle.transform)
        // beforeStyle.transform = 'rotate(180deg)'
      },
      addRippleEffect(e) {
        var target = e.target
        try {
          eval("this." + target.id + "()")
        }
        catch
          (err) {
        }
        if (!!(target.className.indexOf('btn'))) return false
        var rect = target.getBoundingClientRect()
        var ripple = target.querySelector('.ripple')
        if (!ripple) {
          ripple = document.createElement('span')
          ripple.className = 'ripple'
          ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
          target.appendChild(ripple)
        }
        ripple.classList.remove('show')
        var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop
        var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft
        ripple.style.top = top + 'px'
        ripple.style.left = left + 'px'
        ripple.classList.add('show')
        return false
      },
      btnre() {
        const self = this
        this.btn_count++
        document.getElementById('refresh').classList.toggle('refresh')
        this.fordate()
        setTimeout(function () {
          self.getjson('data-business', 'bueiness', 'news' + self.btn_count)
        }, 1900)
        // var btnre = document.getElementById('btnre')
        // this.addRippleEffect(btnre)
      },
      handleTouchStart(event) {
        cancelAnimationFrame(this.inertiaFrame)
        this.lastY = event.touches[0].clientY
      },
      handleTouchMove(event) {
        event.preventDefault()
        event.stopPropagation()
        this.touching = true
        this.startY = this.lastY
        this.currentY = event.touches[0].clientY
        this.moveFellowTouch()
      },
      moveFellowTouch() {
        this.translateY += this.currentY - this.lastY
        this.lastY = this.currentY
        document.getElementById('main_parent').style.transform = `translate3d(0px, ${this.translateY}px, 0px)`
      },
      icon_set_up() {
        this.click_type = 'set_up'
        var set = document.getElementById('icon-set-up')
        var exit = document.getElementById('icon-exit')
        var box = document.getElementById('box')
        var home = document.getElementById('home_set')
        if (this.set_click === 'set-up') {
          set.style.opacity = '0'
          exit.style.opacity = '1'
          box.style.display = 'block'
          home.style.maxHeight = '300px'
          home.style.width = '180px'
          home.style.right = '0'
          this.set_click = 'exit'
        } else {
          set.style.opacity = '1'
          exit.style.opacity = '0'
          box.style.display = 'none'
          home.style.maxHeight = '0px'
          home.style.width = '0px'
          home.style.right = '-100%'
          this.set_click = 'set-up'
        }
      },
      box1() {
        if (this.click_type === 'set_up') {
          this.icon_set_up()
        } else {
          document.getElementById('main').classList.remove("right")
          document.getElementById('navigation').classList.remove("right")
          document.getElementById('hamburger_remove').classList.remove("is-active")
          if (this.set_humber === 'set-up') {
            document.getElementById('box').style.display = 'block'
            this.set_humber = 'exit'
          } else {
            document.getElementById('box').style.display = 'none'
            this.set_humber = 'set-up'
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl'
  .home
    position relative
    height 100%
    overflow hidden
    .main
      position relative
      height 100%
      width 100%
      transition all 0.5s
      .box
        position fixed
        z-index 3
        width 100%
        height 100%
        overflow hidden
        background: rgba(7, 17, 27, 0.8)
        display none
      .scroll-view
        touch-action: none
        position: fixed
        top: 0
        bottom: 0
        left: 0
        right: 0
        overflow: hidden
        -webkit-overflow-scrolling: touch
      .header
        opacity 1
        h1
          border-1px(rgba(0, 0, 0, 0.2))
          padding 1em
        .remarks
          background: #f2e5da
          display: -webkit-flex
          display: flex
          -webkit-justify-content: space-around
          justify-content: space-around
          -webkit-align-items: flex-end
          align-items: flex-end
          width: 100%
          overflow: hidden
          padding 0 2em /*flex-direction: row
          background: #f2e5da
          !*height 20px*!*/
          div
            width: 66px
            height 66px
            -webkit-flex-shrink: 0
            flex-shrink: 0
            margin-right: 10.5px
            background: url("http://39.96.48.33/wordCloud/avatar.jpg") no-repeat
            -webkit-background-size: 100%
            background-size: 100%
          span
            text-align left
            font-weight: 400
            margin: 7px 0
            font-family: MetricWeb, sans-serif
            font-size: 12px
            line-height: 20px
            display: -webkit-box
            -webkit-line-clamp: 2
            overflow: hidden
            max-height: 40px
        .text_box
          width 100%
          display flex
          flex-direction row
          justify-content space-between
          line-height 36px
          height 36px
          .news
            position relative
            width 80%
            overflow hidden
            border-left 0px !important
            border-right 0px !important
            border 0.5px solid rgba(216, 205, 185, 1)
            color: #333
            font-weight 600
            .cover
              width: 100%
              height: 100%
              position: absolute
              bottom: 0
              left: 20px
              z-index: 2
              float: right
              .flasher
                width: 5px
                height: 5px
                padding-top .5em
                line-height: 28px
            /*margin-left: 5px*/
            ///*float: left*/

            .newsholder
              position relative
              left 20px
              width 0px
              overflow hidden
              text-align left /*animation:width 5s ease
              -moz-animation:width 5s ease
              -webkit-animation:width 5s ease
              -o-animation:width 5s ease*/

              li
                position absolute

          .type
            width 20%
            overflow hidden
            border 0.5px solid rgba(216, 205, 185, 1)
            border-right 0px !important
            ul
              transition all 1s cubic-bezier(0.175, 0.885, 0.320, .999)
    /*height 100%*/
    /*style="background-color: rgb(207, 41, 185);"*/
    .article
      padding 14px 14px 0 14px
      z-index 0
      .title
        z-index 0
        .bg
          position relative
          opacity .7
          background url("https://www.gannett-cdn.com/presto/2018/12/18/USAT/3408d8a3-5538-46c8-bc03-ac4f28d0425d-USP_NBA__Portland_Trail_Blazers_at_Los_Angeles_Cli.JPG")
          -webkit-background-size: 100%
          background-size: 100%
          height 18rem
          .bg_text
            position absolute
            bottom 0
            left 0
            right 0
            color #fff
            text-align left
            font-weight 400
            font-family: FinancierDisplayWeb, serif
            font-size: 28px
            line-height: 32px
            padding: 14px 10.5px 10.5px
            background-color: transparent
            background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .6) 50%, rgba(0, 0, 0, .6) 90%, rgba(0, 0, 0, .8))

        .line
          margin 1em 0 1em 0
          width 100%
          background: #000
          opacity .7
          height 0.6rem
      .inner
        min-height: 5512px
        height: auto
        .inner-type
          min-height: 205px
          height: auto
          ul
            opacity 1
            .headline
              background: #97143e
              display: block
              color white
              padding: 14px
              height auto
              border-1px(rgba(0, 0, 0, 0))
              margin-bottom 1em
              span
                font-family: MetricWeb, sans-serif
                font-size: 15px
                font-weight: 300
              .headtitle
                font-family: MetricWeb, sans-serif
                font-size: 16px !important
                /*line-height: 20px !important*/
                font-weight: 600 !important
            li
              opacity 1
              height 7rem
              padding 1em 0 1em 0
              border-1px(rgba(0, 0, 0, 0.2))
              box-sizing: content-box
            div
              display flex
              flex-direction row
              justify-content space-between
              text-align left
              box-sizing: content-box
              .avatar
                width 36%
                display inline-block
                /*background url("./con.jpg")*/
                -webkit-background-size: 100%
                background-size: 100%
                height 7rem
                margin-right 1em
                box-sizing: content-box
              a
                width 65%
                display inline-block
                font-family: FinancierDisplayWeb, serif
                font-size: 15px
                line-height: 20px
                word-break: break-all
                box-sizing: content-box
    .footer
      position absolute
      display flex
      justify-content space-between
      align-content center
      background #fff1e5
      bottom 0
      width 100%
      height 47px
      box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, .16)
      z-index: 4
    .navigation
      position absolute
      top 0
      left -25rem
      height 100%
      width 25rem
      transition all 0.5s
      background: #4d4845
      opacity 0.7
      h2
        margin: 0
        padding: 2em
        color: rgba(0, 0, 0, .4)
        text-shadow: 0 0 1px rgba(0, 0, 0, .1)
        font-weight: 300
        font-size: 2em
      .icon
        speak none
        border-1px(rgba(255, 255, 255, 0.2))
        &::before
          margin-right: 0.8em
      .icon-data
        position relative
        display: block
        padding: 0.8em 1em 0.8em 1.2em
        outline: 0
        /*box-shadow: inset 0 -1px rgba(0,0,0,.2)*/
        border-1px(rgba(255, 255, 255, 0.2))
        color: #f3efe0
        text-shadow: 0 0 1px rgba(255, 255, 255, .1)
        letter-spacing: 1px
        font-weight: 400
        -webkit-transition: background .3s, box-shadow .3s
        transition: background .3s, box-shadow .3s
        text-decoration: none
        text-align left
        outline 0
        font-size 15px
        &::before
          text-transform: none
          line-height: 1
          display: inline-block
          vertical-align: bottom
          margin-right: 0.8em
          font-size: 20px
          -webkit-font-smoothing: antialiased
        .icon-af
          pointer-events: none
          &::before
            display: block
            position: absolute
            font-size 16px
            bottom 1rem
            right 1rem
            transform rotate(180deg)
            pointer-events: auto
            -webkit-transition: all 1s
            transition: all 1s
      .order
        opacity 1
        max-height 0
        overflow hidden
        transition all 0.9s
        li:nth-child(1)
          background: white
          color black
          opacity 0.7
        li
          /*box-shadow: inset 0 -1px rgba(255,255,255,.2)*/
          padding: 0.7em 0.7em 0.7em 5.2em
          text-align left
          text-shadow: 0 0 1px rgba(255, 255, 255, .1)
          font-weight: 400
          color: #f3efe0
          font-size 12px
          background: #322f2d
          line-height 20px
          border-bottom: .2px solid white
          .path1, .path2
            text-transform: none
            line-height: 1
            display: inline-block
            vertical-align: bottom
            margin-left: 0.4em
            font-size: 20px
            -webkit-font-smoothing: antialiased
          .path2
            margin-left 0 !important
            margin-right 0.4em

    .home_set
      position fixed
      bottom 47px
      right -100%
      max-height 50px
      width: 50px
      box-sizing: border-box
      overflow hidden
      z-index 4
      transition all 1s cubic-bezier(0.175, 0.885, 0.320, .999)
      ul
        li
          background #252c32
          color white
          padding 1em
          font-weight 400
          text-transform capitalize
          text-align left
          vertical-align: middle
          font-size 15px
          line-height: 15px
          border-1px(rgba(255, 255, 255, 0.2))
          white-space nowrap
          p
            display inline-block
          &::before
            font-size 18px
            margin-right: 1em
            width 1em
          .path1, .path2
            &::before
              font-size 18px
              margin-right: 10.5px
        li:nth-child(4)
          background: #095f65

  .hamburger
    padding: 15px 15px
    transition-property: opacity, filter, -webkit-filter
    transition-duration: 0.15s
    transition-timing-function: linear
    font: inherit
    color: inherit
    text-transform: none
    background-color: transparent
    border: 0
    margin: 0
    overflow: hidden
    position relative
    .hamburger-box
      width: 40px
      height: 32px
      display: inline-block
      position: relative
      .hamburger-inner
        display: block
        top: 50%
        margin-top: -2px

  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
    width: 30px
    height: 3px
    background-color: #000
    border-radius: 4px
    position: absolute
    transition-property: -webkit-transform
    transition-property: transform
    transition-property: transform, -webkit-transform
    transition-duration: 0.15s
    transition-timing-function: ease

  .hamburger-inner::before, .hamburger-inner::after
    content: ""
    display: block

  .hamburger-inner::before
    top: -8px

  .hamburger--collapse-r
    .hamburger-inner
      top: auto
      bottom: 0
      transition-duration: 0.15s
      transition-delay: 0.15s
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)

  .hamburger--collapse-r
    .hamburger-inner::after
      top: -16px
      transition: top 0.3s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear

  .hamburger--collapse-r
    .hamburger-inner::before
      transition: top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)
      transition: top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)
      transition: top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)

  .hamburger--collapse-r.is-active
    .hamburger-inner
      -webkit-transform: translate3d(0, -10px, 0) rotate(45deg)
      transform: translate3d(0, -10px, 0) rotate(45deg)
      transition-delay: 0.32s
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)

  .hamburger--collapse-r.is-active
    .hamburger-inner::after
      top: 0
      opacity: 0
      transition: top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.27s linear

  .hamburger--collapse-r.is-active
    .hamburger-inner::before
      top: 0
      -webkit-transform: rotate(90deg)
      transform: rotate(90deg)
      transition: top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.15s 0.42s cubic-bezier(0.215, 0.61, 0.355, 1)
      transition: top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.42s cubic-bezier(0.215, 0.61, 0.355, 1)
      transition: top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.42s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s 0.42s cubic-bezier(0.215, 0.61, 0.355, 1)

  .padding
    padding: 12px 15px 0 12px
    display: inline-block
    font-size 24px
    line-height 24px
    position relative
    overflow hidden
    pointer-events: auto
    color black
    .icono-gear
      opacity 1
    .click_none
      pointer-events: none

  .icon-par
    position relative
    width 24px
    .icon-exit
      transform rotate(180deg)
      opacity 0
      &::before
        opacity 1
    div
      position absolute

  .updated
    font-size 15px
    font-weight 600
    white-space:nowrap

  .refresh
    /*transition all 1s cubic-bezier(0.175, 0.885, 0.320, .999)*/
    animation: refresh .75s ease-out
    animation-iteration-count infinite

  .right
    transform: translateX(25rem) !important
    -webkit-transform: translateX(25rem) !important

  .open
    max-height 200px !important
    transition: all 0.9s

  .icon-af-is
    pointer-events: none
    &::before
      display: block
      position: absolute
      font-size 16px
      bottom 1rem
      right 1rem
      transform rotate(360deg)
      pointer-events: auto
      -webkit-transition: all 1s
      transition: all 1s

  a
    text-decoration none
    color: #333
    font-weight 600

  li
    list-style: none
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .refreshbox
    width 70%
    height 2.8rem
    line-height 2.8rem
    border-radius 4px
    position fixed
    bottom 60px
    background: white
    display block
    padding 0 1em
    left: 50%
    transform translate3d(-50%, 0, 0)
    font-family: MetricWeb, sans-serif
    font-size: 14px
    text-transform capitalize
    font-weight 700
    box-shadow: 0 -1px 3px 0 rgba(255, 255, 255, .16)
    opacity: 0
    transition: opacity 1s cubic-bezier(0.175, 0.885, 0.320, .999)

  .ripple
    position: absolute
    background: rgba(0, 0, 0, .15)
    border-radius: 10%
    transform: scale(0)
    pointer-events: none

  .ripple.show
    animation: ripple .75s ease-out

  @keyframes ripple
    to {
      transform: scale(9)
      opacity: 0.6
    }

  @keyframes refresh
    to {
      transform: rotate(360deg)
      opacity: 0.6
    }

  @keyframes width
    0% {
      width: 0px
    }
    25% {
      width: 80px
    }
    50% {
      width: 160px
    }
    75% {
      width: 240px
    }
    100% {
      width: auto
    }
</style>
