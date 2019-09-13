<template>
  <v-expansion-panels multiple>
    <feature v-for="(f, i) in suite" :key="i" :feature="f">
      <scenario v-for="(s, j) in f.elements" :key="j" :scenario="s"></scenario>
    </feature>
  </v-expansion-panels>
</template>

<script>
import Feature from '@/components/Feature'
import Scenario from '@/components/Scenario'

export default {
  name: 'Suite',
  components: {
    Feature,
    Scenario
  },
  props: {
    suite: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped></style>
