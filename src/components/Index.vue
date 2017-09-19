<template>
  <div class="index">
    <div class="body">
      <div class="main">
        <div class="topic-item">
          <div class="topic-header">
            <div class="flex-center">
              <v-gravatar :email="email" size='35' />
              <div class="author">
                <router-link :to="{ name: 'like', params: { uName: userName }}">{{userName}}</router-link>
                <span class="in">in</span>
                <router-link :to="{name: 'tag',params: {tName:tagName}}">{{tagName}}</router-link>
              </div>
              <span class="timeshow">
                <abbr class="timeago" :title="creatTime">{{moment(creatTime, "YYYYMMDDHHmmss").fromNow()}}</abbr>
              </span>
            </div>
          </div>
          <div class="topic-body">
            <a href="" class="topic-body-link">
              <div class="topic-content">
                <section class="section">
                  <div class="section-content">
                    <div class="topic-show-body">
                      <span class="topic-title">{{topicTitle}}</span>
                      <div class="section-topic-content">{{topicContent}}</div>
                    </div>
                  </div>
                </section>
              </div>
            </a>
          </div>
          <div class="topic-footer-btns">
            <button class="button-style" @click="loveCounter += 1">
              <i class="el-icon-fa el-icon-fa-heart-o" aria-hidden="true"></i>
              <span class="count">{{loveCounter}}</span>
            </button>
            <button class="button-style">
              <i class="el-icon-fa el-icon-fa-commenting-o" aria-hidden="true"></i>
              <span class="comment">{{commentCounter}}</span>
              </button>
              <button class="button-style" title="收藏">
                <i class="el-icon-fa el-icon-fa-align-left" aria-hidden="true"></i>
              </button>
            <!--fa-heart-->
          </div>
        </div>


        <div class="topic-item">
          <div class="topic-header">
            <div class="flex-center">
              <v-gravatar :email="email" size='35' />
              <div class="author">
                <router-link :to="{ name: 'like', params: { uName: userName }}">{{userName}}</router-link>
                <span class="in">in</span>
                <router-link :to="{name: 'tag',params: {tagName:tagName}}">{{tagName}}</router-link>
              </div>
              <span class="timeshow">
                <abbr class="timeago" :title="creatTime">{{moment(creatTime, "YYYYMMDDHHmmss").fromNow()}}</abbr>
              </span>
            </div>
          </div>
          <div class="topic-body">
            <a href="" class="topic-body-link">
              <div class="topic-content">
                <section class="section">
                  <div class="section-content">
                    <div class="topic-show-body">
                      <span class="topic-title">{{topicTitle}}</span>
                      <div class="section-topic-content">{{topicContent}}</div>
                    </div>
                  </div>
                </section>
              </div>
            </a>
          </div>
          <div class="topic-footer-btns">
            <button class="button-style" @click="loveCounter += 1">
              <i class="el-icon-fa el-icon-fa-heart-o" aria-hidden="true"></i>
              <span class="count">{{loveCounter}}</span>
            </button>
            <button class="button-style">
              <i class="el-icon-fa el-icon-fa-commenting-o" aria-hidden="true"></i>
              <span class="comment">{{commentCounter}}</span>
              </button>
              <button class="button-style" title="收藏">
                <i class="el-icon-fa el-icon-fa-align-left" aria-hidden="true"></i>
              </button>
            <!--fa-heart-->
          </div>
        </div>


      </div>
      <div class="separated"></div>
      <div class="right-side">
        <div class="right-side-top">
          <p>热门文章</p>
        </div>
        <div class="right-side-center">
          <p>热门标签</p>
        </div>
        <div class="right-side-bottom">
          <p>推荐用户</p>
        </div>
        <div class="footer">
          <p>关于 | ©ITlearn 2017</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// var moment = require('moment');
// moment().format();
// this.$moment.locale('en');

