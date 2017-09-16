<template>
    <div class="collection">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'collection',
  data () {
    return {
      msg: '我的收藏集'
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
