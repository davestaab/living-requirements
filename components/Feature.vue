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
    <pre class="description">{{ feature.description }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Feature',
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
