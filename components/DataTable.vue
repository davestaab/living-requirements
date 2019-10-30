<template>
  <v-simple-table :dense="true" data-testid="dataTable">
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="(h, i) in header" :key="i" class="text-left">{{ h }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in body" :key="i">
          <td v-for="(c, j) in r.cells" :key="j">{{ c }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    step: {
      type: Object,
      required: true
    }
  },
  computed: {
    body() {
      const [, ...body] = this.step.arguments[0].rows
      return body
    },
    header() {
      return this.step.arguments[0].rows[0].cells
    }
  }
}
</script>

<style scoped></style>
