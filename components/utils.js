import colorCodes from 'vuetify/es5/util/colors'

export const FAILED = 'failed'
export const PENDING = 'pending'
export const UNDEFINED = 'undefined'
export const SKIPPED = 'skipped'
export const PASSED = 'passed'
export const STATUSES = [FAILED, PENDING, UNDEFINED, SKIPPED, PASSED]
export const COLORS = [
  colorCodes.red.base,
  colorCodes.orange.base,
  colorCodes.lightBlue.base,
  colorCodes.grey.base,
  colorCodes.green.base
]

export function translate(x, y) {
  return `translate(${x}, ${y})`
}

/**
 * Clean cucumber ids by removing the semicolon (;) and replacing with underscore (_)
 * Needed to use cucumber ids as html ids
 * @param id the id to clean
 * @return cleanId the now cleaned id
 */
export const cleanId = (id) => (id ? id.replace(/;/g, '_') : '')
