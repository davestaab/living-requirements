<template>
  <div :id="feature.id">
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

<style scoped></style>
