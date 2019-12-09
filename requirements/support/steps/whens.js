import { Then, When } from 'cucumber'
import { assertFeatureName, clickElement } from '../utils'
import { cleanId } from '../../../components/utils'

When('you view page {word}', async function(page) {
  await this.page.goto(`http://localhost:3000/${page}`)
})

When('you click feature/scenario {string}', async function(elementId) {
  await clickElement(this, `#${cleanId(elementId)} .v-expansion-panel-header`)
})

Then('you can see a feature {} has text {}', async function(featureId, text) {
  await assertFeatureName(this, featureId, text)
})

When('you turn on/off docs mode', async function() {
  await clickElement(this, '#docsModeToggle')
})
