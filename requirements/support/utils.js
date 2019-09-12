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

export async function assertScenarioDescription(context, id, desc) {
  const actual = await context.page.$eval(
    `#${cleanId(id)} [data-testid="scenarioDescription"]`,
    (e) => e.textContent.trim()
  )
  assert.strictEqual(cleanString(actual), cleanString(desc))
}

export async function assertSteps(context, scenarioId, dataTable) {
  const rows = dataTable.hashes()
  const first = rows[0]
  if (first.name) await assertStepsName(context, scenarioId, rows)
  if (first.status) await assertStepsStatus(context, scenarioId, rows)
}

async function assertStepsName(context, scenarioId, tableRows) {
  const names = await context.page.$$eval(
    `#${cleanId(scenarioId)} [data-testid="stepName"]`,
    (e) => e.map((e2) => e2.innerHTML.trim())
  )
  tableRows.map((r, i) => {
    assert.strictEqual(names[i], r.name)
  })
}

async function assertStepsStatus(context, scenarioId, tableRows) {
  const classes = await context.page.$$eval(
    `#${cleanId(scenarioId)} [data-testid="stepStatus"]`,
    (e) => e.map((e2) => e2.classList.value)
  )
  tableRows.map((r, i) => {
    assert(statusToRegex(r.status).test(classes[i]))
  })
}
function statusToRegex(status) {
  switch (status) {
    case 'failed':
      return /.*mdi-alert-circle-outline.*/
    case 'passed':
      return /.*mdi-check.*/
    case 'pending':
      return /.*mdi-clock-outline.*/
    case 'skipped':
      return /.*mdi-debug-step-over.*/
    case 'undefined':
      return /.*mdi-checkbox-blank-outline.*/
  }
}

export async function assertScenarioStepSummary(
  context,
  scenarioId,
  summaryTable
) {
  const actual = await context.page.$$eval(
    `#${cleanId(scenarioId)} [data-testid="stepResult"]`,
    (list) =>
      list.map((e) => {
        return {
          status: e.getAttribute('data-step-status'),
          count: e.textContent.trim()
        }
      })
  )
  // console.log('actual', actual)
  summaryTable.hashes().map((row, i) => {
    assert.strictEqual(actual[i].count, row.count)
    assert.strictEqual(actual[i].status, row.status)
  })
  // assert(false)
}
