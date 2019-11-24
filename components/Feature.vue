<template>
  <v-expansion-panel :id="feature.id">
    <v-expansion-panel-header>
      <v-container>
        <v-row no-gutters align="center" justify="space-between">
          <v-col cols="auto">
            <tags :tags="feature.tags"></tags>
            <span data-testid="featureName" class="display-1 my-6">
              {{ feature.keyword }}: {{ feature.name }}
            </span>
          </v-col>
          <v-col cols="2">
            <status-summary :summary="featureSummary"></status-summary>
          </v-col>
        </v-row>
      </v-container>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <pre data-testid="featureDescription" class="mb-6">{{
        feature.description
      }}</pre>
      <slot />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Tags from './Tags'

import StatusSummary from './StatusSummary'
import { singleFeatureSummary } from './helpers/statusSummary'

export default {
  name: 'Feature',
  components: {
    Tags,
    StatusSummary
  },
  props: {
    feature: {
      required: true,
      type: Object
    }
  },
  computed: {
    featureSummary() {
      return singleFeatureSummary(this.feature)
    }
  }
}
</script>

<style scoped></style>
