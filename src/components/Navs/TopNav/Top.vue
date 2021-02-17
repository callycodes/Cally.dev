<template>
  
  <div id="top-nav">
    
    <h1 class="font-logo">cally<br>.dev</h1>

    <div id="nav-menu">
      <div class="d-flex flex-column">
      <span class="font-roboto">Home</span>
      <span class="font-roboto">Portfolio</span>
      <span class="font-roboto">Blog</span>
      </div>

      <div class="d-flex flex-column">
      <span class="font-roboto">Github</span>
      <span class="font-roboto">CV</span>
      <span class="font-roboto">Contact</span>
      </div>

      <div class="d-flex flex-column">
      <span class="font-roboto">LinkedIn</span>
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

#top-nav {
  display: block;
  width: 100%;
  height: 100px;
}

.font-logo {
  float: left;
  margin-right: 80px;
}

#nav-menu {
  display: flex;
  line-height: 20.5px;
}

#nav-menu div {
  margin-right: 70px;
}

.font-roboto:hover {
  background-color:var(--sandy-brown);
}

</style>