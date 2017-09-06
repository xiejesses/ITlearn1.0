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
                    <router-link to="" class="login" >登录</router-link>
                    <router-link to="" class="border"><span class="register">注册</span></router-link>
                </div>
            </div>  
            
            
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name:'vindex',
        // data: {
        //     isActive: 1,
        //     // isActive2: false,
        //     // isActive3: false
        //     // return {
        //     //     input1:'',
        //     //     isActive:true,
        //     // }
        // },
        // data: {
        //     // isActive:true
        // },
        data() {
            return {

            }
        },
        methods: {
            handleIconClik(ev){
                console.log(ev);
            }
        }
        
    }
</script>

<style>
/*.nav-left a.router-link-active {
    border-bottom: 2px solid #03B964;
    padding-bottom: 25px;
}*/
/*.active {
    border-bottom: 2px solid #03B964;
    padding-bottom: 25px;
}*/
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
    /*margin-right: 10px;*/
    margin-top: -2px;
}
.nav-body {
    margin: auto;
    width: 60%;
}
.nav-left {
    display: inline-block;
    float: left !important;
    /*border: 2px solid red;*/
    margin-top: 20px;
}
.nav-left a{
    position: relative;
    /*right: 20%;*/
    text-decoration: none;
    font-size: 18px;
    color: black;
    padding-left: 20px;
    padding-right: 20px;
}
.nav-right {
    display: inline-block;
    float: right !important;
    margin-top: 20px;
    /*border: 2px solid green;*/
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
    /*text-align: center;*/
    /*padding-top: 23px;*/
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

/*.router-link-active::after{
    
    position: absolute;
    bottom: -20px;
    left: 10px;
    right: 0;
    height: 4px;
    width: 34px;
    background: red;

}*/
/*@import url(../theme/font-awesome.min.css);*/
</style>