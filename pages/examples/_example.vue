<template>
  <suite :suite="example"> </suite>
</template>

<script>
import Suite from '@/components/Suite'

export default {
  name: 'Requirements',
  components: { Suite },
  async asyncData({ params, $axios }) {
    const example = await $axios.$get(`/examples/${params.example}.json`)
    return {
      example
    }
  }
}
</script>
