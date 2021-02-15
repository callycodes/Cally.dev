<template>
<div id="status-bar" class="w-100">
  <div id="socials-section" class="w-25">
    <div class="icon-list">
      <b-icon icon="facebook"></b-icon>
      <b-icon icon="twitter"></b-icon>
      <b-icon icon="youtube"></b-icon>
      <b-icon icon="geo-alt-fill"></b-icon>
      <b-icon icon="envelope-fill"></b-icon>
    </div>
  </div>

  <div id="updates-section" class="w-75">
    <div class="icon-list float-right">
      <b-icon icon="person-circle"></b-icon>
      </div>
  </div>
</div>
</template>

<script>

export default {
    name: "NewsHolder"
}
</script>

<style lang="css">

#status-bar {

  width: 100%;
  height: 35px;
  display: flex;
}

#socials-section {
  min-width: 200px;
  height: 100%;
  line-height: 35px;
  background-color: var(--prussian-blue);
  text-align: center;
}

.icon-list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-list .b-icon.bi {
  font-size: 20px;
  margin: 4px;
  color: white;
}

#updates-section .icon-list .b-icon.bi {
  font-size: 20px;
  margin: 4px;
  color: var(--prussian-blue);
}

#updates-section {
  width: 75%;
  height: 100%;
  background-color: var(--golden-yellow);
}

</style>