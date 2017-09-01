<template>
    <div class="vindex">
        <div class="nav">
                <router-link to="/"><span class="logo">ITlearn</span></router-link>
                <router-link to="/" class="">首页</router-link>
                <router-link to="/" >学习小组</router-link>
                <router-link to="/">项目交流</router-link>
            
                <router-link to="" class="right">登录</router-link>
                <router-link to="" class="right border"><span class="register">注册</span></router-link>
            
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name:'vindex',
        data() {
            return {
                input1:''
            }
        },
        methods: {
            handleIconClik(er){
                console.log(ev);
            }
        }
        
    }
</script>

<style>

.register {
    color: #03B964;
}
.current {
    border-bottom: 2px solid #03B964;
    border-width: 3px;
    padding-bottom: 25px;
    
}
.border{
    border: 2px solid #03B964;
    border-radius: 25px;
    border-width: 1px;
    /*width:100px;*/
    padding: 7px 50px;
    color: #03B964;
}

.right{
    /*float: right;*/
    position: relative;
    left: 10%;
    /*padding: 10px;*/
}
.logo {
    float: left;
    font-size: 35px;
    font-family:Courier,sans-serif;
    color: #03B964;
}   
.nav{
    /*position: fixed;
    z-index: 9999;*/
    height: 55px;
    background-color: #FFFFFF;
    width: 100%;
    border-bottom: 5px solid #f6f6f6;
    text-align: center;
    padding-top: 23px;
}

.nav a{
    position: relative;
    right: 20%;
    text-decoration: none;
    font-size: 20px;
    /*color:#C7C7C7;*/
    color: black;
    /*height: 30px;*/
    /*line-height: 30px;*/
    padding-left: 20px;
    padding-right: 20px;    
}
.nav a:hover {
    border-bottom: 2px solid #03B964;
    border-width: 3px;
    padding-bottom: 25px;
}
.nav a:visited {
    border-bottom: 2px solid #03B964;
    border-width: 3px;
    padding-bottom: 25px;
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
</style>