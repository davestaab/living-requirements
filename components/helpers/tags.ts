import { compose, flatMap, prop, map } from 'lodash/fp'
import { Tag } from '~/components/helpers/types'

const getTagsProgram = compose(
  map(prop('name')),
  flatMap(prop('tags')),
  flatMap(prop('elements'))
)

export function getTags(suite: any): Set<Tag> {
  return new Set<Tag>(getTagsProgram(suite))
}
