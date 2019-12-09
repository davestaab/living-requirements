import { cleanId, translate } from '../utils'

describe('translate', function() {
  it('should return a xml translate property string', function() {
    expect(translate(100, 100)).toBe('translate(100, 100)')
  })
})

describe('cleanid', function() {
  it('should not fail with no id', function() {
    expect(function() {
      cleanId(undefined)
    }).not.toThrow()
  })
})
