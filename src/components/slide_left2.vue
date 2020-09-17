<template>
  <div id="slideLeft2">
    <div class="bg-color-black">
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:100%;height: 100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slideLeft2",
  data() {
    return {
      config: {
        header: ["钻孔编号", "位置", "冲击地压"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
        index: true,
        align: "center",
        headerBGC: "#0f1325",
        oddRowBGC: "#0f1325",
        evenRowBGC: "#171c33",
      },
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
#slideLeft2 {
  padding: 0.8rem 0.7rem 0 0.7rem;
  // height: 10.125rem;
  // min-width: 3.75rem;
  // border-radius: 1rem;
}
</style>
