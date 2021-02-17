<template>

<div id="portfolio">


  <img class="left-leaf" src="../assets/img/leaf.png"/>
<transition name="project-preview">
<div class="hovered-project-container"></div>
</transition>

  <div class="portfolio-isolayer scroll-obj">

    <div class="title-text-container">
        <div class="d-none d-lg-block text-block"/>
        <h1 class="font-montserrat fw-900 fs-50">PORTFOLIO</h1>
      </div>
      
      <div class="portfolio-border">
      
    <div class="portfolio-grid">
      
      
      <b-row>
        
  <b-col cols="12" lg="12" xl="6">
    <div class="portfolio-item" @mouseover="hovered_project = true" @mouseleave="hovered_project = false">
      <div class="container">
        <div class="name-links-container">
          <h1 class="portfolio-title font-montserrat fw-900 fs-40">Project #1 here uis a really long title</h1>
        </div>
      </div>
      </div>
  </b-col>

   <b-col cols="12" lg="12" xl="6">
    <div class="portfolio-item">
      <div class="container">
        <div class="name-links-container">
          <h1 class="portfolio-title font-montserrat fw-900 fs-40">Project #1 here uis a really long title</h1>
        </div>
      </div>
      </div>
  </b-col>

  <b-col cols="12" lg="12" xl="6">
    <div class="portfolio-item">
      <div class="container">
        <div class="name-links-container">
          <h1 class="portfolio-title font-montserrat fw-900 fs-40">Project #1 here uis a really long title</h1>
        </div>
      </div>
      </div>
  </b-col>

  <b-col cols="12" lg="12" xl="6">
    <div class="portfolio-item">
      <div class="container">
        <div class="name-links-container">
          <h1 class="portfolio-title font-montserrat fw-900 fs-40">Project #1 here uis a really long title</h1>
        </div>
      </div>
      </div>
  </b-col>

  <b-col cols="12" lg="12" xl="6">
    <div class="portfolio-item">
      <div class="container">
        <div class="name-links-container">
          <h1 class="portfolio-title font-montserrat fw-900 fs-40">Project #1 here uis a really long title</h1>
        </div>
      </div>
      </div>
  </b-col>

  <b-col cols="12" lg="12" xl="6">
    <div class="portfolio-item">
      <div class="container">
        <div class="name-links-container">
          <h1 class="portfolio-title font-montserrat fw-900 fs-40">Project #1 here uis a really long title</h1>
        </div>
      </div>
      </div>
  </b-col>

</b-row>

      
    </div>
    </div>
  </div>

</div>

</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      hovered_project: false
    }
  }

}
</script>

<style scoped>

.project-preview-enter-active {
  animation: bounce-in .5s;
}
.project-preview-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translatex(0);
  }
  50% {
    transform: translatex(-300);
  }
  100% {
    transform: translatex(-200);
  }
}

#portfolio {
  position: relative;
}

.left-leaf {
  position: absolute;
  top: 10vh;
  left: -80px;
  width: 35vh;
  height: 28vh;
  transform: rotate(10deg);
  z-index: -1;
}

.hovered-project-container {
  position: fixed;
  right: -200px;
  width: 200px;
  height: 200px;
  top: 50px;
  display: none;

}

.portfolio-border {
  border-color: var(--charcoal);
  border-style: solid;
  border-width: 10px;
}

.portfolio-item .container {
  width: 100%;
  height: 100%;
}

.portfolio-item .container .name-links-container {
  height: 40%;
  width: 100%;
  padding-top: 10px;
}

.portfolio-isolayer {
  position: relative;
  top: -30vh;
  left: -30vh;
  
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;

}

.scroll-obj {

  overflow-x: hidden;
  transform : translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg);
  width: 100vw;
	height: calc(120vh);
}

.portfolio-grid,
.portfolio-item,
.portfolio-item-info {
  
	-webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  
}

.portfolio-grid {
  padding-top: calc(100%-100vh);
  width: 100%;
  height: auto;
}

.portfolio-item {
  transition: transform 1s;
  height: 400px;
  margin: 50px;
  width: auto;
  border-color: var(--charcoal);
  border-style: solid;
  border-width: 10px;
}

.portfolio-title {
  padding: 5px;
  float: left;
  text-align: left;
  max-width: 70%;
  transition: all 1s;
  background-color: var(--asparagus);
}

.portfolio-item:hover {
  transform: translatex(-2vw) translateY(-2vw);
  -webkit-transform:translate3d(1,1,0);
}



.portfolio-item:hover .portfolio-title {
  transform: translatex(-2.2vw) translateY(-2.2vw) scale(1.1);
  -webkit-transform:translate3d(1,1,0);
}

.portfolio-item:hover.hovered-project-container {
  transform: scale(2);
}

.title-text-container {
  position: relative;
  color: var(--skobeloff);
}


.text-block {
  z-index: -1;
  position: absolute;
  bottom: -8px;
  left: 50px;
  width: 300px;
  height: 30px;
  background-color: var(--sandy-brown);
}


.portfolio-item {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

@media (max-width: 1300px) {
  .portfolio-isolayer {
  top: -45vh;
  }
}

@media (max-width: 1200px) {

  .portfolio-isolayer {
  top: -40vh;
  left: -50vh;
  }
}

@media (max-width: 1000px) {

  .left-leaf {
    display: none;
  }

  .portfolio-isolayer {
  top: 40vh;
  left: -60vh;
  }
}

@media (max-width: 900px) {

  .portfolio-isolayer {
  top: 30vh;
  left: -60vh;
  }
}

@media (max-width: 750px) {

  
  .portfolio-isolayer {
  top: 0vh;
  left: -60vh;
  }
}

@media (max-width: 700px) {

  
  .portfolio-isolayer {
  top: -10vh;
  left: -60vh;
  }
}


</style>