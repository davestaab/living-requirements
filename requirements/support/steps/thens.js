import { Then } from 'cucumber'
import {
  assertFeatureTable,
  assertTags,
  assertScenarioName,
  assertSteps,
  assertScenarioStepSummary,
  assertScenarioStepCount,
  assertFeatureScenarioSummary,
  assertScenarioDocStrings,
  assertScenarioDataTable,
  assertScenarioState,
  assertFeatureScenarioDescription,
  assertElementMatchesSnapshot,
  assertDocsMode,
  assertNotFound,
  assertFeatureName
} from '../utils'

Then('you can see a {word} {word} has description {string}', async function(
  featureOrScenario,
  id,
  description
) {
  const isFeature = featureOrScenario === 'feature'
  await assertFeatureScenarioDescription(this, isFeature, id, description)
})

Then('you can see features:', async function(featureTable) {
  await assertFeatureTable(this, featureTable)
})

Then('you can see a feature/scenario {} has tags:', async function(
  featureId,
  tagTable
) {
  await assertTags(this, featureId, tagTable)
})

Then('you can see a scenario {word} has name {string}', async function(
  scenarioId,
  scenarioName
) {
  await assertScenarioName(this, scenarioId, scenarioName)
})

Then('you can see steps for scenario {}', async function(
  scenarioId,
  dataTable
) {
  await assertSteps(this, scenarioId, dataTable)
})

Then('you can see a step summary for scenario {}', async function(
  scenarioId,
  dataTable
) {
  await assertScenarioStepSummary(this, scenarioId, dataTable)
})

Then('you can see {int} step(s) for scenario {}', async function(
  count,
  scenarioId
) {
  await assertScenarioStepCount(this, count, scenarioId)
})

Then('you can see a scenario summary for feature {}', async function(
  featureId,
  summaryTable
) {
  await assertFeatureScenarioSummary(this, featureId, summaryTable)
})

Then(
  'you can see doc strings for step {int} of scenario {string}',
  async function(stepIndex, scenarioId, expectedDocString) {
    await assertScenarioDocStrings(
      this,
      stepIndex,
      scenarioId,
      expectedDocString
    )
  }
)

Then(
  'you can see data table for step {int} of scenario {string}',
  async function(stepIndex, scenarioId, expectedDataTable) {
    await assertScenarioDataTable(
      this,
      stepIndex,
      scenarioId,
      expectedDataTable
    )
  }
)

Then('scenario {string} is {string}', async function(scenarioId, state) {
  await assertScenarioState(this, scenarioId, state)
})

Then('chart {string} should match {string}', async function(chartId, snapshot) {
  await assertElementMatchesSnapshot(this, chartId, snapshot)
})

Then('you can see docs mode is {word}', async function(onOff) {
  await assertDocsMode(this, onOff)
})

Then('you can not see {string}', async function(selector) {
  await assertNotFound(this, selector)
})

Then('you can see a feature {word} has text {string}', async function(
  featureId,
  text
) {
  await assertFeatureName(this, featureId, text)
})
