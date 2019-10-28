<template>
  <div :id="cleanId">
    <tags :tags="scenario.tags"></tags>
    <div
      data-testid="scenarioName"
      class="d-flex justify-space-between title mb-3"
    >
      {{ scenario.keyword }}: {{ scenario.name }}
      <status-summary :summary="summary"></status-summary>
    </div>
    <pre data-testid="scenarioDescription" class="mb-6">{{
      scenario.description
    }}</pre>
    <steps :steps="scenario.steps" class="mb-6"></steps>
  </div>
</template>

<script>
import { cleanId, getScenarioStepSummary } from './utils'
import Tags from './Tags'
import StatusSummary from './StatusSummary'
import Steps from './Steps'

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
      return getScenarioStepSummary(this.scenario.steps)
    }
  }
}
</script>

<style scoped></style>
