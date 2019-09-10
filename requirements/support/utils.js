import assert from 'assert'

export async function checkFeatureTable(context, table) {
  await Promise.all(
    table.hashes().map((row) => {
      return checkFeature(context, row.id, row.text)
    })
  )
}

export async function checkFeature(context, id, text) {
  const content = await context.page.$eval(
    `#${id} [data-testid="featureName"]`,
    (e) => e.innerHTML.trim()
  )
  assert.strictEqual(content, text)
}

export async function checkFeatureDescription(context, id, desc) {
  const actual = await context.page.$eval(
    `#${id} .description`,
    (e) => e.textContent
  )
  assert.strictEqual(cleanString(actual), cleanString(desc))
}
function cleanString(inStr) {
  return inStr.replace(/\n|\\n/g, '')
}
