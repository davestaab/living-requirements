import { When } from 'cucumber'
import { clickElement, clickElementByContent } from '../utils'
import { cleanId } from '../../../components/utils'

When('you view page {word}', async function(page) {
  await this.page.goto(`http://localhost:3000/${page}`)
})

When('you click feature/scenario {string}', async function(elementId) {
  await clickElement(this, `#${cleanId(elementId)} .v-expansion-panel-header`)
})

When('you turn on/off docs mode', async function() {
  await clickElement(this, '#docsModeToggle')
})

When('you select tag filter {string}', async function(tag) {
  await clickElementByContent(this, '#tagSet [data-testid="tag"]', tag)
})
