<template>
    <div class="subscribed">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'subscribed',
  data () {
    return {
      msg: '已关注标签'
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
