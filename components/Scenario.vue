<template>
  <div :id="cleanId">
    <tags :tags="scenario.tags"></tags>
    <h2 data-testid="scenarioName">
      {{ scenario.keyword }}: {{ scenario.name }}
    </h2>
  </div>
</template>

<script>
import { cleanId } from './utils'
import Tags from './Tags'

export default {
  name: 'Scenario',
  components: {
    Tags
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
