<template>
  <div id="contact">


<kinesis-container class="kinesis-container" v-if="!sent" >


<kinesis-element type="rotate" :strength="2">
    <svg class="blob-one" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.6,-62.2C40.6,-50.1,38.1,-33.2,41.9,-20.4C45.8,-7.7,55.9,0.9,59.2,11.6C62.6,22.3,59,35.2,49.9,40.4C40.9,45.5,26.4,43.1,13.8,46.6C1.2,50,-9.5,59.4,-21.7,61.5C-33.9,63.6,-47.6,58.4,-54.2,48.3C-60.8,38.3,-60.2,23.4,-58.9,10.5C-57.6,-2.4,-55.6,-13.5,-49.8,-21.3C-43.9,-29,-34.2,-33.6,-25.3,-44.3C-16.3,-55,-8.2,-71.9,3.1,-76.7C14.3,-81.5,28.7,-74.2,34.6,-62.2Z" transform="translate(100 100)" />
</svg>
</kinesis-element>

<kinesis-element :strength="5">
<svg class="blob-two" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path  d="M47.7,-74.8C61.8,-65.2,73.2,-51.9,79,-36.8C84.8,-21.7,84.9,-4.7,82.5,11.8C80.1,28.4,75.1,44.6,65.3,57.4C55.5,70.1,40.8,79.5,25.3,82.1C9.9,84.7,-6.3,80.6,-21.1,74.9C-35.9,69.1,-49.4,61.8,-58.5,50.9C-67.7,40,-72.5,25.6,-75.3,10.4C-78.1,-4.7,-78.9,-20.6,-73.7,-34.3C-68.4,-48,-57.1,-59.7,-43.8,-69.7C-30.5,-79.7,-15.3,-88,0.8,-89.2C16.8,-90.4,33.6,-84.4,47.7,-74.8Z" transform="translate(100 100)" />
</svg>
</kinesis-element>

<kinesis-element  type="depth" :strength="4" >
<svg class="blob-three" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M47.7,-74.8C61.8,-65.2,73.2,-51.9,79,-36.8C84.8,-21.7,84.9,-4.7,82.5,11.8C80.1,28.4,75.1,44.6,65.3,57.4C55.5,70.1,40.8,79.5,25.3,82.1C9.9,84.7,-6.3,80.6,-21.1,74.9C-35.9,69.1,-49.4,61.8,-58.5,50.9C-67.7,40,-72.5,25.6,-75.3,10.4C-78.1,-4.7,-78.9,-20.6,-73.7,-34.3C-68.4,-48,-57.1,-59.7,-43.8,-69.7C-30.5,-79.7,-15.3,-88,0.8,-89.2C16.8,-90.4,33.6,-84.4,47.7,-74.8Z" transform="translate(100 100)" />
</svg>
</kinesis-element>


    <div class="contact-form-container">

      <div class="contact-title">

<kinesis-element type="rotate" :strength="10">
          <h1  :style="getRandomOffset()" class="font-montserrat fw-900">C</h1>
          </kinesis-element>

          <kinesis-element :strength="12">
          <h1 :style="getRandomOffset()" class="font-montserrat fw-900">O</h1>
          </kinesis-element>
          <kinesis-element type="rotate" :strength="12">
          <h1 :style="getRandomOffset()" class="font-montserrat fw-900">N</h1>
          </kinesis-element>
          <kinesis-element :strength="20">
          <h1 :style="getRandomOffset()" class="font-montserrat fw-900">T</h1>
          </kinesis-element>
          <kinesis-element type="rotate" :strength="15">
          <h1 :style="getRandomOffset()" class="font-montserrat fw-900">A</h1>
          </kinesis-element>
          <kinesis-element :strength="12">
          <h1 :style="getRandomOffset()" class="font-montserrat fw-900">C</h1>
          </kinesis-element>
          <kinesis-element type="rotate" :strength="17">
          <h1 :style="getRandomOffset()" class="font-montserrat fw-900">T</h1>
          </kinesis-element>
          </div>
          

      <div class="contact-form">

        <div class="input-container">
          <label class="font-montserrat" for="fname">Name</label>
