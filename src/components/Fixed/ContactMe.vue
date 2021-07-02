<template>
<transition name="bounce-in">
  <div v-if="!isScrolling()" class="contact-me-fixed">

    <button class="fw-900 font-title" >Get in touch</button>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.3,-38.8C33.9,-34.1,48.9,-35.5,59.9,-30.1C70.9,-24.6,77.9,-12.3,81.6,2.2C85.3,16.6,85.8,33.2,77.6,43.5C69.5,53.9,52.6,57.9,38.2,56.6C23.8,55.3,11.9,48.6,0.8,47.2C-10.3,45.8,-20.6,49.7,-33.6,50.2C-46.5,50.6,-62.1,47.7,-70.8,38.8C-79.4,29.9,-81.2,14.9,-80.4,0.4C-79.7,-14.1,-76.4,-28.1,-68.5,-38.5C-60.7,-48.8,-48.3,-55.4,-36.1,-59.2C-23.9,-63,-11.9,-63.9,-2.8,-59C6.3,-54.1,12.6,-43.4,23.3,-38.8Z" transform="translate(100 100)" />
</svg>
  </div>
  </transition>
</template>
<script>



export default {


  methods: {
    isScrolling() {
      return this.$store.state.scrolling.scrolled;
      }
  }
}
</script>
<style scoped>

.bounce-in-enter-active {
  animation: bounce-in 1s ease-in;
  }

  .bounce-in-leave-active {
    animation: bounce-in 1s reverse ease-in;
    }

    @keyframes bounce-in {
0% {
  bottom: -200px;
  transform: scale(0);
  }

50% {
bottom: -100px;
  transform: scale(1.2);
  }

  70% {
bottom: -100px;
  transform: scale(0.9);
    }


  100% {
transform: scale(1);
    }
      }

  .contact-me-fixed {
    position: fixed;
    bottom: -100px;
    left: -80px;
    width:400px;
    height: 300px;
    
    fill: var(--asparagus);
    }

    button {
      bottom: 110px;
      left: 110px;
      position: absolute;
      background-color: transparent;
      border-radius: 20px;
      padding: 10px;
      width: 180px;
      border: 1px solid;
      }

</style>