
export const listGroup = (list, group) => {
  return list.map((mobile, idx) => {
    return idx % 4 === 0 ? list.slice(idx, idx + group) : null
  }).filter(groupMobile => groupMobile)
}
