function preParse ({ attr, key, context } = {}, mapping = {}) {
  const { isString, kebabCase, isArray, trim, isNumber } = this.scope.bajoWebMpa.util
  let items = isArray(attr[key]) ? attr[key] : []
  if (isString(attr[key])) items = attr[key].split(',').map(i => trim(i))
  if (isNumber(attr[key])) items = [attr[key] + '']
  const rkey = mapping[key] ?? kebabCase(key)
  attr.class = attr.class ?? []
  delete attr[key]
  return { items, rkey }
}

export default preParse