<input class="font-oswald" placeholder="Cal" type="text" id="name" name="name"/>
        </div>

        <div class="input-container">
          <label class="font-montserrat" for="email">Email</label>
<input class="font-oswald" placeholder="hello@cally.dev" type="email" id="email" name="email"/>
        </div>

        <div class="input-container">
          <label class="font-montserrat" for="message">Message</label>
<textarea class="font-oswald"  type="text" id="message" name="message"/>
        </div>

        <div class="input-container"> 
          <button class="font-montserrat fw-900" @click="sent=true" >SEND</button>
        </div>

        </div>

      <svg class="background-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.3,-55.4C43.2,-49.9,45.1,-35.7,48.7,-23.5C52.2,-11.3,57.5,-1.1,60.9,12.2C64.3,25.5,66,42.1,59.2,53C52.4,64,37.2,69.3,22.5,71.2C7.8,73.1,-6.4,71.5,-20.8,68.3C-35.2,65.2,-49.9,60.6,-54.9,50.1C-60,39.7,-55.5,23.5,-56.3,8.9C-57.2,-5.7,-63.3,-18.7,-59.8,-27.8C-56.4,-36.8,-43.3,-42,-31.7,-45.7C-20.2,-49.4,-10.1,-51.7,1.8,-54.6C13.7,-57.4,27.5,-60.8,35.3,-55.4Z" transform="translate(100 100)" />
      </svg>
    </div>

</kinesis-container>

<div v-else>

  <svg class="sent-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  
  <path id="curve" d="M45.7,-71.3C59,-62.6,69.4,-49.5,76.5,-34.7C83.7,-19.9,87.6,-3.4,84.3,11.3C80.9,25.9,70.2,38.7,59.3,51.4C48.3,64,37.2,76.5,23.5,81.1C9.7,85.7,-6.8,82.4,-23.3,78.1C-39.7,73.8,-56.2,68.4,-64.2,56.9C-72.3,45.4,-71.8,27.8,-73.6,11C-75.4,-5.9,-79.4,-22,-76.1,-37C-72.7,-52,-62,-65.8,-48.1,-74.3C-34.1,-82.8,-17.1,-85.9,-0.4,-85.2C16.2,-84.5,32.4,-80.1,45.7,-71.3Z" transform="translate(100 100)" />

<text class="sent-text font-montserrat fw-900" x="00">
    <textPath xlink:href="#curve">
      It's on the way!
    </textPath>
  </text>
</svg>

<span class="sent-message font-oswald">/ / / / / / / / /<br>ETA RESPONSE<br>24 hours :)</span>

<lottie-animation class="letter-anim" style="margin-top: 10vh" :loop="true" :speed="1" :height="400" :width="400" 
    path="js/lf30_editor_hmzhwcgj.json"
/>

<svg class="cloud-one" viewBox="-5 5 110 110">
<path xmlns="http://www.w3.org/2000/svg" d="m81.245,40.626c-2.34,0-4.558,0.484-6.615,1.264-1.788-11.321-11.508-20.013-23.326-20.013-13.095,0-23.702,10.608-23.702,23.696,0,0.296,0.081,0.571,0.094,0.867-0.296-0.02-0.578-0.087-0.874-0.087-7.045,0-12.759,5.714-12.759,12.759,0,0.087,0.027,0.168,0.027,0.255-1.008-0.302-2.05-0.518-3.153-0.518-6.043,0-10.937,4.901-10.937,10.938,0,6.043,4.894,8.335,10.937,8.335h70.308c10.358,0,18.755-8.389,18.755-18.748s-8.396-18.748-18.755-18.748z"/>
  </svg>

</div>

  </div>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  components: {
    KinesisContainer,
    KinesisElement,
    LottieAnimation
  },

  created () {

  },

  methods: {
    getRandomOffset() {
return { transform: 'translateY(' + ((Math.random() * 3.0) - 1.5) + 'vh)' };
      }
  },

  data () {
    return {
      sent: false
    }
  }

}
</script>

