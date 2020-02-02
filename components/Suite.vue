<template>
  <div>
    <v-sheet elevation="2" class="py-2 px-4 mb-2">
      <span class="title">Settings</span>
      <v-switch id="docsModeToggle" v-model="docsMode" :label="'Docs Mode'" />
      <span class="subheading">Filter tags</span>
      <v-chip-group
        id="tagSet"
        v-model="filteredTags"
        multiple
        column
        active-class="primary--text"
      >
        <v-chip
          v-for="tag in tagSet"
          :key="tag"
          :value="tag"
          filter
          data-testid="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-sheet>
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
    <v-expansion-panels v-if="!docsMode" multiple>
      <feature
        v-for="(feature, i) in filteredSuite"
        :key="i"
        :feature="feature"
      >
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
        v-for="feature in filteredSuite"
        :id="feature.id"
        :key="feature.id"
        class="feature"
      >
        <tags :tags="feature.tags"></tags>
        <div class="headline" data-testid="featureName">
          {{ feature.keyword }}: {{ feature.name }}
        </div>
        <div
          v-if="feature.description"
          class="blockquote description"
          data-testid="featureDescription"
        >
          {{ feature.description }}
        </div>
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
          <div
            v-if="scenario.description"
            class="blockquote description"
            data-testid="scenarioDescription"
          >
            {{ scenario.description }}
          </div>
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
import { getTags, filterSuiteByTags } from './helpers/tags'
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
      docsMode: false,
      filteredTags: []
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
    },
    tagSet() {
      return getTags(this.suite)
    },
    filteredSuite() {
      return this.filteredTags.length > 0
        ? filterSuiteByTags(this.suite, this.filteredTags)
        : this.suite
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
