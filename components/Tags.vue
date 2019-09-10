<template>
  <div>
    <div v-for="(t, i) in tags" :key="i" class="tag" data-testid="tag">
      {{ t.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      default() {
        return []
      },
      type: Array
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