<style scoped>

.kinesis-container {
  pointer-events:all;
  }

.contact-form-container {
  width: 90vw;
  height: 75vh;
  top: 20vh;
}

.contact-form-container .background-blob {
  width: 110vw;
  height: 110vh;
  position: absolute;
  fill: var(--asparagus);
  top: -20vh;
  left: -8vw;
  z-index: 0;
  pointer-events: none;

}

.contact-form-container .contact-form {
  top: calc(23vh);
  width: 100vw;
  left: -60px;
  height: 45vh;
  position: absolute;
  z-index: 1;
  text-align: center;
  }

  .contact-form-container .contact-title {

  top: calc(5vh);
  width: 100vw;
  left: -60px;
  height: 13vh;
  position: absolute;
  z-index: 1;
  display:         flex;
  flex-wrap:       wrap;
  justify-content: center;
  }



  .contact-title h1 {
    font-size: 130px;
}

.blob-one {
position: absolute;
z-index: 0;
top: 5vh;
left: -15vw;
width: 40vw;
height: 40vh;
fill: var(--skobeloff);
opacity: 0.7;
  }

  .blob-two {
position: absolute;
z-index: 0;
top: 30vh;
right: -15vw;
width: 40vw;
height: 40vh;
fill: var(--orange-yellow-crayola);
opacity: 0.7;
  }

  .blob-three {
position: absolute;
z-index: 0;
top: 25vh;
left: -10vw;
width: 20vw;
height: 20vh;
fill: transparent;
stroke: var(--burnt-sienna);
stroke-width: 10px;
stroke-dasharray: 20px;
opacity: 1;
animation: spin 5s infinite ease-in-out;
  }

textarea, input { outline: none; }

.contact-form .input-container {
  width: 30vw;
  min-width: 300px;
  max-width: 400px;
  margin: auto;
  margin-bottom: 30px;
  }

  .contact-form .input-container label {
    float: left;
    padding-bottom: 0px;
    margin-bottom: 0px;
    font-size: 20px;
    }

  .contact-form input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid black;
    text-decoration: none;
    -webkit-appearance: none;
    width: 100%;
    font-size: 25px;
    }

    .contact-form textarea {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid black;
    text-decoration: none;
    -webkit-appearance: none;
    width: 100%;
    font-size: 25px;
    }

    .contact-form button {
      border: 2px solid black;
      font-size: 20px;
      background-color: transparent;
      padding: 10px;
      width: 20vw;
      border-radius: 20px;
      transition: all .5s;
      }

      .contact-form button:hover {
        border-radius: 40px;
        opacity: 0.6;
        padding: 15px;
        width: 10vw;
        }


@keyframes spin {
  from {
    transform: rotate(0deg);
    }

    to { transform: rotate(360deg); }

    }

    @keyframes grow {
  0% { transform: scale(1); }
  30% { transform: scale(1.0.5); }
    60% { transform: scale(0.95); }
    100% { transform: scale(1); }


    }


.letter-anim {
animation: grow 2s infinite ease-in-out;
  }
    .sent-blob {
      position: absolute;
      width: 60vw;
      height: 60vh;
      left: 20vw;
      top: 20vh;
      fill: var(--dark-sky-blue);
      animation: grow 2s infinite ease-in-out;
      }

      .sent-text {
        font-size: 30px;
        fill: var(--darker-blue);
        }

.sent-message {
position: absolute;
top: 38vh;
left: 26.5vw;
font-size: 25px;
color: var(--darker-blue);
animation: grow 2s infinite ease-in-out;
  }


.cloud-one {
  fill: white;
  stroke: black;
  stroke-width: 2px;
  width: 250px;
height: 250px;
position: absolute;
top: 20vh;
left: 22vw;
animation: grow 5s infinite ease-in-out;

opacity: 0.7;
  }




</style>