<template>
  <div data-testid="steps">
    <div v-for="(step, i) in filteredSteps" :key="i">
      <v-icon :color="statusColor(step)">{{ statusIcon(step) }}</v-icon>
      <span :data-step-status="stepStatus(step)" data-testid="stepName"
        >{{ step.keyword }}{{ step.name }}</span
      >
      <doc-string v-if="showDocString(step)" :step="step"></doc-string>
      <data-table v-if="showDataTable(step)" :step="step"></data-table>
    </div>
  </div>
</template>

<script>
import DocString from './DocString'
import DataTable from './DataTable'

export default {
  name: 'Steps',
  components: {
    DocString,
    DataTable
  },
  props: {
    steps: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    filteredSteps() {
      return this.steps.filter((s) => !s.hidden)
    }
  },
  methods: {
    stepStatus(s) {
      return s.result ? s.result.status : ''
    },
    statusIcon(s) {
      switch (this.stepStatus(s)) {
        case 'failed':
          return 'mdi-alert-circle-outline'
        case 'passed':
          return 'mdi-check'
        case 'pending':
          return 'mdi-clock-outline'
        case 'skipped':
          return 'mdi-debug-step-over'
        case 'undefined':
          return 'mdi-checkbox-blank-outline'
        default:
          return 'mdi-cancel'
      }
    },
    statusColor(s) {
      switch (this.stepStatus(s)) {
        case 'failed':
          return 'red'
        case 'passed':
          return 'green'
        case 'pending':
          return 'orange'
        case 'skipped':
          return 'grey'
        case 'undefined':
          return 'light-blue'
        default:
          return 'mdi-cancel'
      }
    },
    showDocString(step) {
      return (
        step &&
        step.arguments &&
        step.arguments.length > 0 &&
        step.arguments[0].content
      )
    },
    showDataTable(step) {
      return (
        step &&
        step.arguments &&
        step.arguments.length > 0 &&
        step.arguments[0].rows
      )
    }
  }
}
</script>

<style scoped></style>
