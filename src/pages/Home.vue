<template>
  <div id="home">

<ContactMe></ContactMe>

      <svg class="title-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M47,-75.9C58.9,-65.4,65.3,-49.1,64.8,-34.2C64.4,-19.4,57.1,-6.1,54.7,7.6C52.3,21.3,54.7,35.4,50.7,49.1C46.8,62.8,36.5,76,22.8,82C9.2,87.9,-7.9,86.5,-21.3,79.4C-34.6,72.3,-44.2,59.5,-51.8,47C-59.3,34.5,-64.7,22.3,-64.5,10.5C-64.4,-1.3,-58.6,-12.7,-50.5,-20.1C-42.5,-27.5,-32.3,-30.9,-23.5,-42.7C-14.7,-54.6,-7.3,-75,5.1,-83C17.5,-90.9,35,-86.3,47,-75.9Z" transform="translate(100 100)" />
</svg>


      <div class="title-text-container">
        <h1 class="font-montserrat fw-900 header-text">Hey, thanks for stopping by...</h1>
      </div>

<div id="profile-section">
      <svg class="profile-container-background" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M43.9,-75.7C55.3,-69.4,62,-54.5,66.2,-40.5C70.3,-26.4,72,-13.2,74.9,1.6C77.7,16.5,81.7,33,75.6,43.7C69.5,54.4,53.3,59.2,39,67.2C24.7,75.2,12.3,86.2,1,84.6C-10.4,82.9,-20.8,68.5,-29.5,57.2C-38.1,46,-45.1,38,-50.6,29C-56.1,20,-60,10,-60.7,-0.4C-61.4,-10.8,-58.8,-21.6,-54,-31.7C-49.2,-41.8,-42.1,-51.2,-32.7,-58.7C-23.3,-66.2,-11.7,-71.8,2.3,-75.7C16.2,-79.7,32.4,-82,43.9,-75.7Z" transform="translate(100 100)" />
</svg>

  <svg :class="{'profile-container-stroke': true, 'photo-stroke-one': animations.profile_pic, 'photo-stroke-two': !animations.profile_pic}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="" transform="translate(100 100)" />
  </svg>


<div class="photo-container">
  <img class="my-photo" src="../assets/img/me.jpg"/>
</div>



<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<defs>
    <clipPath id="clip">
  <path fill="#FF0066" d="M23.9,-44.8C27.7,-39.2,25.3,-26.2,27.3,-17.5C29.3,-8.8,35.8,-4.4,36.4,0.3C37,5.1,31.6,10.1,31.2,21.5C30.7,32.9,35.1,50.6,30.7,60C26.3,69.4,13.2,70.4,-0.6,71.3C-14.3,72.3,-28.5,73.2,-37.5,66.5C-46.5,59.8,-50.1,45.4,-48.6,33.1C-47.1,20.7,-40.4,10.4,-43.3,-1.7C-46.3,-13.8,-59,-27.6,-57.3,-34.4C-55.6,-41.1,-39.6,-40.9,-27.6,-41.9C-15.7,-42.8,-7.8,-44.8,1.1,-46.7C10.1,-48.6,20.1,-50.4,23.9,-44.8Z" transform="translate(100 100)" />
</clipPath>
</defs>
</svg>

</div>

<!--<div class="scroll-down-container">

  <svg class="scroll-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#000" d="M33.5,-56.2C41.8,-46.8,45.9,-34.8,54.6,-22.8C63.4,-10.9,76.8,1,77.7,12.8C78.5,24.6,66.9,36.3,55.2,45.2C43.4,54.2,31.5,60.4,17.7,68C3.9,75.6,-11.8,84.7,-24.4,81.7C-37.1,78.7,-46.6,63.7,-53.4,49.7C-60.1,35.7,-64.1,22.7,-63.7,10.5C-63.3,-1.7,-58.6,-13.1,-52.6,-23.1C-46.6,-33,-39.3,-41.3,-30.3,-50.5C-21.3,-59.6,-10.7,-69.4,1,-70.9C12.6,-72.4,25.2,-65.6,33.5,-56.2Z" transform="translate(100 100)" />
</svg>

<span class="scroll-text text-oswald fw-700">FIND OUT MORE<br>DOWN HERE!</span>

</div>-->





      <!--<div class="my-photo-container">
        
    
        <div class="my-photo-text"><span class="font-oswald">LATVIA, 2020</span></div>

      </div>-->



  </div>
  
</template>

<script>

import ContactMe from '../components/Fixed/ContactMe.vue'

