<template>
  
  <div id="top-nav">
    
    <h1 class="font-logo">cally<br>.dev</h1>

    <div id="nav-menu">
      <div class="d-flex flex-column">
      <router-link to="/"><span class="font-roboto">Home</span></router-link>
      <router-link to="/projects"><span class="font-roboto">Projects</span></router-link>
      <router-link to="/blog"><span class="font-roboto">Blog</span></router-link>
      </div>

      <div class="d-flex flex-column">
      <a @click="open('http://github.com/callycodes')"><span class="font-roboto">Github</span></a>
      <a @click="open('/CV_compressed.pdf')"><span class="font-roboto">CV</span></a>
      <router-link to="/contact"><span class="font-roboto">Contact</span></router-link>
      </div>

      <div class="d-flex flex-column">
      <a @click="showPopup('https://www.linkedin.com/in/callum-bass-469b64197/', 'LinkedIn', 'Connect with me if you like what you see!')"><span class="font-roboto">LinkedIn</span></a>
      </div>

    </div>

  </div>

</template>

<script>

export default {
  methods: {
    open(url) {
      this.$router.absUrl(url);
    },
    
    showPopup(url, title, description = "") {
      this.$store.dispatch('showPopup', { title: title, description: description, url: url});
    }
  },
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

a, a:hover, a:visited {
  text-decoration: none;
  color: black;
}


#nav-menu div {
  margin-right: 70px;
}

.font-roboto:hover {
  background-color:var(--sandy-brown);
}

</style>