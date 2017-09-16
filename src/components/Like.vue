<template>
    <div class="like">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'like',
  data () {
    return {
      msg: '我喜欢的'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.like {
  /*border: 1px solid red;*/
}
h2 {
    text-align: center;
}
</style>
