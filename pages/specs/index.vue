<template>
  <suite :suite="suite" />
</template>

<script>
import Suite from '@/components/Suite'

export default {
  name: 'SpecPage',
  components: { Suite },
  async asyncData({ $axios }) {
    const suite = await $axios.$get('/output/cucumber_report.json')
    return {
      suite
    }
  }
}
</script>
