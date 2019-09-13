<template>
  <suite :suite="suite" />
</template>

<script>
import Suite from '@/components/Suite'

export default {
  name: 'Snapshot',
  components: { Suite },
  async asyncData({ $axios }) {
    const suite = await $axios.$get('/output/cucumber_report_snapshot.json')
    return {
      suite
    }
  }
}
</script>
