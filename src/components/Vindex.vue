<template>
    <div class="vindex">
        <div class="nav">
            <!--<span>ITlearn</span>-->
            <router-link>首页</router-link>
            <router-link>学习小组</router-link>
            <router-link>项目交流</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name:'vindex',
        data () {
            
        }
    }
</script>

<style scoped>
.nav{
    height:75px;
    text-align:center;
    background-color:#FFFFFF;
    width:100%;
    /*padding-top:30px;*/
    border-bottom:5px solid #F6F6F6;
}
.nav a{
   
}
</style>