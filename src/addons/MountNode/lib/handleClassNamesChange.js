import _ from 'lodash'

import computeClassNames from './computeClassNames'
import computeClassNamesDifference from './computeClassNamesDifference'

const prevClassNames = new Map()

function setToArray(set) {
  var index = -1,
      result = (set && set.size) ? Array(set.size) : [];

  (set || []).forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

const handleClassNamesChange = (node, components) => {
  components = setToArray(components);
  const currentClassNames = computeClassNames(components)
  const [forAdd, forRemoval] = computeClassNamesDifference(
    prevClassNames.get(node),
    currentClassNames,
  )

  _.forEach(forAdd, className => node.classList.add(className))
  _.forEach(forRemoval, className => node.classList.remove(className))

  prevClassNames.set(node, currentClassNames)
}

export default handleClassNamesChange