export default {
  components: {
    ContactMe
  },

  created () {

    setInterval(() => {
      this.animations.profile_pic = !this.animations.profile_pic
    }, 1000)

    },

  methods: {
    showPopup() {
      this.$store.dispatch('showPopup', { title: 'Github', description: 'This is the description', url: 'http://github.com'});
    },
  },

  data () {
    return {
      animations: {
        profile_pic: false
        },
      items: [
        {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/694px-Vue.js_Logo_2.svg.png'
        },
        {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png'
        },
        {
          url: 'https://www.blockachain.gr/wp-content/uploads/2018/03/java-coffee-cup-logo.png'
        },
        {
          url: 'https://cdn.worldvectorlogo.com/logos/c--4.svg'
        },
        {
          url: 'https://i.pinimg.com/originals/8f/50/63/8f50630ae0e1775196e4c270c573ce67.png'
        },
        {
          url: 'https://cdn.freebiesupply.com/logos/large/2x/flask-logo-png-transparent.png'
        }
      ]
    }
  }

}
</script>

<style scoped>

.title-blob {
  fill: var(--burnt-sienna);
  position: absolute;
  top: -30px;
  left: -110px;
  width: 700px;
  height: 500px;
  transform: rotate(70deg);
  z-index: -1;
  transition: all 1s;
  }

.scroll-down-container {
  position: absolute; 
  width: 60%;
  min-width: 350px;
  height: 200px;
  top: 72vh;

  }

  .scroll-down-container .scroll-blob {
    position: absolute;
    top: -100px;
    left: -50px;
    width: 400px;
    height: 350px;
    }

    .scroll-down-container .scroll-text {
      position: absolute;
      top: 50px;
      left: 170px;
      font-size: 40px;
      line-height: 40px;
      color: white;
      text-shadow:3px 0 0 black,0 3px 0 black,-3px 0 0 black,0 -3px 0 black;
    }



.photo-stroke-two path {
  d: path("M24.6,-45.2C32.2,-38.3,38.9,-32.3,41.8,-24.9C44.7,-17.5,43.9,-8.8,50.2,3.6C56.4,16,69.8,32,68.2,41.6C66.5,51.2,49.9,54.4,36,52.9C22.2,51.4,11.1,45.2,2.9,40.1C-5.2,35,-10.4,31,-19.4,29.7C-28.4,28.4,-41.1,29.8,-47.8,25.3C-54.4,20.8,-54.8,10.4,-60,-3C-65.1,-16.3,-75,-32.6,-67.9,-36.4C-60.9,-40.1,-36.9,-31.3,-22.8,-34.4C-8.7,-37.6,-4.3,-52.6,2.1,-56.2C8.5,-59.9,17.1,-52.1,24.6,-45.2Z") !important;
  }

  .photo-stroke-one path {
    d: path("M39.3,-60.4C50.4,-61.6,58.5,-50,55.7,-37.9C52.9,-25.7,39.2,-12.8,36.7,-1.4C34.3,10,43.2,20,44.7,30C46.2,39.9,40.3,49.8,31.6,49.5C23,49.2,11.5,38.8,-1.9,42.1C-15.2,45.3,-30.5,62.2,-37.1,61.3C-43.8,60.5,-42,41.8,-50.5,28.6C-59.1,15.4,-78,7.7,-81.7,-2.1C-85.4,-12,-73.9,-24,-61.4,-30.3C-48.8,-36.5,-35.2,-37,-24.8,-36.2C-14.4,-35.4,-7.2,-33.4,3.4,-39.3C14.1,-45.2,28.1,-59.2,39.3,-60.4Z") !important;
    }


.profile-container-stroke {
  transition: all .5s;
}

.header-text {
  font-size: 100px;
  }


.clearfix {
  overflow: auto;
}

.color-block {
  height: auto;
  background-color: red;
  width: 100%;
  float: left;
}
#home {
  margin-top: 40px;
  overflow-x: hidden;
}


.profile-container-background {
  fill: var(--charcoal);
  right: -25%;
  top: 20vh;
  position: absolute;
  z-index: 0;
  max-width: 1000px;
  }

  .profile-container-stroke {
  fill: transparent;
  stroke: var(--skobeloff);
  stroke-width: .4rem;
  right: -20%;
  top: 11vh;
  position: absolute;
  z-index: 0;
  max-width: 1000px;
  }



.title-text-container {
  position: relative;
  transition: all 1s;
  z-index: 2;
}


.photo-container {
  width: 200px;
  height: 200px;
transform: scale(2.7);
clip-path: url(#clip);
background-color: red;
position: absolute;
top: 42vh;
right: 5vw;
animation: float 4s infinite;
  }

@keyframes float {
  0% {
  
    top: 42vh;
    }

    50% {
      top: 40vh;
      }

      100% {
top: 42vh;
        }
  }


.my-photo {
  object-fit: contain;
margin: auto;
margin-top: 20px;
  height: 80%;
  width: 90%;
}












@media (max-width: 650px) {
  .header-text {
    font-size: 50px;
  }

  .photo-caption {
    top: 65vh;
    width: 220px;
    }

    .title-blob {
        top: 30px;
  left: -50px;
  width: 400px;
  height: 200px;
      }
}

@media (min-width: 1400px) {
  


    .profile-container-background { 
      right: -15%;
      }

}






</style>