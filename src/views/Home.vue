<template>
  <div class="home">
    <el-container style="height: 100%">
      <el-header style="height: 9%">
        <el-row type="flex" class="row-bg" justify="space-around" style="width: 100%">
          <el-col :span="7">
            <div class="grid-content information">
              <div class="weather">
                <img :src="imgSrc" />
                <span class="tem">{{ weatherData.tem }}°C</span>
              </div>
              <div class="divide">|</div>
              <div class="showTime">
                <span class="time">{{ nowTime }}</span>
                <span class="date">
                  <span>{{ week }}</span>
                  <span>{{ date }}</span>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content title">矿井危险性监测系统</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content search">
              <el-input placeholder="矿井名称" suffix-icon="el-icon-search" v-model="search"></el-input>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside style="width: 23%">
          <div class="left">
            <div>
              <dv-border-box-12>
                <slideLeft2 />
                <!--<dv-scroll-board :config="config" style="width:100%;height: 100%" /> -->
              </dv-border-box-12>
              <!--
            <slideLeft title="钻孔实时冲击地压">
              <dv-scroll-board :config="config" style="width:100%;height: 100%" />
            </slideLeft>
              -->
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div class="map">
              <netMap></netMap>
            </div>
          </el-main>
          <el-footer style="height: 35%">
            <div class="footer-item">
              <dataPanel title="矿井总冲击地压">
                <line1 :option="lineChartOption1" style="height: 100%;width: 100%"></line1>
              </dataPanel>
            </div>
            <div class="footer-item">
              <dataPanel title="总瓦斯灾害性">
                <line2 />
              </dataPanel>
            </div>
          </el-footer>
        </el-container>
        <el-aside style="width: 23%">
          <div class="right">
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
            <div>
              <dataPanel title="xxxxx"></dataPanel>
            </div>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import navBar from "@/components/nav_bar.vue";
import dataPanel from "@/components/data_panel.vue";
import netMap from "@/components/net_map.vue";
import line1 from "@/components/line1.vue";
import line2 from "@/components/line2.vue";
import slideLeft from "@/components/slide_left.vue";
import slideLeft2 from "@/components/slide_left2.vue";

