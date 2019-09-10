<template>
  <div>
    <feature v-for="(e, i) in suit" :key="i" :feature="e"> </feature>
  </div>
</template>

<script>
import Feature from '@/components/Feature'

export default {
  name: 'Snapshot',
  components: { Feature },
  async asyncData({ $axios }) {
    const suit = await $axios.$get('/output/cucumber_report_snapshot.json')
    return {
      suit
    }
  }
}
</script>
