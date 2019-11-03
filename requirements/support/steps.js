import fs from 'fs'
import { Given, When, Then } from 'cucumber'
import { cleanId } from '../../components/utils'
import {
  assertFeatureName,
  assertFeatureTable,
  assertTags,
  assertScenarioName,
  assertSteps,
  assertScenarioStepSummary,
  clickElement,
  assertScenarioStepCount,
  assertFeatureScenarioSummary,
  assertScenarioDocStrings,
  assertScenarioDataTable,
  assertScenarioState,
  assertFeatureScenarioDescription
} from './utils'

Given('a cucumber example output {word}', function(name, docString) {
  fs.writeFileSync(`./static/examples/${name}.json`, docString)
})

When('you view page {word}', async function(page) {
  await this.page.goto(`http://localhost:3000/${page}`)
})

When('you click feature/scenario {string}', async function(elementId) {
  await clickElement(this, `#${cleanId(elementId)} .v-expansion-panel-header`)
})

Then('you can see a feature {} has text {}', async function(featureId, text) {
  await assertFeatureName(this, featureId, text)
})

Then('you can see a {word} {} has description {string}', async function(
  featureScenario,
  id,
  description
) {
  const isFeature = featureScenario === 'feature'
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

Then('you can see a scenario {} has name {}', async function(
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
