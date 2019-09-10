<template>
  <div :id="feature.id">
    <tags :tags="feature.tags"></tags>
    <h1 data-testid="featureName">{{ feature.keyword }}: {{ feature.name }}</h1>
    <pre data-testid="featureDescription">{{ feature.description }}</pre>
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
