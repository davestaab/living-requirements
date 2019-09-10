<template>
  <div data-testid="step">{{ step.keyword }}{{ step.name }}</div>
</template>

<script>
export default {
  name: 'Step',
  components: {},
  props: {
    step: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped></style>
