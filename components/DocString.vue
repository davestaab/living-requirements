<template>
  <pre class="blue-grey lighten-5 px-6 py-3" data-testid="docString"
    >{{ step.arguments[0].content }}
  </pre>
</template>

<script>
export default {
  name: 'DocString',
  props: {
    step: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
