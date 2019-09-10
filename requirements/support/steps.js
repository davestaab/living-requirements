import fs from 'fs'
import { Given, When, Then } from 'cucumber'
import { checkFeature, checkFeatureTable } from './utils'

Given('a cucumber example output {word}', function(name, docString) {
  fs.writeFileSync(`./static/examples/${name}.json`, docString)
})

When('you view page {word} {word}', async function(page, instance) {
  await this.page.goto(`http://localhost:3000/${page}/${instance}`)
})

Then('you can see a feature {} has text {}', async function(featureName, text) {
  await checkFeature(this, featureName, text)
})

Then('you can see features:', async function(featureTable) {
  await checkFeatureTable(this, featureTable)
})
