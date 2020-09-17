<template>
  <div class="line1" ref="linedoc"></div>
</template>

<script>
export default {
  data() {
    return {
      echart: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.echart = this.$echarts.init(this.$refs.linedoc);
      this.updateOption();
    },
    updateOption() {
      if (this.echart && this.option) {
        // this.echart.setOption(this.option);
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
        this.$nextTick(() => {
          this.echart.setOption(this.option);
        });
      }
    },
  },
  watch: {
    option: function (val) {
        this.updateOption();
      },
      deep: true,
    },
  props: {
    option: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
</style>