v<template>
    <div class="group">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'group',
  data () {
    return {
      msg: '项目交流'
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
