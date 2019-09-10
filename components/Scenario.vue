<template>
  <div :id="cleanId">
    <div v-for="(t, i) in scenario.tags" :key="i" class="tag" data-testid="tag">
      {{ t.name }}
    </div>
    <h2 data-testid="scenarioName">
      {{ scenario.keyword }}: {{ scenario.name }}
    </h2>
  </div>
</template>

<script>
import { cleanId } from './utils'

export default {
  name: 'Scenario',
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

<style scoped>
.tag {
  display: inline;
  color: dimgray;
}
</style>
