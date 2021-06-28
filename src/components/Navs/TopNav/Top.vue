<template>
  
  <div id="top-nav">
    
    <h1 class="font-logo">cally<br>.dev</h1>

    <div v-if="!isMobile()" id="nav-menu">
      <div class="d-flex flex-column">
      <router-link to="/"><span class="font-roboto">Home</span></router-link>
      <router-link to="/projects"><span class="font-roboto">Projects</span></router-link>
      <router-link to="/blog"><span class="font-roboto">Blog</span></router-link>
      </div>

      <div class="d-flex flex-column">
      <a @click="showPopup('http://github.com/callycodes', 'Github', 'Check out some of my other projects on my Github!')"><span class="font-roboto">Github</span></a>
      <a @click="showPopup('/CV.pdf', 'CV', 'If you have any issues with my CV, drop me a message on LinkedIn and I can provide a different format :)')"><span class="font-roboto">CV</span></a>
      <router-link to="/contact"><span class="font-roboto">Contact</span></router-link>
      </div>

      <div class="d-flex flex-column">
      <a @click="showPopup('https://www.linkedin.com/in/callum-bass-469b64197/', 'LinkedIn', 'Connect with me if you like what you see!')"><span class="font-roboto">LinkedIn</span></a>
      </div>

    </div>

    <div v-else class="mobile-menu">
      <div class="line-1"></div>
      <div class="line-2"></div>
      <div class="line-3"></div>
    </div>

  </div>

</template>

<script>

export default {
  methods: {
    isMobile() {
      return this.getWindowSize().width <= 760;
    },
    getWindowSize() {
      return this.$store.state.window;
    },  
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


.mobile-menu {
  height: 80px;
  width: 80px;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  position: absolute;
top: 40px;
right: 40px;
transition: all .5s;
}

.line-1 {
  position: relative;
  top: 24px;
  left: 13px;
  width: 50px;
  height: 3px;
  background-color: black;
  transition: all .5s;
}

.line-2 {
  position: relative;
  top: 34px;
  left: 13px;
  width: 50px;
  height: 3px;
  background-color: black;
  transition: all .5s;
}

.line-3 {
  position: relative;
  top: 44px;
  left: 13px;
  width: 50px;
  height: 3px;
  background-color: black;
  transition: all .5s;
}

.mobile-menu:hover {
  margin-top: 5px;
  border-radius: 80px;
  transform: scale(0.8);
}

.mobile-menu:active {
  
}

.mobile-menu:hover .line-1 {
  width: 0px;
}

.mobile-menu:hover .line-2 {
  width: 0px;
  left: 63px;
}

.mobile-menu:hover .line-3 {
  width: 0px;
}



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