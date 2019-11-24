<template>
  <div>
    <status-chart
      id="featureSummaryChart"
      :chart-data="featureSummary"
      title="Features"
    ></status-chart>
    <!--    <status-chart-->
    <!--      id="scenarioSummaryChart"-->
    <!--      :chart-data="scenarioSummary"-->
    <!--      title="Scenarios"-->
    <!--    ></status-chart>-->
    <!--    <status-chart-->
    <!--      id="scenariosChart"-->
    <!--      :chart-data="stepSummary"-->
    <!--      title="Steps"-->
    <!--    ></status-chart>-->
    <v-expansion-panels multiple>
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
import {
  stepSummary,
  scenarioSummary,
  featureSummary
} from './helpers/statusSummary'
import Feature from '@/components/Feature'
import Scenario from '@/components/Scenario'
import StatusChart from '@/components/StatusChart'

export default {
  name: 'Suite',
  components: {
    StatusChart,
    Feature,
    Scenario
  },
  props: {
    suite: {
      required: true,
      type: Array
    }
  },
  computed: {
    stepSummary() {
      return stepSummary(this.suite)
    },
    scenarioSummary() {
      return scenarioSummary(this.suite)
    },
    featureSummary() {
      return featureSummary(this.suite)
    }
  }
}
</script>

<style scoped></style>
