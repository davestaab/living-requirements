<template>
  <div :id="feature.id">
    <div
      v-for="(t, i) in feature.tags"
      :key="i"
      class="tag"
      data-testid="featureTag"
    >
      {{ t.name }}
    </div>
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

export default {
  name: 'Feature',
  components: {
    Scenario
  },
  props: {
    feature: {
      required: true,
      type: Object
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
