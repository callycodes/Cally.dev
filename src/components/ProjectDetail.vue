<template>

<transition name="fade">
  <div v-if="getProject" :style="{'backgroundColor': '#' + getProject.accent + ''}" id="project-details">
    <button @click="close" class="close-button font-oswald" :style="{'color': getProject.invert ? 'white' : 'black'}">X</button>

    <div class="developed-with">
      <h2 class="font-oswald">Developed using</h2>
      <div class="tech-list">
        <div v-for="tech in getProject.tech" :key="tech" :class="[{'tech-item-invert': getProject.invert ? true : false}, {'tech-item': getProject.invert ? false : true}, 'font-oswald']">{{tech}}</div>
      </div>
    </div>

    <transition name="expand" appear>
    <div class="project-image" v-if="getProject.big_pic">
      <img :src="getProject.big_pic"/>
    </div>
    </transition>

    <div class="project-description font-oswald">
      {{getProject.description}}
    </div>

    <div class="project-info">
      <h1 class="project-title font-montserrat fw-900">{{getProject.name}}</h1>
      <button v-if="getProject.github" class="github-button font-oswald">Github</button>
      <button v-if="getProject.website" class="github-button font-oswald">Website</button>
    </div>

  </div>
  </transition>
</template>

<script>

import json from '../projects.json'

export default {
  props: {
    project_index: null,
  },
  computed: {
    getProject () {
      if (this.project_index != null) {
        return json[this.project_index];
      } else {
        return null;
      }
    }
  },
  methods: {
    close () {
      this.$emit('close');
    }
  },
  
}

</script>

<style scoped>


.developed-with {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 100px;
  padding: 5vw;

}

.developed-with h2 {
  font-size: 35px;
  color: white;
}

.developed-with .tech-list {
  width: 100%;
}

.developed-with .tech-list div{
  padding: 10px;
  float: left;
  margin-right: 10px;
  font-size: 20px;
}

.developed-with .tech-list .tech-item {
  background-color: transparent;
  color: black;
  border: 3px solid black;
}

.developed-with .tech-list .tech-item-invert {
  background-color: transparent;
  color: white;
  border: 3px solid white;
}

#project-details {
  width: 100%;
  height: 100%;
  right: 0px;
  bottom: 0px;
  position: fixed;
  z-index: 10;
  border-top: 2px solid black;
}

.project-image {
  margin-top: 2vw;
  position: absolute;
  height: 30vh;
  top: 25vh;
  left: 0px;
  margin: 5vw;
  width: (100% - 5vw);
}

.project-description {
  margin-top: 2vw;
  position: absolute;
  height: 20vh;
  top: 56vh;
  left: 0px;
  margin: 5vw;
  width: (100% - 5vw);
  overflow-y: scroll;
  color: white;
  font-size: 20px;
}

.project-image img {
  
  max-width:100%;
max-height:100%;
  object-fit: cover;
  width: 100%;
    overflow: hidden;
    border-radius: 10px;
}

.close-button {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  font-size: 70px;
  line-height: 10vh;
  margin-right: 20px;
}

.github-button:hover {
  background-color: white;
  color: black;
  border: 4px solid black;

}

.github-button {
  float: right;
  line-height: 70px;
  margin-top: 20px;
  border: 4px solid white;
  color: white;
  background-color: transparent;
  font-size: 3vw;
  padding: 10px;
  transition: all .5s;
  margin-left: 15px;
}

@media (max-width: 800px)  {
  .project-info {
    height: 300px;
    position: absolute;
    padding-bottom: 220px;
  }

  .project-title {
    width: 100%;
    height: 100px;
    font-size: 50px !important;
  }

  .github-button {
    margin: 0px;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    width: 45%;
    float: left;
    height: 80px;
    line-height: 40px;
    font-size: 6vw;
  }
}
.project-title {
  float: left;
  color: white;
  line-height: 150px;
  font-size: 7vw;
    max-width: 75%;
}

.project-info {
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-left: 5vw;
  width: 100%;
  padding-right: 5vw;
  height: 150px;
}

.expand-enter-active {
  animation: expand 1s;
  animation-timing-function:cubic-bezier(1, 0, 0, 1);
}

@keyframes expand {
  0% {
    width: 0px;
    height: 0px;
  }
  10% {
    width: 2vw;
    height: 2vh;
  }
  50% {
    width: 90vw;
    height: 2vh;
  }
  100% {
    width: 90vw;
    height: 30vh;
  }
}
.slide-in-enter-active {
  animation: slide-in 1s ease;
}

.slide-in-leave-active {
  animation: slide-in 1s reverse;
}

@keyframes slide-in {
  from {
    left: 100%;
  }

  to {
    left: 0px;
  }
}

</style>