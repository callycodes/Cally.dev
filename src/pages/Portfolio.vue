<template>

<div id="portfolio">

  <div class="portfolio-isolayer">

    <div class="title-text-container">
        <div class="d-none d-lg-block text-block"/>
        <h1 class="font-montserrat fw-900 fs-50">Hey, thanks for stopping by...</h1>
      </div>
      
      <div class="portfolio-border">
      
    <div class="portfolio-grid">
      
      <div class="row">
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      </div>
  </div>
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      </div>
  </div>
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      </div>
  </div>
</div>
      
      <div class="row">
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      <span class="portfolio-title">TITLE</span>
      </div>
  </div>
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      </div>
  </div>
  <div class="col-sm-12 col-md-6">
    <div class="portfolio-item">
      </div>
  </div>
</div>
      
    </div>
    </div>
  </div>

</div>

</template>

<script>

export default {
  components: {
  }

}
</script>

<style scoped>

.portfolio-grid div {
}

.portfolio-border {
  border-color: var(--charcoal);
  border-style: solid;
  border-width: 10px;
}

.portfolio-isolayer {
  
  position: relative;
  overflow-x: hidden;
  top: -300px;
  left: calc(100% - 115%);
  width: 110%;
  height: 110vh;
  
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
transform : translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg);
}

.scroll-obj {
  
  pointer-events: none;
}

.portfolio-grid,
.portfolio-item,
.portfolio-item-info {
  
	-webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  
}

.portfolio-grid {
  width: 100%;
  height: auto;
}

.portfolio-item {
  transition: transform 1s;
  height: 200px;
  margin: 50px;
  width: auto;
  padding: 0px;
  border-color: var(--charcoal);
  border-style: solid;
  border-width: 10px;
}

.portfolio-title {
  transition: 1s ease-in-out;
}

.portfolio-item:hover + .portfolio-title {
  transform: translatex(-5vw) translateY(-5vw);
  -webkit-transform:translate3d(1,1,0);
}

.portfolio-item {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}


</style>