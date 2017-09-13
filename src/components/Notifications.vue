v<template>
    <div class="notifications">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'notifications',
  data () {
    return {
      msg: '通知中心'
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
