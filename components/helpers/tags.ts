import {
  compose,
  flatMap,
  prop,
  map,
  filter,
  reduce,
  includes
} from 'lodash/fp'
import { Tag } from '~/components/helpers/types'

const getTagsProgram = compose(
  map(prop('name')),
  flatMap(prop('tags')),
  flatMap(prop('elements'))
)

export function getTags(suite: any): Set<Tag> {
  return new Set<Tag>(getTagsProgram(suite))
}

export function filterSuiteByTags(suite: any, tags: Array<Tag>) {
  const featureTagNames = compose(map(prop('name')), prop('tags'))
  const featureIncludesTags = filter((f): any => {
    return reduce((acc, cur: Tag) => {
      return acc || includes(cur)(featureTagNames(f))
    }, false)(tags)
  })
  return featureIncludesTags(suite)
}
