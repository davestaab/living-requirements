<template>
  <div :id="feature.id">
    <tags :tags="feature.tags"></tags>
    <div data-testid="featureName" class="display-1 my-6">
      {{ feature.keyword }}: {{ feature.name }}
    </div>
    <pre data-testid="featureDescription" class="mb-6">{{
      feature.description
    }}</pre>
    <scenario
      v-for="(s, i) in feature.elements"
      :key="i"
      :scenario="s"
    ></scenario>
  </div>
</template>

<script>
import Scenario from './Scenario'
import Tags from './Tags'

export default {
  name: 'Feature',
  components: {
    Scenario,
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
