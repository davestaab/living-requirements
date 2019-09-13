<template>
  <div :id="example.id">
    <steps :steps="example.steps"> </steps>
  </div>
</template>

<script>
import Steps from '@/components/Steps'

export default {
  name: 'ExampleStep',
  components: { Steps },
  async asyncData({ params, $axios }) {
    const example = await $axios.$get(`/examples/steps/${params.step}.json`)
    return {
      example
    }
  }
}
</script>
