<template>
  <div id="boggle">

<div class="menu">

  <div class="b-btn-container">
<button class="b-btn font-montserrat fw-800" @click="shake">Shake</button>
    </div>

      <div class="b-btn-container">
<button class="b-btn font-montserrat fw-800" @click="rotate('anti')">Rotate Left</button>
    </div>

     <div class="b-btn-container">
<button class="b-btn font-montserrat fw-800" @click="rotate('clockwise')">Rotate Right</button>
    </div>

</div>

<div class="timer">

  <div class="timer-container">
<span class="font-montserrat fw-800 fs-30">{{formattedTimeLeft}}</span>
    </div>

      <div class="b-btn-container">
<button v-if="timerPaused" class="b-btn font-montserrat fw-800" @click="startTimer">Start</button>
    </div>

     <div class="b-btn-container">
<button v-if="!timerPaused" class="b-btn font-montserrat fw-800" @click="pauseTimer">Pause</button>
    </div>

    <div class="b-btn-container">
<button class="b-btn font-montserrat fw-800" @click="rotate('clockwise')">Reset</button>
    </div>

</div>


<b-container class="cube-grid" v-bind:class="rotation" @animationend="endAnimations()">
  <b-row cols="4" style="padding: 0; margin: 0">
    <b-col class="cube-grid-item" v-for="item in boggle_grid_size" :key="item">
      
      
<div class="cube">
    <div class="top">
      <transition name="fade">
      <span v-if="notAnimated()" class="font-montserrat fw-800">{{getLetter(item)}}</span>
      </transition>
    </div>
  </div>
  

    </b-col>
  </b-row>
</b-container>




</div>
  
</template>

<script>

export default {
  components: {
    
  },

  computed: {
    rotation: function () {
    return {
      'rotate-clockwise': this.direction === 'clockwise',
      'rotate-anti': this.direction === 'anti',
      'shake': this.shaking
    }
  },
  formattedTimeLeft() {
      const timeLeft = this.timeLeftComp
      const minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      return `${minutes}:${seconds}`
    },
    timeLeftComp() {
      return this.timeLimit - this.timePassed
    }
  },
  data () {
    return {
      boggle_grid_size: 16,
      letters: [],
      shaking: false,
      rotating: false,
      direction: null,
      timeLimit: 150,
      timePassed: 0,
      timerInterval: null,
      timerPaused: true
    }
  },

  mounted () {
    this.letters = [this.boggle_grid_size]
    this.generateLetter()
    this.shuffleArray(this.letters)
    this.countdown()
  },
  methods: {
    startTimer() {
      this.timerPaused = false
      this.timerInterval = setInterval(() => {
        if (this.timePassed >= this.timeLimit) {
          clearInterval(this);
        }
        if (!this.timerPaused) {
          this.timePassed += 1
        }
      }, 1000);
    },
    pauseTimer() {
      this.timerPaused = true
    },
    countdown() {
      let today = new Date()
      this.currentTime = today.setTime(today.getTime())
      if (this.currentTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    },
    notAnimated () {
      if (this.shaking || this.rotating) {
        return false 
      } else {
        return true;
      }
    },
    endAnimations () {
      this.shaking = false
      this.rotating = false
      this.direction = null
    },
    getLetter (index) {
      return this.letters[index-1]
    },
    rotate (dir) {
      this.rotating = true
      this.direction = dir
      var copy = [16]
      for (var x = 0; x < 16; x++) {
        copy[x] = this.letters[x]
      }
      let positions = [
        [0, 3],
        [1, 7],
        [2, 11],
        [3, 15],
        [4, 2],
        [5, 6],
        [6, 10],
        [7, 14],
        [8, 1],
        [9, 5],
        [10, 9],
        [11, 13],
        [12, 0],
        [13, 4],
        [14, 8],
        [15, 12]
      ]

      if (dir === 'clockwise') {
        for (var i = 0; i < 16; i++) {
          this.letters[positions[i][1]] = copy[positions[i][0]]
        }
      } else {
        for (var z = 0; z < 16; z++) {
          this.letters[positions[z][0]] = copy[positions[z][1]]
        }
      }

      

    },
    shake () {
      this.shaking = true
      this.generateLetter()
      this.shuffleArray(this.letters)
    },
    generateLetter () {
      const dices = [
        ['R', 'I', 'F', 'O', 'B', 'X'],
        ['I', 'F', 'E', 'H', 'E', 'Y'],
        ['D', 'E', 'N', 'O', 'W', 'S'],
        ['U', 'T', 'O', 'K', 'N', 'D'],
        ['H', 'M', 'S', 'R', 'A', 'O'],
        ['L', 'U', 'P', 'E', 'T', 'S'],
        ['A', 'C', 'I', 'T', 'O', 'A'],
        ['Y', 'L', 'G', 'K', 'U', 'E'],
        ['Qu', 'B', 'M', 'J', 'O', 'A'],
        ['E', 'H', 'I', 'S', 'P', 'N'],
        ['V', 'E', 'T', 'I', 'G', 'N'],
        ['B', 'A', 'L', 'I', 'Y', 'T'],
        ['E', 'Z', 'A', 'V', 'N', 'D'],
        ['R', 'A', 'L', 'E', 'S', 'C'],
        ['U', 'W', 'I', 'L', 'R', 'G'],
        ['P', 'A', 'C', 'E', 'M', 'D']
      ]

      for (let dice_num in dices) {
        let dice = dices[dice_num]
        this.letters[dice_num] = dice[Math.floor(Math.random() * dice.length)]
      }
    },

    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

}
</script>

<style scoped>

#boggle {
  padding: auto;
}

.b-btn {
  font-size: 10px;
  color: black;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  border: none;
  margin-bottom: 20px;
}

.timer-container {
  color: black;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 60px;
}


.cube-grid-item {
  width: 200px;
  height: 200px;

  padding: 15px;
}

.cube-grid {
  max-width: 850px;
  padding: 20px;
  background: #f4a261;
   border-radius: 20px;
}


.cube {
width: 100%;
height: 100%;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.cube .top {
  width: 100%;
background: white;
border-radius: 10px;
height: 100%;
text-align: center;
line-height: 180px;
}

.cube .top span {
  font-size: 70px;
}

.test {
  background-color: red;
}

.rotate-clockwise {
  animation: rotate-clockwise-anim 1s;
}

.rotate-anti {
  animation: rotate-anti-anim 1s;
}

.shake {
  animation: shake 1s;
}

.menu {
  position: absolute;
  left: 50px;
  top: 40%;
  padding: 20px;
  border-radius: 10px;
  background-color: #f4a261;
  width: 200px;
  height: 400px;
  
}

.timer {
  position: absolute;
  right: 50px;
  top: 40%;
  padding: 20px;
  border-radius: 10px;
  background-color: #f4a261;
  width: 200px;
  height: 400px;
  
}

@keyframes rotate-clockwise-anim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes rotate-anti-anim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(4px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-8px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(8px, 0, 0);
  }
}




</style>