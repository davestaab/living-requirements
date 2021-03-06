import assert from 'assert'
import fs from 'fs'
import head from 'lodash/fp/head'
import { cleanId } from '../../components/utils'

export function testId(id) {
  return `[data-testid="${id}"]`
}

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

export async function assertTagSet(context, tagTable) {
  const content = await context.page.$$eval(
    `#tagSet [data-testid="tag"]`,
    (e) => e.map((e2) => e2.textContent.trim())
  )
  tagTable.hashes().map((row, i) => assert.strictEqual(content[i], row.tag))
}

export async function assertScenarioName(context, id, name) {
  const actual = await context.page.$eval(
    `#${cleanId(id)} [data-testid="scenarioName"]`,
    (e) => e.textContent.trim()
  )
  assert.strictEqual(actual, name)
}

export async function assertFeatureScenarioDescription(
  context,
  isFeature,
  id,
  desc
) {
  const testIdStr = isFeature
    ? testId('featureDescription')
    : testId('scenarioDescription')
  const actual = await context.page.$eval(`#${cleanId(id)} ${testIdStr}`, (e) =>
    e.textContent.trim()
  )
  assert.strictEqual(cleanString(actual), cleanString(desc))
}

export async function assertSteps(context, scenarioId, dataTable) {
  const rows = dataTable.hashes()
  const { name, status } = head(rows)
  if (name) await assertStepsName(context, scenarioId, rows)
  if (status) await assertStepsStatus(context, scenarioId, rows)
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
  const statuses = await context.page.$$eval(
    `#${cleanId(scenarioId)} [data-testid="stepName"]`,
    (e) => e.map((e2) => e2.getAttribute('data-step-status'))
  )
  tableRows.map((r, i) => {
    assert.strictEqual(r.status, statuses[i])
  })
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
  summaryTable.hashes().map((row, i) => {
    assert.strictEqual(actual[i].count, row.count)
    assert.strictEqual(actual[i].status, row.status)
  })
  // assert(false)
}

export async function clickElement(context, selector) {
  await context.page.$eval(selector, (e) => e && e.click())
}
export async function clickElementByContent(context, selector, content) {
  await context.page.$$eval(
    selector,
    (e, content2) => {
      e.map((e2) => {
        if (e2.textContent.trim() === content2) e2.click()
      })
      // e && e.click()
    },
    content
  )
}

export async function assertCount(context, expectedCount, selector) {
  const actualCount = await context.page.$$eval(selector, (e) => e.length)
  assert.strictEqual(actualCount, expectedCount)
}

export async function assertFeatureScenarioSummary(
  context,
  featureId,
  summaryTable
) {
  const statuses = await context.page.$$eval(
    `#${featureId} [data-testid="stepResult"]`,
    (e) =>
      e.map((e2) => {
        return {
          status: e2.getAttribute('data-step-status'),
          count: e2.textContent.trim()
        }
      })
  )
  summaryTable.hashes().map((row, i) => {
    assert.strictEqual(statuses[i].status, row.status)
    assert.strictEqual(statuses[i].count, row.count)
  })
}

export async function assertScenarioDocStrings(
  context,
  stepIndex,
  scenarioId,
  expectedDocString
) {
  const content = await context.page.$eval(
    `#${cleanId(scenarioId)} ${testId(
      'steps'
    )} div:nth-child(${stepIndex}) ${testId('docString')}`,
    (e) => e.textContent.trim()
  )
  assert.strictEqual(content, expectedDocString)
}

export async function assertScenarioDataTable(
  context,
  stepIndex,
  scenarioId,
  expectedDataTable
) {
  const actual = await evalTableToArrays(
    context,
    `#${cleanId(scenarioId)} ${testId(
      'steps'
    )} div:nth-child(${stepIndex}) ${testId('dataTable')} tr`
  )
  assert.deepStrictEqual(actual, expectedDataTable.raw())
}

function evalTableToArrays(context, rowSelector) {
  return Promise.resolve(
    context.page.$$eval(rowSelector, (e) =>
      e.map((e2, i) => {
        const selector = i === 0 ? 'th' : 'td'
        return Array.from(e2.querySelectorAll(selector)).map(
          (r) => r.textContent
        )
      })
    )
  )
}

export async function assertScenarioState(context, scenarioId, state) {
  const expectExpanded = state === 'expanded' ? 'true' : 'false'
  const isExpanded = await context.page.$eval(
    `#${cleanId(scenarioId)}`,
    (e) => {
      return e.getAttribute('aria-expanded')
    }
  )
  assert.strictEqual(isExpanded, expectExpanded)
}

const updateSnapshots = process.env.UPDATE_SNAPSHOTS !== undefined

export async function assertElementMatchesSnapshot(
  context,
  elementId,
  snapshot
) {
  if (updateSnapshots) {
    // eslint-disable-next-line no-console
    console.log(`updating snapshots for element ${elementId} to ${snapshot}`)
  }
  const updateOptions = updateSnapshots
    ? {
        path: `static/screenshots/${snapshot}.png`
      }
    : {}
  const [elementBuffer, snapshotBuffer] = await Promise.all([
    context.page.$(`#${elementId}`).then((element) => {
      return element.screenshot({
        ...updateOptions
      })
    }),
    new Promise((resolve, reject) => {
      if (updateSnapshots) return resolve()
      fs.readFile(`static/screenshots/${snapshot}.png`, function(err, data) {
        return err ? reject(err) : resolve(data)
      })
    })
  ])
  if (updateSnapshots) {
    context.attach(`Updating snapshot '${snapshot}'`)
    context.attach(elementBuffer, 'image/png')
    return
  }
  const actual = elementBuffer.compare(snapshotBuffer)
  context.attach('Actual')
  context.attach(elementBuffer, 'image/png')
  if (actual !== 0) {
    context.attach('Expected')
    context.attach(snapshotBuffer, 'image/png')
  }
  assert.strictEqual(
    actual,
    0,
    `Expected element '${elementId}' to match snapshot '${snapshot}'`
  )
}

export async function assertDocsMode(context, onOff) {
  const expectedMode = onOff === 'on' ? 'true' : 'false'
  const isExpanded = await context.page.$eval(`#docsModeToggle`, (e) => {
    return e.getAttribute('aria-checked')
  })
  assert.strictEqual(isExpanded, expectedMode)
}

export async function assertNotFound(context, selector) {
  const element = await context.page.$(selector)
  assert.strictEqual(element, null)
}
