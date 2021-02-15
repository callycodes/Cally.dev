<template>
<div id="navigation-bar" class="w-100">
  <div id="logo-section">
    <div class="logo-section-polygon-one"></div>
    <div class="logo-section-polygon-two"></div>
    <div class="logo-container">
    <img src="../../../assets/img/img-menu.png" class="logo-image"/>
    <span class="logo-text font-title">
      Bowls<br>
      Bedfordshire
      </span>
    </div>
   
  </div>

  <div id="menu-section">
    <div class="nav-menu-container">
    <b-nav id="nav-menu" class="font-title align-items-center" fill>
    <b-nav-item active>Home</b-nav-item>
    <b-nav-item>News</b-nav-item>
    <b-nav-item>Officers</b-nav-item>
    <b-nav-item>Competitions</b-nav-item>
    <b-nav-item>Teams & Fixtures</b-nav-item>
    <b-nav-item>Leagues</b-nav-item>
  </b-nav>
  </div>
  </div>
</div>
</template>

<script>

export default {
}
</script>

<style lang="css">

#navigation-bar {
  height: 80px;
  display: flex;
  background-color: var(--indigo-blue);
  /*background-image: url('/assets/svg/TopNavBG.svg')*/
}

#logo-section {
  height: 100%;
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  background-color: white;
  position: relative;
}

.logo-section-polygon-one {
  position: relative;
  width: 100%;
  height: 105px;
  background-color: var(--indigo-blue);
  z-index: 1;
}

.logo-section-polygon-two {
  position: relative;
  width: 0;
  height: 0px;
  left: 100%;
  top: -105px;
  border-top: 105px solid var(--indigo-blue);
  border-right: 100px solid transparent;
  z-index: 1;
}

.logo-container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 130%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.logo-image {
  width: auto;
  height: 100%;
  z-index: 2;
  float: right;
  padding: 0px;
  
}

.logo-text {
  font-size: 2em;
  color: white;
  height: 100%;
  text-align: left;
  line-height: 40px;
  padding-top: 5px;
  float: left;
  margin-left: 5px;
}

#menu-section {
  height: 100%;
  width: 100%;
  background-color: white;
  border-bottom: 5px solid var(--golden-yellow) 
}

#menu-section::before {
  position: absolute;
  content: " ";
  width: 100%;
  top: 6px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  height: 100%;
  border-bottom: 6px solid var(--indigo-blue);
  z-index: -1;
}

#nav-menu {
  height: 80px;
  font-size: 1.3em;
}

#nav-menu li a {
    color: var(--indigo-blue) !important;
    
}

.nav-menu-container {
  height: 100%;
  padding-left: 70px;
}

</style>