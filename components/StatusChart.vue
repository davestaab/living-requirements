<template>
  <svg width="500" height="300" class="background">
    <g :transform="translate(padding.left, padding.top)">
      <text :x="innerWidth" class="chart-title" text-anchor="end">
        {{ total }} {{ title }}
      </text>
      <g id="leftAxis" v-axis-left="yScale"></g>
      <g
        id="bottomAxis"
        v-axis-bottom="xScale"
        :transform="translate(0, innerHeight)"
      ></g>
      <g v-for="(d, i) in layoutData" :key="i" :transform="translate(0, d.y)">
        <line :x2="d.x" stroke="currentColor"></line>
        <circle :cx="d.x" :fill="d.color" r="4"></circle>
      </g>
    </g>
  </svg>
</template>

<script>
import { scalePoint, scaleLinear, scaleOrdinal } from 'd3-scale'
import { max } from 'd3-array'
import { axisLeft, axisBottom } from 'd3-axis'
import { select } from 'd3-selection'
import { translate, COLORS, STATUSES, PENDING, PASSED, FAILED } from './utils'
import {
  combineSummaries,
  sortSummaryStatusByCount,
  calcSummaryTotals
} from '~/components/helpers/statusSummary'

function update(el, { value: scale }) {
  axisLeft(scale)
    .tickSizeOuter(0)
    .tickPadding(9)
    .tickSize(0)(select(el))
}
function updateBottom(el, { value: scale }) {
  axisBottom(scale)(select(el))
}

const height = 300
const width = 500
const padding = {
  top: 35,
  right: 35,
  bottom: 35,
  left: 60
}
const innerWidth = width - padding.left - padding.right
const innerHeight = height - padding.top - padding.bottom
const MINIMUM_X_DOMAIN = 10
const makeDefaultStatus = (status, count = 0) => {
  return {
    status,
    count
  }
}
const DEFAULT_STATUSES = [
  makeDefaultStatus(PASSED),
  makeDefaultStatus(FAILED),
  makeDefaultStatus(PENDING)
]

export default {
  name: 'StatusChart',
  components: {},
  directives: {
    axisLeft: {
      inserted: update,
      componentUpdated: update
    },
    axisBottom: {
      inserted: updateBottom,
      componentUpdated: updateBottom
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    chartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      padding,
      width,
      height,
      innerWidth,
      innerHeight,
      xScale: scaleLinear().range([0, innerWidth]),
      yScale: scalePoint()
        .rangeRound([innerHeight, 0])
        .padding(0.6),
      colorScale: scaleOrdinal()
        .domain(STATUSES)
        .range(COLORS)
    }
  },
  computed: {
    combinedChartData() {
      return combineSummaries([...this.chartData, ...DEFAULT_STATUSES])
    },
    total() {
      return calcSummaryTotals(this.chartData)
    },
    layoutData() {
      this.xScale.domain([
        0,
        max(
          [...this.combinedChartData, { count: MINIMUM_X_DOMAIN }],
          (d) => d.count
        )
      ])
      this.yScale.domain(sortSummaryStatusByCount(this.combinedChartData))
      return this.combinedChartData.map((d) => {
        return {
          x: this.xScale(d.count),
          y: this.yScale(d.status),
          color: this.colorScale(d.status)
        }
      })
    }
  },
  methods: {
    translate
  }
}
</script>

<style scoped>
.background {
  background-color: white;
}
.chart-title {
  fill: red;
}
</style>
