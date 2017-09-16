<template>
    <div class="setting">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      msg: '设置'
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
