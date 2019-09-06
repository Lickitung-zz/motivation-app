<template>
    <div>
        {{datenow}}
    </div>
</template>

<script>
export default {
  components: {
    
  },
  created() {
    
  },
  data() {
    return {
      datenow: ''
    }
  },
  methods: {
    time() {
      this.datenow = moment().format('h:mm:ss a')

    },
  },
  mounted() {
    this.interval = setInterval(this.time, 1000)
  },
   beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>

</style>