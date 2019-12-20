<template>
  <div>
    <v-switch id="docsModeToggle" v-model="docsMode" :label="'Docs Mode'" />
    <status-chart
      v-if="!docsMode"
      id="featureSummaryChart"
      :chart-data="featureSummary"
      title="Features"
    />
    <status-chart
      v-if="!docsMode"
      id="scenarioSummaryChart"
      :chart-data="scenarioSummary"
      title="Scenarios"
    />
    <!--    <status-chart-->
    <!--      id="scenariosChart"-->
    <!--      :chart-data="stepSummary"-->
    <!--      title="Steps"-->
    <!--    ></status-chart>-->
    <v-expansion-panels v-if="!docsMode" multiple>
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
    <!--    docs mode-->
    <div v-if="docsMode">
      <div
        v-for="feature in suite"
        :id="feature.id"
        :key="feature.id"
        class="feature"
      >
        <tags :tags="feature.tags"></tags>
        <div class="headline" data-testid="featureName">
          {{ feature.keyword }}: {{ feature.name }}
        </div>
        <!-- prettier-ignore -->
        <div v-if="feature.description"
          class="blockquote description"
          data-testid="featureDescription">{{ feature.description }}</div>
        <div
          v-for="(scenario, j) in feature.elements"
          :id="cleanId(scenario.id)"
          :key="j"
          class="pl-6"
        >
          <tags :tags="scenario.tags"></tags>
          <div data-testid="scenarioName" class="title">
            {{ scenario.keyword }}: {{ scenario.name }}
          </div>
          <!-- prettier-ignore -->
          <div v-if="scenario.description"
            class="blockquote description"
            data-testid="scenarioDescription">{{ scenario.description }}</div>
          <div
            v-for="(step, k) in filterSteps(scenario.steps)"
            :key="k"
            class="pl-3"
          >
            <div class="body-2" data-testid="stepName">
              {{ step.keyword }}{{ step.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  stepSummary,
  scenarioSummary,
  featureSummary
} from './helpers/statusSummary'
import { cleanId } from './utils'
import Feature from '@/components/Feature'
import Scenario from '@/components/Scenario'
import StatusChart from '@/components/StatusChart'
import Tags from '@/components/Tags'

export default {
  name: 'Suite',
  components: {
    StatusChart,
    Feature,
    Scenario,
    Tags
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
  },
  methods: {
    cleanId(id) {
      return cleanId(id)
    },
    filterSteps(steps) {
      return steps.filter((s) => !s.hidden)
    }
  }
}
</script>

<style scoped>
.description {
  white-space: pre;
}

.feature:not(:first-child) {
  margin-top: 24px;
}
</style>
