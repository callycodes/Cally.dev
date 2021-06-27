<template>
  <div id="dismissable">

    <h1 class="font-roboto fw-900">{{data.title}}</h1>
    <span class="font-roboto" v-if="data.description">{{data.description}}</span>
    <br><br>
    <span class="font-roboto" v-if="data.url">We've opened a tab to {{data.url}}, if it hasn't opened, click <a :href="data.url">here</a></span>

    <button class="font-roboto" @click="close">Dismiss</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      data: {}
    }
  },
  methods: {
    
    close() {
      this.$store.dispatch('closePopup');
    },
    open() {
      this.$router.absUrl(this.data.url);
    }
  },
  mounted () {
    this.data = this.$store.state.popup

    if (this.data.url) {
      this.open();
    }
  }
}

</script>

<style scoped>

#dismissable {
  background-color: white;
  border: 2px black solid;
  width: 500px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  text-align: center;
  z-index: 10;
}

button {
  width: 450px;
  border: 2px black solid;
  background-color: white;
  color: black;
  height: 40px;
  position: absolute;
  bottom: 20px;
  left: 25px;
}

</style>