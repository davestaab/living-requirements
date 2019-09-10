<template>
  <h1 :id="feature.id" data-testid="featureName">
    {{ feature.keyword }}: {{ feature.name }}
  </h1>
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
