<template>
  <div id="home">

    <div id="intro" class="d-block">

      <div class="title-text-container">
        <div class="d-none d-lg-block text-block"/>
        <h1 class="font-montserrat fw-900 fs-50">Hey, thanks for stopping by...</h1>
      </div>

      <div class="info-container d-block d-lg-flex">
      <div class="my-photo-container d-flex">
        <img class="my-photo" src="../assets/img/me.jpg"/>
        <div class="my-photo-text"><span class="font-montserrat fw-800">THIS IS ME</span></div>
      </div>

      <div class="about-me-container">
        <div class="my-name-container">
          <div class="d-flex mb-0 pb-0">
            <h1 class="my-name font-montserrat fw-900 fs-40">Callum Bass</h1>
            <b-icon class="about-me-icon" icon="instagram"></b-icon>
          </div>
          <!--<span class="fs-15 font-montserrat f-italic fw-400 about-me-pronounce">pronounced: your·<b class="fw-700">finest</b>·graduate</span>-->
          <span class="course-text fs-15 font-roboto fw-900 fc-sandy-brown">SOFTWARE ENGINEERING BENG</span>
      </div>

      <div class="profile-container">
        <div class="location-container">
          
        <span class="d-block font-oswald fw-700 fs-50 fc-persian-green">LONDON BASED, GRADUATED <span class="fs-70 fc-burnt-sienna">2021</span></span>

        <span style="position: relative; top: -20px;" class="d-none d-lg-block mt-0 float-lg-right font-roboto-slab fw-900 fs-20 fc-sandy-brown">university of westminster baby</span>
      </div>
      <div class="clearfix"></div>
        <div class="more-info-container">
<span class="age-text font-pressura">AGE:<span style="background: -webkit-linear-gradient(var(--charcoal), var(--persian-green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">21</span></span>
<br>
<span class="scroll-text fc-skobeloff font-oswald fs-20">SCROLL DOWN TO SEE WHAT I'VE DONE</span>
        </div>
      </div>
        
      </div>
      </div>
    </div>

<Portfolio/>

  </div>
  
</template>

<script>

import Portfolio from './Portfolio.vue'

export default {
  components: {
    Portfolio
  }

}
</script>

<style scoped>


.clearfix {
  overflow: auto;
}

#home {
  margin-top: 40px;
}

.age-text {
  font-size: 16vh;
  letter-spacing: -3px;
  line-height: 62px;

}

.scroll-text {
  position: relative;
  top: -3%;
}

.title-text-container {
  position: relative;
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

.my-photo {
  height: 400px;
}

.my-photo-text {
  background-color: var(--charcoal);
  padding: 10px;
  max-height: 400px;
}

.course-text {
  background-color: var(--charcoal);
  padding: 5px;
}

.my-name {
  padding-bottom: 0px;
  margin-bottom: 0px;
  color: var(--charcoal);
}


.info-container {
  margin-top: 50px;
  max-height: 400px;
}

.my-photo-text > span {
  writing-mode:vertical-rl;
  font-size: 15px;
  color: var(--sandy-brown);
}

.about-me-container {
  width: 100%;

  
}

.my-name-container {
  margin-left: 40px;
  height: 100px;
  
}

.profile-container {
  margin-left: 40px;
}

.location-container {
  line-height: 60px;
text-align: right;
}

.profile-container .more-info-container {
  width: 100%;
  background-color: var(--charcoal);
  margin-top: 70px;
  height: 169px;
  text-align: center;
}

.about-me-icon {
  font-size: 25px;
  color: var(--sandy-brown);
  margin-top: 13px;
  margin-left: 10px;
}

.about-me-pronounce {
  color: var(--burnt-sienna);
}

.my-study-photo {
  width: 100px;
}

@media (max-width: 978px) {

  .age-text {
  font-size: 12vh;
  letter-spacing: -3px;
  line-height: 62px;

}

  .my-name-container {
    margin-left: 0px;
    text-align: left;
    height: 120px;
  }

  .profile-container {
    margin-left: 0px;
    text-align: right;
    line-height: 40px;
  }

  .my-photo {
  height: auto;
  width: calc(100% - 40px);
  margin-bottom: 20px;
}

.my-photo-text {
  height: 100%;
  max-height: 100%;
}
}


</style>