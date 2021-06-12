<!-- Altered version of https://github.com/satrong/vue-text-marquee -->

<template>
    <div class="language-portfolio">
            <div v-for="item in items" :key="item" class="language-item">
                <img height="100%" :src="item.url">
              </div>
    </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  data() {
    return {
      
    };
  },
  methods: {
  },

  computed: {
    

    
  },
  mounted() {
    this.start();
  },
}
</script>

<style lang="scss" scoped>
.language-portfolio {
  overflow: visible;
  width: 100%;
  height: 100%;


}

.language-item {
  display: inline-block;
  height: 100%;
  width: auto;
  padding: 8px;

}

.language-item:hover {
  animation: pulse 1s ease;
  
  
}

@keyframes pulse {
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1)
  }
}
</style>