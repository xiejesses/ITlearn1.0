<template>
    <div class="subscribe">
        <div class="subscribe-nav">
            <router-link :to="{ name: 'subscribed'}" exact="true">已关注标签</router-link>
            <router-link :to="{ name: 'tagAll'}">全部标签</router-link>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'subscribe',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
    color: black;
    font-size: 15px;
    margin-right: 15px;
}
.subscribe-nav {
    margin-top: 15px;
}
.subscribe {
  /*border-bottom: 1px solid #dadee9;
  padding-bottom: 8px;*/
}
.subscribe .router-link-active {
    border-bottom: 2px solid #03B964;
    padding-bottom: 8px;

}
.like {
  /*border: 1px solid red;*/
}
h2 {
    text-align: center;
}
</style>
