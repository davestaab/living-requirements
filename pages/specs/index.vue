<template>
  <div>
    <suite :suite="suite" />
  </div>
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
