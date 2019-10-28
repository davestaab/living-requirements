<template>
  <div class="status-summary">
    <v-avatar
      v-for="(s, i) in summary"
      :key="i"
      :color="getColor(s.status)"
      size="20"
      class="count"
      :data-step-status="s.status"
      data-testid="stepResult"
    >
      <span class="white--text caption">{{ s.count }}</span>
    </v-avatar>
  </div>
</template>

<script>
import { FAILED, PASSED, PENDING, SKIPPED, UNDEFINED } from './utils'

export default {
  name: 'StatusSummary',
  props: {
    summary: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getColor(status) {
      switch (status) {
        case FAILED:
          return 'red'
        case PASSED:
          return 'green'
        case PENDING:
          return 'orange'
        case SKIPPED:
          return 'grey'
        case UNDEFINED:
          return 'light-blue'
        default:
          return 'grey'
      }
    }
  }
}
</script>

<style scoped>
.count:not(:last-child) {
  margin-right: 5px;
}
.status-summary {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
