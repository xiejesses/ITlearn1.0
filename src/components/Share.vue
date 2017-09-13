v<template>
    <div class="share">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'share',
  data () {
    return {
      msg: '分享文章'
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
