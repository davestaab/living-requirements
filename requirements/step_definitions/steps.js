import fs from 'fs'
import { Given } from 'cucumber'

Given('a cucumber example output {word}', function(name, docString) {
  // Write code here that turns the phrase above into concrete actions
  // console.log(process.cwd())
  fs.writeFileSync(`./static/examples/${name}.json`, docString)
})
