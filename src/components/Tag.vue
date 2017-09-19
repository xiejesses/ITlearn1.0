<template>
    <div class="tag">
        <h2>{{ tagName }}</h2>
    </div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
      tagName:'',
    }
  },
  created() {
    this.tagName = this.$route.params.tName;
    // console.log(this.$route.params.tName);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}
</style>
