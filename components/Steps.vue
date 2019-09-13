<template>
  <div>
    <div v-for="(step, i) in filteredSteps" :key="i">
      <v-icon :color="statusColor(step)">{{ statusIcon(step) }}</v-icon>
      <span data-testid="stepName" :data-step-status="stepStatus(step)"
        >{{ step.keyword }}{{ step.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  components: {},
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
    }
  }
}
</script>

<style scoped></style>
