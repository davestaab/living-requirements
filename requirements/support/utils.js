import assert from 'assert'

export async function checkFeatureTable(context, table) {
  await Promise.all(
    table.hashes().map((row) => {
      return checkFeature(context, row.id, row.text)
    })
  )
}

export async function checkFeature(context, id, text) {
  const content = await context.page.$eval(`#${id}`, (e) => e.innerHTML.trim())
  assert.strictEqual(content, text)
}
