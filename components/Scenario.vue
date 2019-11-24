<template>
  <v-expansion-panel :id="cleanId">
    <v-expansion-panel-header>
      <v-container>
        <v-row no-gutters align="center" justify="space-between">
          <v-col cols="auto">
            <tags :tags="scenario.tags"></tags>
            <div
              data-testid="scenarioName"
              class="d-flex justify-space-between title mb-3"
            >
              {{ scenario.keyword }}: {{ scenario.name }}
            </div>
          </v-col>
          <v-col cols="2">
            <status-summary :summary="summary"></status-summary>
          </v-col>
        </v-row>
      </v-container>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <pre data-testid="scenarioDescription" class="description mb-6">{{
        scenario.description
      }}</pre>
      <steps :steps="scenario.steps" class="mb-6"></steps>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { cleanId } from './utils'
import Tags from './Tags'
import StatusSummary from './StatusSummary'
import Steps from './Steps'
import { singleScenarioSummary } from './helpers/statusSummary'

export default {
  name: 'Scenario',
  components: {
    Tags,
    Steps,
    StatusSummary
  },
  props: {
    scenario: {
      required: true,
      type: Object
    }
  },
  computed: {
    cleanId() {
      return cleanId(this.scenario.id)
    },
    summary() {
      return singleScenarioSummary(this.scenario)
    }
  }
}
</script>

<style scoped>
.description {
  white-space: normal;
}
</style>
