<template>
  <div class="mycollection">
    <div class="collection-Body">
      <div class="collection-Nav">
        <div class="collection-Nav-left">
          <span class="collection-Name">{{collectionName}}</span>
          <button class="join" @click="change">删除</button>
        </div>
          <span class="join-article">{{collectionArticleNum}} 文章</span>
        <!--<div class="collection-Nav-right">
                <router-link to="" exact="true">最新</router-link>
                <router-link to="">热门</router-link>
              </div>-->
        
        <!--<span class="join-article">{{collectionArticleNum}} 文章</span>-->
      </div>
      <div class="collection-main">
        <div class="">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="最新" name="first">最新</el-tab-pane>
            <el-tab-pane label="热门" name="second">热门</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycollection',
  data() {
    return {
      collectionName: '',
      collectionJoinNum: '1000',
      collectionArticleNum: '256',

      activeName: 'first'
    }
  },
  methods: {
    change() {
      this.collectionJoinNum = 1;
    }
  },
  created() {
    this.collectionName = this.$route.params.cName;
    // console.log(this.$route.params.tName);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-top: 3px;
  margin-left: 15px;
  display: block;
  float: left;
}

.collection-Nav-right a {
  text-decoration: none;
  color: #99909f;
  font-size: 18px;
}

.collection-Nav-right a:hover {
  color: #03b964;
}

.collection-Nav-right .router-link-active {
  border-bottom: 2px solid #03B964;
  padding-bottom: 10px;
}

.collection-Nav-right {
  float: right;
  padding: 15px 0;
}

.collection-Nav-left {
  /*float: left;*/
  padding: 5px 0;
}

.join {
  float: right;
  background-color: #fff;
  border: 1px solid #03b964;
  color: #03b964;
  outline: none;
  padding: 4px 15px 4px 15px;
  /*text-decoration: none;*/
  /*display: inline;*/
  /*float: left;*/
}

.join-article {
  display: block;
  /*clear: both;*/
  font-size: 14px;
  color: #666;
}

.collection-Nav {
  height: 70px;
  /*border: 1px solid gray;*/
}

.collection-Name {
  /*display: block;*/
  /*float: left;*/
  /*margin-top: 5px;*/
  font-size: 30px;
  color: #666;
}

.collection-main {
  margin-top: 15px;
  background: #FFFFFF;
  height: 500px;
  /*border: 1px solid green;*/
}

.mycollection {
  width: 50%;
  margin: auto;
  margin-top: 20px;

  /*height: 500px;*/
  /*border: 1px solid green;*/
}
</style>
