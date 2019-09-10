import fs from 'fs'
import { Given, When, Then } from 'cucumber'
import {
  assertFeatureName,
  assertFeatureTable,
  assertFeatureDescription,
  assertFeatureTags,
  assertScenarioName
} from './utils'

Given('a cucumber example output {word}', function(name, docString) {
  fs.writeFileSync(`./static/examples/${name}.json`, docString)
})

When('you view page {word} {word}', async function(page, instance) {
  await this.page.goto(`http://localhost:3000/${page}/${instance}`)
})

When('you view page {word}', async function(page) {
  await this.page.goto(`http://localhost:3000/${page}`)
})

Then('you can see a feature {} has text {}', async function(featureId, text) {
  await assertFeatureName(this, featureId, text)
})

Then('you can see a feature {} has description {string}', async function(
  featureId,
  description
) {
  await assertFeatureDescription(this, featureId, description)
})

Then('you can see features:', async function(featureTable) {
  await assertFeatureTable(this, featureTable)
})

Then('you can see a feature {} has tags:', async function(featureId, tagTable) {
  await assertFeatureTags(this, featureId, tagTable)
})

Then('you can see a scenario {} has name {}', async function(
  scenarioId,
  scenarioName
) {
  await assertScenarioName(this, scenarioId, scenarioName)
})
