v<template>
    <div class="user">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: '我的主页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}
</style>
