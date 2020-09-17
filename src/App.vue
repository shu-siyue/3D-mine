<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}

body {
  margin: 0;
}

#app {
  height: 100%;
  width: 100%;
  .el-loading-mask {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>
