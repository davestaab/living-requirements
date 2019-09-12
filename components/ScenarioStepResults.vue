<template>
  <div class="step-results">
    <v-avatar
      v-for="(r, i) in resultList"
      :key="i"
      :color="getColor(r.status)"
      size="20"
      class="step-count"
      :data-step-status="r.status"
      data-testid="stepResult"
    >
      <span class="white--text caption">{{ r.count }}</span>
    </v-avatar>
  </div>
</template>

<script>
import groupBy from 'lodash/fp/groupBy'
import compose from 'lodash/fp/compose'

export default {
  name: 'ScenarioStepResults',
  props: {
    steps: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    resultList() {
      return compose(
        (results) => {
          return Object.keys(results).map((key) => {
            return {
              status: key,
              count: results[key].length
            }
          })
        },
        groupBy('result.status')
      )(this.steps)
    }
  },
  methods: {
    getColor(status) {
      switch (status) {
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
          return 'grey'
      }
    }
  }
}
</script>

<style scoped>
.step-count:not(:last-child) {
  margin-right: 10px;
}
.step-results {
  display: inline-block;
}
</style>
