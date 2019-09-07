<template>
  <h1>{{ feature.name }}</h1>
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
