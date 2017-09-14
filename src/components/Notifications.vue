<template>
  <div class="notifications">
    <div class="notification-header">通知中心</div>
    <div class="notification-body">
      <div class="notification-nav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane class="nav-style" label="系统通知" name="first" style="">系统通知</el-tab-pane>
          <el-tab-pane class="nav-style" label="评论" name="second">评论</el-tab-pane>
          <el-tab-pane class="nav-style" label="关注" name="third">关注</el-tab-pane>
          <el-tab-pane class="nav-style" label="被赞" name="fourth">被赞</el-tab-pane>
        </el-tabs>
      </div>
      <div class="notification-item">
        <div class="img-avatar"></div>
        <div class="item-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notifications',
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab,event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-style {
}
.el-tabs__item{
  /*font-size: 17px;
  padding: 0;
  margin-right: 40px;
  text-align: left;*/
  /*color: red;*/
}
.notification-nav {
  margin-top: 15px;
  font-size: 20px;
}

.notification-header {
  margin-top: 25px;
  font-size: 30px;
  color: #2D2D2f;
  font-weight: bold;
}

.notifications {
  margin: auto;
  width: 60%;
  background: #f4f5f5;
  height: auto;
}

h2 {
  text-align: center;
}
</style>
