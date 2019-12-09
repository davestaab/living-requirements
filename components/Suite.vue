<template>
  <div>
    <v-switch id="docsModeToggle" v-model="docsMode" :label="'Docs Mode'" />
    <status-chart
      id="featureSummaryChart"
      v-if="!docsMode"
      :chart-data="featureSummary"
      title="Features"
    />
    <status-chart
      id="scenarioSummaryChart"
      v-if="!docsMode"
      :chart-data="scenarioSummary"
      title="Scenarios"
    />
    <!--    <status-chart-->
    <!--      id="scenariosChart"-->
    <!--      :chart-data="stepSummary"-->
    <!--      title="Steps"-->
    <!--    ></status-chart>-->
    <v-expansion-panels multiple>
      <feature v-for="(feature, i) in suite" :key="i" :feature="feature">
        <v-expansion-panels multiple focusable>
          <scenario
            v-for="(scenario, j) in feature.elements"
            :key="j"
            :scenario="scenario"
          />
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
  data() {
    return {
      docsMode: false
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
