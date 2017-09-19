<template>
  <div class="tag">
    <div class="tag-Body">
      <div class="tag-Nav">
        <div class="tag-Nav-left">
          <span class="tag-Name">{{tagName}}</span>
          <button class="join" @click="change">关注</button>
        </div>
          <span class="join-article">{{tagJoinNum}} 关注，{{tagArticleNum}} 文章</span>
        <!--<div class="tag-Nav-right">
                <router-link to="" exact="true">最新</router-link>
                <router-link to="">热门</router-link>
              </div>-->
        
        <!--<span class="join-article">{{tagArticleNum}} 文章</span>-->
      </div>
      <div class="tag-main">
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
  name: 'tag',
  data() {
    return {
      tagName: '',
      tagJoinNum: '1000',
      tagArticleNum: '256',

      activeName: 'first'
    }
  },
  methods: {
    change() {
      this.tagJoinNum = 1;
    }
  },
  created() {
    this.tagName = this.$route.params.tName;
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

.tag-Nav-right a {
  text-decoration: none;
  color: #99909f;
  font-size: 18px;
}

.tag-Nav-right a:hover {
  color: #03b964;
}

.tag-Nav-right .router-link-active {
  border-bottom: 2px solid #03B964;
  padding-bottom: 10px;
}

.tag-Nav-right {
  float: right;
  padding: 15px 0;
}

.tag-Nav-left {
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

.tag-Nav {
  height: 70px;
  /*border: 1px solid gray;*/
}

.tag-Name {
  /*display: block;*/
  /*float: left;*/
  /*margin-top: 5px;*/
  font-size: 30px;
  color: #666;
}

.tag-main {
  margin-top: 15px;
  background: #FFFFFF;
  height: 500px;
  /*border: 1px solid green;*/
}

.tag {
  width: 50%;
  margin: auto;
  margin-top: 20px;

  /*height: 500px;*/
  /*border: 1px solid green;*/
}
</style>
