v<template>
    <div class="user">
        <div class="profileHeader">
          <div class="userAvatar">
            <v-gravatar :email="email" size='75'/>
          </div>
          <div class="otherUserInfo">
            <p class="username">{{userName}}</p>
            <span class="personalInfo">{{selfIntroduce}}</span>
            <span class="personalInfo">个人主页：{{personalPage}}</span>
            <div class="follow">
              <router-link :to="{ name: 'following'}" >正在关注 {{following}}</router-link>
              <router-link :to="{ name: 'follower'}" >关注者 {{follower}}</router-link>
              <!--<a href="javascript:void(0)" @click="following">正在关注 {{following}}</a>
              <a href="javascript:void(0)" @click="follower">关注者 {{follower}}</a>-->
            </div>
            <!--<span class="set-button">-->
              <el-button class="set-button"><router-link :to="{ name: 'setting'}">设置</router-link></el-button>
              <!--</span>-->
          </div>
        </div>
        <!--<router-view name="setting"></router-view>-->
        <div class="profileBody">
          <div class="profileBody-nav">
            <!--<router-link to="/user" exact="true">我喜欢的</router-link>-->
            <router-link :to="{ name: 'like'}" exact="true">我喜欢的</router-link>
            <router-link :to="{ name: 'collection'}">我的收藏集</router-link>
            <router-link :to="{ name: 'subscribed'}">标签管理</router-link>
            <!--<router-link to="/user" exact="true">我喜欢的</router-link>
            <router-link to="/user/collection">我的收藏集</router-link>
            <router-link to="/user/tag">标签管理</router-link>-->
          </div>
          <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userName:'jesses',
      email:'835614574@qq.com',
      selfIntroduce: '这家伙很懒，什么也没留下',
      personalPage: '',
      following:'0',
      follower:'0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.follow a{
  text-decoration: none;
  color: #8f8f8f;
  font-size: 15px;
  margin-right: 15px;
}
.follow a:hover {
  color: #03B964;
}

.set-button a{
  text-decoration: none;
  color: #03B964;
}
.personalInfo {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  color: #8f8f8f;
}
.profileBody-nav {
  border-bottom: 1px solid #dadee9;
  padding-bottom: 8px;
}
.profileBody-nav .router-link-active {
    border-bottom: 2px solid #03B964;
    padding-bottom: 8px;

}
.profileBody-nav a{
   text-decoration: none;
    font-size: 16px;
    color: black;
    margin-right: 25px;
}
.profileBody-nav a:hover {
  color: #03B964;
}
.otherUserInfo {
  float: left;
  margin-left: 20px;

  /*border: 1px solid red;*/
}
.el-button {
  background-color:#f4f5f5;
  margin-top: 20px;
  border-radius: 20px;
}
.username {
  /*line-height: 45px;*/
  /*font-weight: bold;*/
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 10px;
}
.userAvatar {
  width: 75px;
  float: left;
  box-sizing: border-box;

  height: 200px;
  /*border: 1px solid green;*/
}
.userAvatar img {
  border-radius: 50%;
}

.profileHeader {
  

  height: 200px;
  /*border: 1px solid green;*/
}
.profileBody {
  height: 500px;
  /*border: 1px solid red;*/
}

.user {
  margin: auto;
  width: 45%;
  background: #f4f5f5;
  margin-top: 30px;
  /*height: auto;*/

  height: 700px;
  /*border: 1px solid green;*/
}
</style>
