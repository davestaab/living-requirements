<template>
  <div :id="cleanId">
    <tags :tags="scenario.tags"></tags>
    <h2 data-testid="scenarioName">
      {{ scenario.keyword }}: {{ scenario.name }}
    </h2>
    <step v-for="(s, i) in scenario.steps" :key="i" :step="s"></step>
  </div>
</template>

<script>
import { cleanId } from './utils'
import Tags from './Tags'
import Step from './Step'

export default {
  name: 'Scenario',
  components: {
    Tags,
    Step
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
