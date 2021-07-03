<template>
  <div id="app">

<div class="routing-animation-container" v-if="isRouting()">


<div :style="getRandomFillStyle()" class="routing-animation-container-back"></div>

  <lottie-animation :loop="false" :speed="1" :height="-1" :width="-1" 
    path="js/page-Trans.json"
/>
</div>

<!--<div class="stats">
    wow
{{cursorObj}}
  </div>

    <BlobCursor :cursorObj="cursorObj"/>-->

    <div class="overlay"></div>
    <div class="circle"></div>
    <div class="cursor">
      <svg viewBox="0 0 340 440" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
	<path d="M0 180H60V200H80V20h20V0h40V20h20v80h40v20h60v20h40v20h20v20h20V320H320v60H300v60H100V380H80V340H60V300H40V260H20V240H0V180"/>
	<path fill="#fff" d="M20 200H60V220H80v60h20V20h40V200h20V120h40v80h20V140h40v80h20V160h20V180h20V320H300v60H280v40H120V380H100V340H80V300H60V260H40V240H20V200"/>
</svg>
    </div>

    <Top/>

    <transition mode="out-in" name="slide-in-left">
    <Dismissable v-if="popupShown()"></Dismissable>
    </transition>

    <transition name="fade"
        mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Dismissable from './components/Dismissable.vue'
import Top from './components/Navs/TopNav/Top'
//import { interpret } from 'xstate';
//import { scrollMachine } from './states/scrollMachine';
import BlobCursor from './components/Cursor/BlobCursor';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  name: 'App',
  components: {
    Top,
    Dismissable,
    BlobCursor,
    LottieAnimation
  },
 
  created () {

    /*this.scrollService
      .onTransition(state => {
        this.current = state;
      })
      .start();*/


document.addEventListener("mousemove", this.moveCursor);
    // eslint-disable-next-line no-unused-vars
    document.addEventListener('mouseleave', e => {
      
      this.cursorObj.hide = true;
    });
    // eslint-disable-next-line no-unused-vars
    document.addEventListener('mouseenter', e => {
      
      this.cursorObj.hide = false;
    });

      window.addEventListener('scroll', this.handleScroll);

    window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    },
  methods: {
    getRandomFillStyle() {
      console.log('color');
      const colours = ['#F4A261'];
      return { 'fill': colours[Math.floor(Math.random() * colours.length)] };
    },
    finishRoutingAnimation() {
      this.$store.dispatch('setRouting', false);
      },
    handleScroll (event) {
      this.$store.dispatch('setScrolling', { scrolled: true, timestamp: event.timestamp } );

      window.clearTimeout(this.isScrolling);

      this.isScrolling = setTimeout(() => {

        if (this.$store.state.scrolling.scrolled && this.$store.state.scrolling.timestamp === event.timestamp) {
          this.$store.dispatch('setScrolling', { scrolled: false, timestamp: 0 });
         
        }
      }, 4000);
    },
    popupShown() {
      return this.$store.state.popup_shown;
    },
    handleResize() {
            this.$store.dispatch('setWindow', { width: window.innerWidth, height: window.innerHeight});
        },

        moveCursor(e) {
      this.cursorObj.xChild = e.clientX;
      this.cursorObj.yChild = e.clientY;
      setTimeout(() => {
        this.cursorObj.xParent = e.clientX - 15;
        this.cursorObj.yParent = e.clientY - 15;
      }, 100);
    },

    isRouting() {
      return this.$store.state.routing;
      }
  },
  data () {
    return {
      //scrollService: interpret(scrollMachine),
      //current: scrollMachine.initialState,
        isScrolling: null,
      popup: {
      },
      popup_shown: false,
      cursorObj: {
        xChild: 0,
        yChild: 0,
        e: null,
        xParent: 0,
        yParent: 0,
        hide: false,
        hover: false
      }
    }
  }
}
</script>

<style>

.routing-animation-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 10000;
  transform:scale(2.25);
  background-color: transparent;
  animation: router 2.5s ease-in-out;

  }



  .routing-animation-container-blob {
    position: fixed;
    width: 120%;
    height: 120%;
    top: 0px;
    left: -10%;
    animation: router-blob 2.5s;
    z-index: 10001;
    opacity: 0;

    }

  @keyframes router {
    0% {
      top: 0px;

      }

60% {
  top: 0px;
  }





  100% {
top: 150%;
    }
    }

    @keyframes router-blob {

    0% {
      opacity: 0;
      top: 0px;

      }

60% {
  opacity: 0;
  top: 0px;
  }

61% {
  opacity: 1;
  top: 0px;
  }

  95% {
  opacity: 1;
  top: 0px;
  }



  100% {
    opacity: 1;
top: 150%;
    }
    }


  @media (max-width: 800px) {
    .routing-animation-container {
      transform: scale(3.5);
      }
    }

    @media (min-width: 1300px) {
    .routing-animation-container {
      transform: scale(1.5);
      }
    }


rect {
  fill: var(--charcoal);
  }


  .routing-animation-container div svg {
    width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

    }


.stats {
position: fixed;
top: 0px;
left: 0px;
width: 300px;
height: 300px;
background-color: blue;
    }

body {
  overflow-x: hidden;
  }


#app {
  padding: 60px;
  
}


.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform:translate(-50%, -50%);
  width: 0px;
  height: 0px;
  border-radius: 50%;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 1);
  animation: start 5.5s;
  z-index: 1000;
}

.cursor {
  position: absolute;
  transform:translate(0%, 0%);
  width: 16px;
  height: 16px;
  opacity: 0;
  animation: move 4s;
  animation-delay: 0s;
  z-index: 1000;
}

.circle {

position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
width: 0px;
height: 0px;
border-radius: 50%;
animation: click .5s;
animation-delay: 3s;
background-color: rgba(255, 255, 255, 1);
z-index: 1000;
}

@keyframes click {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0);
  }
}

@keyframes move {
  0% {
    opacity: 1;
    top: 0px;
    left: 0px;
  }

  40% {
    opacity: 1;
    top: 20%;
    left: 40%;
  }

  60% {
    opacity: 1;
    top: 30%;
    left: 50%;
  }

  75% {
    opacity: 1;
top: 50%;
  left: 50%;
    transform:translate(-50%, -50%);
  }

  85% {
    opacity: 1;
    top: 50%;
  left: 50%;
    transform:translate(-50%, -50%);
  }

  86% {
    opacity: 0;
    top: 50%;
  left: 50%;
    transform:translate(-50%, -50%);
  }
}

@keyframes start {
  0% {
    opacity: 1;
    width: 0px;
  height: 0px;
  }
  63.6% {
   opacity: 1;
    width: 0px;
  height: 0px; 
  }
  90% {
    opacity: 1;
    width: 100vw;
  height: 100vw;
  }
  95% {
    opacity: 1;
    width: 200vw;
  height: 200vw;
  }
  100% {
    opacity: 0;
    width: 200vw;
  height: 200vw;

  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


.slide-in-left-enter-active {
  animation: slide-in-left .5s;
}
.slide-in-left-leave-active {
  animation: slide-in-left .5s reverse;
}
@keyframes slide-in-left {
  0% {
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
}
</style>
