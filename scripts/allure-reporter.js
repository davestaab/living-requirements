import { CucumberJSAllureFormatter, AllureRuntime } from 'allure-cucumberjs'

export default class Reporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({ resultsDir: './output/allure-results' }),
      {
        labels: {
          issue: [/@bug_(.*)/],
          epic: [/@feature:(.*)/]
        }
      }
    )
  }
}
