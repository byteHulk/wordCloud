<template>
  <div id="app">
    <transition :name="fade" mode="out-in">
      <router-view></router-view>
      <!--<component v-bind:is="view" keep-alive @text="view='v-bus'"></component>-->
    </transition>
  </div>
</template>

<script>
  import content from './components/content/content'
  import login from './components/login/login'
  import homepage from './components/homepage/homepage'

  export default {
    components: {
      'v-content': content,
      'v-login': login,
      'v-homepage': homepage
    },
    data() {
      return {
        view: 'v-homepage',
        routeName: this.$route.name,
        fade: null
      }
    },
    mounted() {
      this.bindEvent()
    },
    watch: {
      '$route'(to, from) {
        this.routeName = this.$route.name
        if (to.meta.index > from.meta.index) {

          this.fade = 'slide-left'
        } else if (to.meta.index == from.meta.index){
          this.fade = 'slide-top'
        } else {
          this.fade = 'slide-right'
        }
      }
    },
    methods: {
      bindEvent() {
        document.addEventListener('touchmove', function (event) {
          event.preventDefault()
        }, false)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl'
  body, html
    margin 0
    padding 0
    width 100%
    height 100%
    background-color: #fff1e5
    text-size-adjust none c
    -webkit-text-size-adjust: none

  /*background: -webkit-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%)
  background: -moz-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%)
  background: -o-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%)
  background: -ms-linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%)
  background: linear-gradient(top, rgb(203, 235, 219) 0%, rgb(55, 148, 192) 120%)*/
  *
    margin 0
    padding 0

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    width 100%
    height 100%

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    /*position: absolute;*/
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-top-enter-active,
  .slide-top-leave-active,
  .slide-top-enter-active,
  .slide-top-leave-active {
    will-change: transform;
    transition: all 500ms;
    /*position: absolute;*/
  }

  .slide-top-enter {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  .slide--top-active {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
</style>
