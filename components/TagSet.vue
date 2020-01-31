<template>
  <tags :tags="tags" />
</template>

<script>
import Tags from './Tags'

export default {
  name: 'TagSet',
  components: {
    Tags
  },
  props: {
    tags: {
      type: Set,
      default() {
        return new Set()
      }
    }
  }
}
</script>

<style scoped></style>
