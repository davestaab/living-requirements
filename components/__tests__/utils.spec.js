import { translate } from '../utils'

describe('translate', function() {
  it('should return a xml translate property string', function() {
    expect(translate(100, 100)).toBe('translate(100, 100)')
  })
})
