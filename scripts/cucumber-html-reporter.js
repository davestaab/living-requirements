import { generate } from 'cucumber-html-reporter'

generate({
  theme: 'hierarchy',
  // theme: 'simple',
  brandTitle: 'Living Requirements',
  jsonFile: 'static/output/cucumber_report.json',
  output: 'output/cucumber_report.html',
  reportSuiteAsScenarios: false,
  launchReport: true
})
