<template>
  <v-expansion-panel :id="feature.id">
    <v-expansion-panel-header>
      <div>
        <tags :tags="feature.tags"></tags>
        <span data-testid="featureName" class="display-1 my-6">
          {{ feature.keyword }}: {{ feature.name }}
        </span>
      </div>
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

export default {
  name: 'Feature',
  components: {
    Tags
  },
  props: {
    feature: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped></style>
