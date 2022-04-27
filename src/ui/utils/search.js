export const mobileFilter = (data, search) => {
  return data.filter(
    mobile => mobile.brand.toLowerCase() === search.toLowerCase() ||
    mobile.model.toLowerCase().includes(search.toLowerCase()
    )
  )
}
