<template>
  <div class="slide_left">
    <div class="title">
      <slot name="icon"></slot>
      <span>{{title}}</span>
    </div>
    <div class="content-box" ref="contentBox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide_left",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.slide_left {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  .title {
    text-align: center;
    margin: 0 auto;
    min-width: 12rem;
    padding: 0 1rem;
    height: 2.8rem;
    line-height: 2.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 10px;
    border: 1px solid #4487aa;
    z-index: 100;
    background: #226588;
  }
  .content-box {
    position: relative;
    box-shadow: inset 0 0 2rem #226588;
    border: 1px solid #337699;
    margin-top: -1.4rem;
    flex: 1;
    display: flex;
    background: #081734;
  }
}
</style>
