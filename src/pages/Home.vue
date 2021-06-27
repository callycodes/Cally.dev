<template>
  <div id="home">

    

      <div class="title-text-container">
        <div class="d-none d-lg-block text-block"/>
        <h1 class="font-montserrat fw-900 fs-50">Hey, thanks for stopping by...</h1>
      </div>

      <div class="info-container d-block d-lg-flex">
      <div class="my-photo-container d-flex">
        <img class="my-photo" src="../assets/img/me.jpg"/>
    
        <div class="my-photo-text"><span class="font-oswald">LATVIA, 2020</span></div>

      </div>

      <div class="my-name">
        <h2 class="font-oswald">MY NAME IS CALLUM<br>I'M A SOFTWARE ENGINEERING STUDENT<br>BASED IN LONDON</h2>
      </div>


      </div>

  </div>
  
</template>

<script>

export default {
  components: {
  },

  methods: {
    showPopup() {
      this.$store.dispatch('showPopup', { title: 'Github', description: 'This is the description', url: 'http://github.com'});
    },
  },

  data () {
    return {
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
}


.my-name {
  padding-bottom: 0px;
  margin-bottom: 0px;
  color: black;
  float: left;
  width: 100%;
  height: auto;
  background-color: blue;
}

.my-name h2 {
  font-size: 4.8vw;
}

.title-text-container {
  position: relative;
  transition: all 1s;
}


.text-block {
  z-index: -1;
  position: absolute;
  bottom: -8px;
  left: 50px;
  width: 800px;
  height: 30px;
  background-color: var(--persian-green);
}

.my-photo-container {
  margin-right: 40px;
  max-height: 450px;
  margin-bottom: 40px;
}
.my-photo {
  height: 450px;
}

.my-photo-text {
  background-color: var(--charcoal);
  padding: 10px;
  height: auto;
}

.course-text {
  background-color: var(--charcoal);
  padding: 5px;
}



.info-container {
  margin-top: 50px;
}

.my-photo-text > span {
  writing-mode:vertical-rl;
  font-size: 15px;
  color: var(--asparagus);
}

.about-me-container {
  width: 100%;

  
}



.my-study-photo {
  width: 100px;
}









</style>