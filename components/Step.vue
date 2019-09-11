<template>
  <div>
    <v-icon data-testid="stepStatus" :color="statusColor">{{
      statusIcon
    }}</v-icon>
    <span data-testid="stepName">{{ step.keyword }}{{ step.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Step',
  components: {},
  props: {
    step: {
      required: true,
      type: Object
    }
  },
  computed: {
    status() {
      return this.step.result ? this.step.result.status : ''
    },
    statusIcon() {
      switch (this.status) {
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
    statusColor() {
      switch (this.status) {
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