export default {
  name: "Home",
  components: {
    // navBar,
    dataPanel,
    netMap,
    line1,
    line2,
    slideLeft,
    slideLeft2,
  },
  data() {
    return {
      lineChartOption1: null,
      search: "",
      nowTime: "",
      week: "",
      date: "",
      timer: null,
      imgSrc: "",
      weatherData: {},
    };
  },
  mounted() {
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60); // 针对天气，设置每小时获取一次最新数据

    this.nowTimes();
    this.lineChartOption1 = {
      color: ["#4D79FF", "#4DFF79", "#FFC30F", "#FF794D", "#FF4DD2"], // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
      legend: {
        // 图例
        y: "6%",
        x: "center",
        data: ["总冲击地压(Pa)"],
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      textStyle: {
        color: "#ddd",
      },
      grid: {
        left: "3%",
        right: "5%",
        bottom: "3%",
        top: "18%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["2012", "2013", "2014", "2015", "2016"],
        },
      ],
      yAxis: [
        {
          type: "value",
          boundaryGap: true,
        },
      ],
      series: [
        {
          name: "总冲击地压(Pa)",
          type: "line",
          data: [33053, 33031, 33199, 33652, 33810],
        },
      ],
    };
  },
  methods: {
    timeFormate(timeStamp) {
      //显示当前时间
      let newDate = new Date(timeStamp);
      let year = newDate.getFullYear();
      let month =
        newDate.getMonth() + 1 < 10
          ? "0" + (newDate.getMonth() + 1)
          : newDate.getMonth() + 1;
      let date =
        newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
      let hh =
        newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
      let mm =
        newDate.getMinutes() < 10
          ? "0" + newDate.getMinutes()
          : newDate.getMinutes();
      let ss =
        newDate.getSeconds() < 10
          ? "0" + newDate.getSeconds()
          : newDate.getSeconds();
      let week = newDate.getDay();
      let weeks = ["日", "一", "二", "三", "四", "五", "六"];
      let getWeek = "星期" + weeks[week];
      this.week = getWeek;
      this.date = year + "." + month + "." + date;
      this.nowTime = hh + ":" + mm + ":" + ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000); // 每隔1秒更新一次数据，即1000毫秒。setInterval() 方法可按照指定的周期（以毫秒计）来不停地调用函数或计算表达式，其为window对象的方法
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
    getWeather() {
      // 第三方天气api接口
      this.$axios
        .get("https://www.tianqiapi.com/api/", {
          params: {
            appid: "88175666",
            appsecret: "355UEDrl",
            version: "v6",
          }, // es6提供了一种简洁的函数写法：参数 => 函数体。当箭头函数没有参数或者有多个参数，要用 () 括起来；当箭头函数函数体有多行语句，用 {} 包裹起来，表示代码块。
        })
        .then((res) => {
          // then()方法是异步执行。当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到等的问题。
          if (res.data) {
            if (res.data.wea_img == "xue") {
              this.imgSrc = require("../assets/img/xue.png");
            } else if (res.data.wea_img == "yin") {
              this.imgSrc = require("../assets/img/yin.png");
            } else if (
              res.data.wea_img == "yu" ||
              res.data.wea_img == "bingbao"
            ) {
              this.imgSrc = require("../assets/img/yu.png");
            } else if (res.data.wea_img == "yun") {
              this.imgSrc = require("../assets/img/yun.png");
            } else if (res.data.wea_img == "wu") {
              this.imgSrc = require("../assets/img/wu.png");
            } else if (res.data.wea_img == "shachen") {
              this.imgSrc = require("../assets/img/shachen.png");
            } else if (res.data.wea_img == "lei") {
              this.imgSrc = require("../assets/img/lei.png");
            } else {
              this.imgSrc = require("../assets/img/qing.png");
            }
            this.weatherData = res.data;
            console.log("天气信息：", res.data);
          } // catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.home {
  background-color: #081734;
  .el-header {
    background-color: #081734;
    // background: url(../assets/img/head_bg_2.png) no-repeat top center;
    color: rgb(179, 193, 248);
    text-align: center;
    display: flex;
    flex-direction: row;
    padding: 0 0;
    line-height: 300%;

    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .title {
        color: #c1dffc;
        font-weight: 500;
        font-size: 23px;
        letter-spacing: 3px;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 42px;
      }
      .search {
        background-color: transparent;
        border-color: #ccc;
        // color: #fff;
        width: 28rem;
        &::placeholder {
          opacity: 1;
        }
        float: right;
      }
      .information {
        text-align: left;
        display: flex;
        .weather {
          // position: absolute;
          // left: 1.375rem;
          // top: 0.35rem;
          margin-top: 0.7rem;
          font-size: 1.6rem;
          color: rgba(182, 242, 250, 0.7);
          img {
            width: 2.7rem;
          }
          span {
            display: inline-block; // https://www.cnblogs.com/Ry-yuan/p/6848197.html
          }
          .tem {
            margin-left: 0.4rem;
          }
        }
        .divide {
          // margin-left: 0.4rem;
          // margin-right: 0.4rem;
          margin: 0.3rem 0.4rem 0 0.4rem;
        }
        .showTime {
          // position: absolute;
          // right: 1.375rem;
          // top: 0.5rem;
          color: rgba(126, 240, 255, 0.7);
          display: flex;
          .time {
            font-size: 1.6rem;
            margin-top: 0.7rem;
          }
          .date {
            span {
              display: block;
              // margin: 2rem 1rem 0 0;
              &:nth-child(1) {
                font-size: 1.3rem;
                text-align: right;
                line-height: 110%;
                margin: 1.4rem 0 0 0.3rem;
              }
              &:nth-child(2) {
                font-size: 1.3rem;
                line-height: 100%;
                margin: 0.7rem 0 0 1.1rem;
              }
            }
          }
        }
      }
    }

    .row-bg {
      padding: 5px 0;
      // background-color: #f9fafc;
    }
  }

  .el-footer {
    text-align: center;
    display: flex;
    flex-direction: row;
    padding: 0 5px;
    color: rgb(243, 236, 236);

    .footer-item {
      flex: 1;
      padding-right: 0.9rem;
      padding-bottom: 0.6rem;
      &:last-child {
        padding-right: 0;
      }
    }
  }

  .el-aside {
    // background-color: #d3dce6;
    // color: #333;
    text-align: center;
    line-height: 100%;
    display: flex;
    flex-direction: column;
    .left {
      display: grid;
      grid-template-rows: 2.5fr 1fr 2fr 2fr 1fr;
      height: 100%;
    }
    .right {
      display: grid;
      grid-template-rows: 2.5fr 1fr 2fr 2fr 1fr;
      height: 100%;
    }
  }

  .el-main {
    // background-color: #e9eef3;
    color: rgb(243, 236, 236);
    text-align: center;
    line-height: 100%;
    padding: 0px;
    display: flex;
    .map {
      border: 1px solid #337699;
      margin: 5px 5px 5px 5px;
      flex: 1;
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  height: 100%;
  width: 100%;
}
</style>
