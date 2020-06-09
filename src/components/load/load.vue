<template>
  <div id="wc-loading">
    <div class="wc-icon">
    <span class="wc-icon-cloud"></span>
    </div>
    <div class="splash_slot-2">
						<div class="inner">
							<div class="splash_load-text" id="splashloadtext">
								<h5 class="splash_load-message-title">Unable to start</h5>
								<!--<div class="splash_load-message-body">-->
								<!--&lt;!&ndash;<span id="load-bar" class="load-bar"></span>&ndash;&gt;-->
<!--</div>-->
							</div>

							<div class="progress-bar-simple structureprogress splashloadimage bootstrapprogress" style="display: none;">
								<div class="inner"></div>
							</div>
							<router-link to="/home" tag="div" class="splash_buttons">
								<button class="ui-simple-btn" id="structurehidebutton" style="display: inline-block;">
									<span id="hidebarrierbuttontext">Try again</span>
									<span id="hidebarrierbuttoncount"></span>
								</button>
							</router-link>
						</div>
					</div>
    <div class="splash_slot-3">
					<div class="nikkei-bar"></div>
				</div>
</div>






</template>

<script type="text/ecmascript-6">
  export default {
    mounted() {
      // this.setbar()
    },
    methods:{
      setbar(){
        var load = document.getElementById('load-bar')
        this.timer = setInterval(() => {
          console.log(load.offsetLeft)
          load.style.width = load.offsetLeft + 1 + 'px'
        }, 10)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /* html
     height: 100%
     overflow-x: hidden

   body
     font: 14px sans-serif
     line-height: 16px
     border: none
     padding: 0
     margin: 0
     color: #333
     min-height: 100%
     overflow-x: hidden
     background: #d9dddf
     background: linear-gradient(#b4bcbf, #ffffff) no-repeat
     background: -webkit-linear-gradient(#b4bcbf, white) no-repeat*/

  #wc-loading
    width 100%
    height 100%
    position relative

  @keyframes shake
    0%, 50% {
      transform: translateX(0)
    }

    5%, 15%, 25%, 35%, 45% {
      transform: translateX(-10px)
    }

    10%, 20%, 30%, 40% {
      transform: translateX(10px)
    }

  @-webkit-keyframes shake
    0%, 50% {
      -webkit-transform: translateX(0)
    }

    5%, 15%, 25%, 35%, 45% {
      -webkit-transform: translateX(-10px)
    }

    10%, 20%, 30%, 40% {
      -webkit-transform: translateX(10px)
    }

  .wc-icon
    position: absolute
    top: 25%
    left: 50%
    margin: -16.665px 0 0 -43.5px
    display: block
    width: 100px
    height: 33.33px
    font: 100px Times, serif
    font-weight: bold
    line-height: 1em
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.1)
    color: #000

  .wc-icon::before, .wc-icon::after
    content: 'W'
    position: absolute
    display: block
    top: -15.55178px
    overflow: hidden

  .wc-icon::before
    left: -13px
    width: 38px

  .wc-icon::after
    right: 13px
    width: 62px
    text-indent: -38px
    z-index: 3

  .wc-icon-cloud
    position: absolute
    display: block
    background-color: #fff
    width: 100px
    height: 33.33px
    border-radius: 33.33px
    box-shadow: inset 0 -2.5px rgba(255, 255, 255, 0.6), 0 5px 5px rgba(0, 0, 0, 0.1), inset 0 -5px 5px rgba(0, 100, 160, 0.1)
    z-index: 2
    animation: shake 2s infinite
    -webkit-animation: shake 2s infinite

  .wc-icon-cloud:before, .wc-icon-cloud:after
    content: ''
    position: absolute
    background-color: #fff
    border-radius: 100%
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.05)

  .wc-icon-cloud:before
    width: 31.11px
    height: 31.11px
    top: -13.332px
    left: 15.555px

  .wc-icon-cloud:after
    width: 51.11px
    height: 51.11px
    top: -24.44089px
    right: 13.33px

  /*#popup-image*/
  /*width: 100%*/
  /*height: auto*/
  .splash_slot-2
    position relative
    top 300px
    height: 50%
    margin: 0 auto
    padding: 0
    .inner
      position absolute
      top 40%
      left 50%
      transform translate3d(-50%, -50%, 0)
      .splash_load-text
        max-width: calc(4 * (45px + 8vmin))
        line-height: 1.3
        text-align: center
        margin-bottom: 20.5px
        .splash_load-message-title
          margin-bottom: 7px
          font-weight: bold
          color: #262a33
          font-size 15px
        .splash_load-message-body
          position relative
          width 20rem
          height 10px
          border-color: #262a33
          border 1px solid black
          background-color: rgba(0, 0, 0, 0)
          .load-bar
            position absolute
            left 0
            top 2px
            width 0px
            height 6px
            background: black
            margin-bottom 1em
      .splash_buttons
        background-color: rgba(0, 0, 0, 0)
        color: #262a33
        border-color: #262a33
        text-align: center
        .ui-simple-btn
          padding .4em
          font-size: 14px
          line-height: 14px
          box-shadow: none
          color: #262a33
          border-color: #262a33
          border 1px solid black
          background-color: rgba(0, 0, 0, 0)

  .splash_slot-3
    box-sizing: border-box
    position: absolute
    right: 0
    left: 0
    bottom: 10vh
    .nikkei-bar
      box-sizing: border-box
      width 133px
      height 133px /*width: calc(65px + 12vmin)
      height: calc((65px + 12vmin) * .11656)*/
      background: url("./bgcon.png")
      background-size 100%
      background-repeat no-repeat
      margin: 0 auto
      background-position: bottom


</style>
