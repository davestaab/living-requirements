<template>
  <div>
    <feature v-for="(e, i) in example" :key="i" :feature="e"> </feature>
  </div>
</template>

<script>
import Feature from '@/components/Feature'

export default {
  name: 'Requirements',
  components: { Feature },
  async asyncData({ params, $axios }) {
    const example = await $axios.$get(`/examples/${params.example}.json`)
    return {
      example
    }
  }
}
</script>
