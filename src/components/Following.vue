<template>
    <div class="following">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'following',
  data () {
    return {
      msg: '正在关注'
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
