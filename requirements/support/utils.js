import assert from 'assert'
import { cleanId } from '../../components/utils'

export async function assertFeatureTable(context, table) {
  await Promise.all(
    table.hashes().map((row) => {
      return assertFeatureName(context, row.id, row.text)
    })
  )
}

export async function assertFeatureName(context, id, name) {
  const content = await context.page.$eval(
    `#${id} [data-testid="featureName"]`,
    (e) => e.innerHTML.trim()
  )
  assert.strictEqual(content, name)
}

export async function assertFeatureDescription(context, id, desc) {
  const actual = await context.page.$eval(
    `#${id} [data-testid="featureDescription"]`,
    (e) => e.textContent
  )
  assert.strictEqual(cleanString(actual), cleanString(desc))
}
function cleanString(inStr) {
  return inStr.replace(/\n|\\n/g, '')
}

export async function assertTags(context, id, tagTable) {
  const content = await context.page.$$eval(
    `#${cleanId(id)} [data-testid="tag"]`,
    (e) => e.map((e2) => e2.innerHTML.trim())
  )
  tagTable.hashes().map((row, i) => {
    assert.strictEqual(content[i], row.tag)
  })
}
export async function assertScenarioName(context, id, name) {
  const actual = await context.page.$eval(
    `#${cleanId(id)} [data-testid="scenarioName"]`,
    (e) => e.textContent.trim()
  )
  assert.strictEqual(actual, name)
}

export async function assertSteps(context, scenarioId, dataTable) {
  const names = await context.page.$$eval(
    `#${cleanId(scenarioId)} [data-testid="step"]`,
    (e) => e.map((e2) => e2.innerHTML.trim())
  )
  dataTable.hashes().map((r, i) => {
    assert.strictEqual(names[i], r.name)
  })
}
