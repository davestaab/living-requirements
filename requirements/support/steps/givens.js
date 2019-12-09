import fs from 'fs'
import { Given } from 'cucumber'

Given('a cucumber example output {word}', function(name, docString) {
  fs.writeFileSync(`./static/examples/${name}.json`, docString)
})

Given('you are viewing page {word}', async function(page) {
  await this.page.goto(`http://localhost:3000/${page}`)
})
