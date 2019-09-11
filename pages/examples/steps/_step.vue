<template>
  <div :id="example.id">
    <step v-for="(s, i) in example.steps" :key="i" :step="s"> </step>
  </div>
</template>

<script>
import Step from '@/components/Step'

export default {
  name: 'ExampleStep',
  components: { Step },
  async asyncData({ params, $axios }) {
    const example = await $axios.$get(`/examples/steps/${params.step}.json`)
    return {
      example
    }
  }
}
</script>
