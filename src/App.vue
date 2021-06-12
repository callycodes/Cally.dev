<template>
  <div id="app">

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
    <router-view @show-popup="showPopup"/>
    </transition>
  </div>
</template>

<script>
import Dismissable from './components/Dismissable.vue'
import Top from './components/Navs/TopNav/Top'

export default {
  name: 'App',
  components: {
    Top,
    Dismissable
  },
  methods: {
    popupShown() {
      return this.$store.state.popup_shown;
    }
  },
  data () {
    return {
      popup: {
      },
      popup_shown: false
    }
  }
}
</script>

<style>
#app {
  padding: 60px;
  overflow-x: hidden;
  
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