export default {

  name: 'hello',
  // data: {
  //   counter:0
  // },
  data() {
    return {
      userName: '有风度',
      email: '835614574@qq.com',
      tagName: 'Vue',
      loveCounter:10,
      commentCounter:20,
      // creatTime: '2017-09-18T08:02:15.286Z',
      creatTime: '2017-09-18 16:30:20',
      topicTitle:'对于 iOS 开发，人工智能意味着什么？',
      topicContent:'近几年来人工智能的话题那是炙手可热。在国内很多大佬言必谈机器学习和大数据；在美国刚毕业的人工智能 PHD 也是众人追捧，工资直逼 NFL 四分卫。人工智能甚至成为了互联网领域茶余饭后的话题',
      msg: '首页',
    }
  },
  methods: {
    add() {
      this.counter++;
    }
  },
  computed: {
    //获取当前时间
    now: function() {
      // return this.creatTime = new Date();
      return this.creatTime = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
p {
  margin: 0;
}
button{
  outline: none;
}
.love {
  color: #03B964;
}
.count {
  font-size: 16px;
  color: #909090;
}
.comment {
  font-size: 16px;
  color: #909090;
}
.button-style {
  background: none;
  border: none;
}
.el-icon-fa-align-left::before {
  font-size: 14px;
  color: #909090;
}
.el-icon-fa-commenting-o::before {
  font-size: 16px;
  color: #909090;
  /*margin-right: 10px;*/
}
.el-icon-fa-heart-o::before {
  font-size: 16px;
  color:#909090;
  /*margin-right: 10px;*/
}
.el-icon-fa-heart::before {
  font-size: 16px;
  color: #03B964;
  /*margin-right: 10px;*/
}
.topic-footer-btns {
  margin-top: 15px;
  float: left;
}
.section-topic-content {
  margin-top: 10px;
  font-size: 15px;
  color: #818181;
}
.topic-body-link {
  font-size: 22px;
  color: #2e3135;
  font-weight: normal;
}
.topic-header a {
  color: #03B964;
  font-size: 14px;
}
.topic-show-body {
  /*margin-top: 10px;*/
}
.flex-center {
  /*float: left;*/
}

.timeshow {
  display: block;
  float: right;
  margin-top: 5px;
}

.timeago {
  text-decoration: none;
  font-size: 15px;
  color: #a5a5aa;
  /*float: right;*/
}

.in {
  color: #a5a5aa;
  font-size: 15px;
}

.author {
  float: left;
  margin-top: 5px;
  margin-left: 10px;
}

.topic-item {
  padding: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #EDEDED;
  padding-bottom: 60px;
}

.topic-body {
  clear: both;
  margin-top: 60px;
}

.topic-header img {
  border-radius: 50%;
  float: left;
}



.body {
  margin: auto;
  width: 60%;
  background: #f4f5f5;
  /*background: #ffffff;*/
  height: 800px;


  /*background-color:green;*/
}

.main {
  float: left;
  margin: auto;
  width: 73%;
  background: #ffffff;

  height: 800px;
  /*border:1px solid green;*/
  box-sizing: border-box;
  /*background-color:red;*/
}

.separated {
  float: left;
  margin: auto;
  width: 2%;

  /*height:800px;*/
  border: 1px solid #f4f5f5;
  box-sizing: border-box;
  /*background-color:white;*/
}

.right-side {
  float: left;
  margin: auto;
  width: 25%;
  


  text-align: center;
  height: 900px;
  /*border:1px solid green;*/
  box-sizing: border-box;
  /*background-color:black;*/
}

.right-side-top {
  height: 400px;
  margin-bottom: 10px;
  background: #ffffff;
  /*border: 1px solid green;*/
  box-sizing: border-box;
}

.right-side-center {
  height: 200px;
  margin-bottom: 10px;
  background: #ffffff;
  /*border: 1px solid green;*/
  box-sizing: border-box;
}

.right-side-bottom {
  height: 200px;
  margin-bottom: 10px;
  background: #ffffff;
  /*border: 1px solid green;*/
  box-sizing: border-box;
}

.footer {
  height: 50px;
  background: #ffffff;
  /*border: 1px solid green;*/
  box-sizing: border-box;
}
</style>
