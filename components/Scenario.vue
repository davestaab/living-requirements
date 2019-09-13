<template>
  <div :id="cleanId">
    <tags :tags="scenario.tags"></tags>
    <div
      data-testid="scenarioName"
      class="d-flex justify-space-between title mb-3"
    >
      {{ scenario.keyword }}: {{ scenario.name }}
      <scenario-step-results :steps="scenario.steps"></scenario-step-results>
    </div>
    <pre data-testid="scenarioDescription" class="mb-6">{{
      scenario.description
    }}</pre>
    <!--    <Steps v-for="(s, i) in scenario.steps" :key="i" :step="s"></Steps>-->
    <steps :steps="scenario.steps" class="mb-6"></steps>
  </div>
</template>

<script>
import { cleanId } from './utils'
import Tags from './Tags'
import ScenarioStepResults from './ScenarioStepResults'
import Steps from './Steps'

export default {
  name: 'Scenario',
  components: {
    Tags,
    Steps,
    ScenarioStepResults
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
    }
  }
}
</script>

<style scoped></style>
