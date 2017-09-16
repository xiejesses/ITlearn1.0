<template>
    <div class="follower">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'follower',
  data () {
    return {
      msg: '关注者'
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
