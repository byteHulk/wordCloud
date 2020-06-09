<template>
  <div class="bo">
    <router-link to="/home" tag="i" class="close"></router-link>
    <div class="bao login-form-webapp">
      <div class="just">
        <div><h1 @click="s_click()" id="h1s">Sign in</h1></div>
        <div><h1 @click="c_click()" id="h1c">Create new</h1></div>
      </div>
      <div class="forms sign" id="sign">
        <div class="form">
          <!--<label for="text" class="margin">Account</label>-->
          <input id="text" type="text" class="margin padding" placeholder="Enter your account"/>
          <!--<label for="password" class="password margin">Password</label>-->
          <input id="password" type="password" class="margin padding" placeholder="Enter your password"/>
          <a class="margin">Forgot password</a>
          <button class="btn margin">Sign in</button>
          <button class="btn blue margin">Sign In With Facebook</button>
        </div>
      </div>
      <div class="forms creat" id="creat">
        <div class="form">
          <!--<label for="c_text" class="margin">Account</label>-->
          <input id="c_text" type="text" class="margin padding" placeholder="Enter your account"/>
          <!--<label for="invite" class="invite margin">invite</label>-->
          <input id="c_password" type="password" class="margin padding" placeholder="Enter your password"/>
          <input id="invite" type="text" class="margin padding" placeholder="Enter your invite"/>
          <!--<label for="c_password" class="password margin">Password</label>-->
          <button class="btn margin" @click="c_click">CREATE NEW</button>
          <button class="btn margin" @click="c_click">CREATE NEW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  var sign = document.getElementById('sign')
  var creat = document.getElementById('creat')
  var arr = document.getElementsByClassName("forms")
  export default {
    data() {
      return {
        c_index: 1
      }
    },
    created() {
    },
    mounted() {
      this.s_click()
      this.bindEvent()
      // this.height()
    }
    ,
    methods: {
      bindEvent(){
        document.addEventListener('click', this.addRippleEffect, false)
      },
      close() {
        alert(document.documentElement.clientWidth)
        alert(document.documentElement.clientHeight)
      },
      c_click() {
        if (this.c_index) {
          document.getElementById('h1c').classList.remove('opacity')
          document.getElementById('h1s').classList.add('opacity')
          arr[0].classList.add('sign_right')
          arr[1].classList.add('right')
          // arr[1].classList.remove('gnore')
          // alert(window.navigator.standalone)
        }
      }
      ,
      s_click(element) {
        if (this.c_index) {
          document.getElementById('h1c').classList.add('opacity')
          document.getElementById('h1s').classList.remove('opacity')
          arr[0].classList.remove('sign_right')
          arr[1].classList.remove('right')
          // arr[1].classList.add('gnore')
          // arr[0].classList.remove('gnore')
        } else {
        }
      },
      addRippleEffect(e) {
        var target = e.target
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
      }
      // height() {
      //   window.addEventListener('DOMContentLoaded', function () {
      //     var page = document.getElementById('page'),
      //       nav = window.navigator,
      //       ua = nav.userAgent,
      //       isFullScreen = nav.standalone
      //     if (ua.indexOf('Android') !== -1) {
      //       // 56对应的是Android Browser导航栏的高度
      //       page.style.height = window.innerHeight + 56 + 'px'
      //     } else if (/iPhone|iPod|iPad/.test(ua)) {
      //       // 60对应的是Safari导航栏的高度
      //       page.style.height = window.innerHeight + (isFullScreen ? 0 : 60) + 'px'
      //     }
      //     setTimeout(scrollTo, 0, 0, 1)
      //   }, false)
      //   // $('#main').css("height", window.innerHeight + 100)
      //   // window.scrollTo(0, 1)
      //   // 重置成新高度$("#main").css("height", window.innerHeight)//非常重要,用于兼容不同机型,防止浏览器窗口移动
      //   // document.addEventListener('touchmove', function (e) {
      //   //   e.preventDefault()
      //   // }, false)
      // }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .bo
    position relative
    height 100%
    font-size: 14px
    .close
      color: #000
      font-style: normal
      display: block
      position: absolute
      z-index: 2
      top: 0
      right: 0
      font-size: 4em
      padding-top 0.2em !important
      padding: .4em
      line-height: 1
      /*position: absolute*/
      /*top: 2rem*/
      /*right: 2rem*/
      /*width 2.6rem*/
      /*height 2.6rem*/
      /*background-image url("./close.svg")*/
      /*background-repeat no-repeat*/
      /*-webkit-background-size: 100% 100%*/
      /*background-size: 100% 100%*/
      &::after
        content "×"
    .bao
      position absolute
      bottom 0
      padding-bottom 94px
      padding 0 28px 28px
      max-width: 400px
      box-sizing border-box
      border-radius 5%
      width 100%
      background-color rgba(255, 255, 255, 0)
      max-height 450px
      transition all 5s
      overflow hidden
      .just
        position relative
        width 100%
        height 28px
        margin-bottom: 14px
        div
          h1
            font-size: 24px
            line-height: 28px
            color rgba(0, 0, 0, .8)
            order 0
            text-align left
            display inline
        div:nth-child(1)
          position absolute
          left 0
        div:nth-child(2)
          position absolute
          right 0
    .forms
      display flex
      flex-direction column
      /*justify-content space-between*/
      .form
        transition all 0.5s
      a
        text-decoration: none
        border-bottom: 1px solid #0a5e66
        display: block
        font-size: 16px
        margin-left 8rem
        margin-right 8rem
        padding-bottom: 0.1rem
        order 2
        color #0a5e66
      button
        position relative
        overflow hidden
        outline none
        order 3
        display block
        width 100%
        height 3.4rem
        line-height 3.4rem
        background: #0a5e66
        margin-top 2rem
        border-color: transparent
        color white
        font-size 1.5rem
        box-shadow: 0 1px 3px rgba(0, 0, 0, .25)
        text-shadow: 0 -1px 1px rgba(0, 0, 0, .25)
    .sign
      position relative
      z-index 0
      /*border:0.1px #a5b6c8*/
      /*box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1)*/
      transform-origin: left
      transition all 0.5s
      float right
      div
        order 1
        flex-grow 9
        label
          float: left
          /*margin-left 1.7rem*/
          margin-bottom 0.2rem
          font-size 1.4rem
          color rgba(128, 128, 128, 1)
        .password
          /*margin-top 2rem*/
        input
          width 100%
          height: 38px
          border: 0.5px solid rgba(128, 128, 128, 0.8)
          outline: none
      .blue
        background: skyblue
    .creat
      position relative
      z-index 1
      /*top 25%*/
      /*box-shadow 0px -1px 4px 0px rgba(0, 0, 0, 0.1), -1px 0px 4px 0px rgba(0, 0, 0, 0.1), 2px 0px 4px 0px rgba(0, 0, 0, 0.1), 0px 2px 4px 0px rgba(0, 0, 0, 0.1)*/
      /*transform-origin: left*/
      transition all 0.5s
      -webkit-transform: translateX(-375px)
      transform: translateX(-375px)
      &::after
        content ""
        clear both
      div
        position absolute
        order 1
        flex-grow 9
        /*padding-top 1em*/
        label
          float: left
          /*margin-left 1.7rem*/
          margin-bottom 0.2rem
          font-size 1.4rem
          color rgba(128, 128, 128, 1)
        .invite
          margin-top 8.02px
        .password
          margin-top 0px
        input
          width 26.3rem
          height: 38px
          border: 0.5px solid rgba(128, 128, 128, 0.8)
          outline: none
      span
        order 3
        margin-bottom 0.2rem
        font-size 1.5rem

  .gnore
    transform scale(.88) translateX(-165px) !important
    z-index 0 !important

  .margin
    margin-top 21px

  .login-form-webapp
    padding-bottom 84px !important

  .right
    -webkit-transform: translateX(0) !important
    transform: translateX(0) !important

  .sign_right
    -webkit-transform: translateX(375px) !important
    transform: translateX(375px) !important

  .ripple
    position: absolute
    background: rgba(0, 0, 0, .15)
    border-radius: 100%
    transform: scale(0)
    pointer-events: none

  .ripple.show
    animation: ripple .75s ease-out

  @keyframes ripple
    to {
      transform: scale(2)
      opacity: 0
    }
  .opacity
    opacity 0.2
  .padding
    padding: 10px 8px
</style>
