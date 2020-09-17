<template>
  <div class="nav_bar">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <i class="fa fa-globe" style="font-size: 2.4rem"></i>
            互联网基础资源支撑平台
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <!-- /.navbar-collapse -->
        <div class="navbar-form navbar-right">
          <div class="form-group search">
            <el-input
              placeholder="请输入矿井名称"
              suffix-icon="el-icon-search"
              v-model="searchString"
            ></el-input>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav_bar',
    data() {
      return {
        searchString: ''
      }
    },
    /*
    methods: {
      handleSearch(){
        if (this.searchString.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/)) {
          //匹配到ipv4
          this.$router.push({path: '/ip/detail', query: {ip: this.searchString}})
        }
        else if (this.searchString.match(/^([0-9a-zA-Z][0-9a-zA-Z-]{0,62}\.)+([0-9a-zA-Z][0-9a-zA-Z-]{0,62})\.?$/)) {
          //匹配到域名
          this.$router.push({path: '/website/detail', query: {search: this.searchString}})
        }
        else {
          this.$router.push({path: '/website/detail', query: {search: this.searchString}})
        }
      }
    } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
.nav_bar {
  .search {
    input {
      background: transparent;
      border-color: #ccc;
      color: #fff;
      width: 28rem;
      &::placeholder {
        opacity: 0.8;
      }
    }
  }
  .navbar {
    margin-bottom: 0.5rem;
    min-height: 0;
    &.navbar-default {
      background: #002356;
      border-color: #081734;
      .navbar-brand {
        font-size: 2.2rem;
        line-height: 2.2rem;
        padding: 1.2rem 1.5rem;
        color: #fff;
        height: auto;
      }
      .navbar-nav > li {
        margin-right: 1rem;
      }
      .navbar-nav > li > a {
        padding: 1.5rem 0.7rem;
        font-size: 1.8rem;
        line-height: 1.8rem;
        color: #ddd;
      }
      .navbar-nav > .active > a {
        color: #30cccc;
        padding-bottom: 1.2rem;
        border-bottom: 0.3rem solid #45b8b8;
        background-color: transparent;
      }
      .navbar-nav > :hover > a {
        background-color: transparent;
        color: #fff;
      }
      .navbar-form {
        margin-top: 0.6rem;
        margin-bottom: 0;
      }
    }
  }
}
</style>
