import tagReport from './example_tags_report'
import { getTags } from '~/components/helpers/tags'

describe('getTags', function() {
  it('should return the tag set', function() {
    expect(getTags(tagReport)).toEqual(
      new Set(['@scenario', '@scenario2', '@scenariob'])
    )
  })
})
