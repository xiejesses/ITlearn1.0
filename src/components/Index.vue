<template>
  <div class="index">
    <div class="body">
      <div class="main">
        <div class="topic-item">
          <div class="topic-header">
            <v-gravatar :email="email" size='35'/>
            <router-link :to="{ name: 'like', params: { uName: userName }}">{{userName}}</router-link>
            <span class="in">in</span>
          </div>
          <div class="topic-body">
            <a href="" class="topic-body-link">
              <div class="topic-content">
                <section class="section">
                  <div class="section-content">
                    <div class="topic-show-body">
                      <h3 class="topic-title">##</h3>
                      <div class="section-topic-content">$$</div>
                    </div>
                  </div>
                </section>
              </div>
            </a>
          </div>
          <div class="topic-footer-btns">footer</div>
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
export default {
  name: 'hello',
  data () {
    return {
      userName:'jesses',
      email:'835614574@qq.com',
      msg: '首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h2 {*/
/*    text-align: center;*/
/*}*/
.index {
  /*box-sizing:border-box;*/
}

.topic-header img{
    border-radius: 50%;
}



.body {
  margin: auto;
  width: 60%;
  background:#f4f5f5;
  height:800px;
  
  
  /*background-color:green;*/
}

.main {
  float:left;
  margin:auto;
  width:60%;
  
  height:800px;
  border:1px solid green;
  box-sizing:border-box;
  /*background-color:red;*/
}
.separated {
  float:left;
  margin:auto;
  width:5%;
  
  /*height:800px;*/
  border:1px solid #f4f5f5;
  box-sizing:border-box;
  /*background-color:white;*/
}
.right-side {
  float:left;
  margin:auto;
  width:35%;
  
  
  text-align:center;
  height:900px;
  /*border:1px solid green;*/
  box-sizing:border-box;
  /*background-color:black;*/
  
}

.right-side-top {
  height:400px;
  margin-bottom:10px;
  border:1px solid green;
  box-sizing:border-box;
  
}

.right-side-center {
  height:200px;
  margin-bottom:10px;
  border:1px solid green;
  box-sizing:border-box;
}

.right-side-bottom {
  height:200px;
  margin-bottom:10px;
  border:1px solid green;
  box-sizing:border-box;
}

.footer {
  height:50px;
  border:1px solid green;
  box-sizing:border-box;
}
</style>
