<template>
  <div>
    <pie-chart id="scenariosChart"></pie-chart>
    <v-expansion-panels multiple inset>
      <feature v-for="(f, i) in suite" :key="i" :feature="f">
        <v-expansion-panels multiple focusable>
          <scenario
            v-for="(s, j) in f.elements"
            :key="j"
            :scenario="s"
          ></scenario>
        </v-expansion-panels>
      </feature>
    </v-expansion-panels>
  </div>
</template>

<script>
import Feature from '@/components/Feature'
import Scenario from '@/components/Scenario'
import PieChart from '@/components/PieChart'

export default {
  name: 'Suite',
  components: {
    PieChart,
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
