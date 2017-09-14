<template>
    <div class="vindex">
        <div class="nav">
            <router-link to="/"><span class="logo">ITlearn</span></router-link>
            <div class="nav-body">
                <div class="nav-left">
                    <router-link to="/" exact="true">首页</router-link>
                    <router-link to="/group" >学习小组</router-link>
                    <router-link to="/project" >项目交流</router-link>
                </div>
            
                <div class="nav-right">
                    <div class="nav-right-serch">
                        <el-input placeholder="搜索 文章" icon="search" v-model="input1" :on-icon-click="handleIconClik"></el-input>
                    </div>
                    <div class="afterLogin">
                        <div class="shareAndnoti">
                          <router-link to="/share" title="分享文章">
                            <i class="el-icon-fa el-icon-fa-share-alt" aria-hidden="true" style="margin-top:6px"></i>
                          </router-link>
                          <router-link to="/notifications" >
                            <i class="el-icon-fa el-icon-fa-bell-o" aria-hidden="true" style="margin-top:6px;margin-left:-15px"></i>
                          </router-link>
                        </div>
                        
                        <div class="img-avatar">

                          <el-dropdown trigger="click">
                              <span class="el-dropdown-link">
                                <v-gravatar email="835614574@qq.com" size='33'/>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <router-link to="/user"><el-dropdown-item><i class="el-icon-fa el-icon-fa-home" aria-hidden="true"></i>我的主页</el-dropdown-item></router-link>
                                <router-link to=""><el-dropdown-item><i class="el-icon-fa el-icon-fa-heart" aria-hidden="true"></i>我喜欢的</el-dropdown-item></router-link>
                                <router-link to=""><el-dropdown-item divided><i class="el-icon-fa el-icon-fa-cog" aria-hidden="true"></i>设置</el-dropdown-item></router-link>
                                <router-link to=""><el-dropdown-item><i class="el-icon-fa el-icon-fa-info-circle" aria-hidden="true"></i>关于</el-dropdown-item></router-link>
                                <router-link to=""><el-dropdown-item divided><i class="el-icon-fa el-icon-fa-sign-out" aria-hidden="true"></i>退出</el-dropdown-item></router-link>
                              </el-dropdown-menu>
                            </el-dropdown>

                        </div>
                    </div>
                    <div class="beforeLogin" v-if="username">
                        <a href="javascript:void(0)" class="login" @click="loginModalFlag=true">登录</a>
                        <a href="javascript:void(0)" class="border" @click="registerModalFlag=true"><span class="register">注册</span></a>
                    </div>
                </div>
            </div>  
        </div>
        <login-register v-bind:loginModalFlag="loginModalFlag" v-bind:registerModalFlag="registerModalFlag" v-on:close="closeModal" v-on:change="changeFlag"></login-register>

        <router-view></router-view>
    </div>
</template>

<script>
    import LoginRegister from './LoginRegister'
    export default{
        name:'vindex',
       
        data() {
            return {
                userName:'',
                userPwd:'',
                loginModalFlag:false,
                registerModalFlag:false,
                loginerrorTip:false,
                registererrorTip:false
            }
        },
        components:{
          LoginRegister,
        },
        methods: { 
            // handleIconClik(ev){
            //     console.log(ev);
            // },
            changeFlag(){
                this.loginModalFlag=!this.loginModalFlag;
                this.registerModalFlag=!this.registerModalFlag;
            },
            closeModal(){
                this.loginModalFlag=false;
                this.registerModalFlag=false;
            },
            register(){
                if(!this.userRegisterName || !this.userRegisterPwd || !userRegisterEmail){
                  this.registererrorTip = true;
                  return;
                }
                axios.post("/users/",{
                  userName:this.userRegisterName,
                  userPwd:this.userRegisterPwd,
                  userEmail:this.userRegisterEmail
                }).then((response)=>{
                    let res = response.data;
                    if(res.status=="0"){
                      this.registererrorTip = false;
                      this.registerModalFlag = false;
                      this.$store.commit("updateUserInfo",res.result.userName);
                    }else{
                      this.registererrorTip = true;
                      this.registererrorTip = true;
                    }
                });
            }
        }
        
    }
</script>

<style>

.el-dropdown-menu {
  margin-top: 22px;
  width: 150px;
}
.el-dropdown-menu li {
  text-align: left;
  margin-left: 20px;
}
.el-dropdown-menu a {
  text-decoration: none;
  color: #818181;
  font-size: 17px;
}

.img-avatar {
  display: inline-block;
  float: left;
}
.img-avatar img {
  display: inline-block;
  /*float: left;*/
  margin-top: -2px;
  border-radius: 50%;
}
.shareAndnoti {
  display: inline-block;
  float: left !important;
  margin-right: 5px;
}

.el-icon-fa-sign-out::before {
  font-size: 17px;
  margin-right: 10px;
}
.el-icon-fa-info-circle::before {
  font-size: 17px;
  margin-right: 10px;
}
.el-icon-fa-cog::before {
  font-size: 17px;
  margin-right: 10px;
}
.el-icon-fa-heart::before {
  font-size: 16px;
  margin-right: 10px;
}
.el-icon-fa-home::before {
  font-size: 17px;
  margin-right: 10px;
}
.el-icon-fa-share-alt::before {
  font-size: 18px;
  color: #03B964;
}
.el-icon-fa-bell-o::before {
  font-size: 18px;
}

.afterLogin {
  display: inline-block;
  float: left;
  margin-left: 10px;
}
.beforeLogin {
  display: inline-block;
  float: left;
}

.nav-left .router-link-active {
    border-bottom: 2px solid #03B964;
    padding-bottom: 25px;

}
.nav-right a:hover {
    color: #03B964;
}
.nav-right-serch {
    display:inline-block;
    float: left;
    margin-top: -2px;
}
.nav-body {
    margin: auto;
    width: 60%;
}
.nav-left {
    display: inline-block;
    float: left !important;
    margin-top: 20px;
}
.nav-left a{
    position: relative;
    text-decoration: none;
    font-size: 18px;
    color: black;
    margin-right: 30px;
    
}
.nav-right {
    display: inline-block;
    float: right !important;
    margin-top: 20px;
}
.nav-right a {
    text-decoration: none;
    font-size:18px;
    color: black;
    padding: 8px 20px;
}
.nav{
    height: 75px;
    background-color: #FFFFFF;
    width: 100%;
    border-bottom: 10px solid #f6f6f6;
}
.logo {
    float: left;
    font-size: 35px;
    font-family:Courier,sans-serif;
    color: #03B964;
    /*margin-right: 130px;*/
    margin-top: 18px;
}
.register {
    color: #03B964;
    padding-top: 20px;
}
.border{
    border: 2px solid #03B964;
    border-radius: 25px;
    border-width: 1px;
}

</style>