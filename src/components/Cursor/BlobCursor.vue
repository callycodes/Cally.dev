<template>
<div>

  <div class="stats">
final
    {{cursorObj}}
  </div>

  <div :class="[ 'cursor', { 'hover': cursorObj.hover }, {'hide': cursorObj.hide} ]">
    <div :style="cursorCircle()" class="circle"></div>
    <div class="point" ref="point" :style="cursorPoint()"></div>
  </div>
  </div>
</template>
<script>
export default {
  
  props: {
    cursorObj: Object
    },

  data () {
    return {
     
      }
  },

      computed: {
    
  },

  methods: {
    cursorCircle() {
      return `transform: translateX(${this.cursorObj.xParent}px) translateY(${this.cursorObj.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.cursorObj.xChild - 3}px) translateY(${this.cursorObj.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  mounted() {
    console.log('nice' + this.data);
  }
  
}
</script>
<style scoped>
  
  

.stats {
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: red;
  }

  .point {
top: 0;
      left: 0;
      position: fixed;
      width: 10px;
      height: 10px;
      pointer-events: none;
      user-select: none;
      border-radius: 100%;
      background: #000;
      z-index: 55555555;
      backface-visibility: hidden;
      will-change: transform;
    }

  .circle {
    pointer-events: none;
      user-select: none;
      top: 0;
      left: 0;
      position: fixed;
      width: 30px;
      height: 30px;
      border: 2px solid #000;
      border-radius: 100%;
      z-index: 5555;
      }

</style>