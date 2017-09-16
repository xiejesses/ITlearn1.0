<template>
    <div class="tag">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
      msg: '标签管理'
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
