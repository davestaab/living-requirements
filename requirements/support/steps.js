import fs from 'fs'
import assert from 'assert'
import { Given, When, Then } from 'cucumber'

Given('a cucumber example output {word}', function(name, docString) {
  fs.writeFileSync(`./static/examples/${name}.json`, docString)
})

When('you view page {word} {word}', async function(page, instance) {
  await this.page.goto(`http://localhost:3000/${page}/${instance}`)
})

Then('you can see a feature {}', async function(featureName) {
  const content = await this.page.$eval(
    "[data-testid='featureName']",
    (e) => e.innerHTML
  )
  assert.strictEqual(content, featureName)
})
