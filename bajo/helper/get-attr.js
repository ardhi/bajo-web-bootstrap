import bootstrap5 from '../../lib/get-attr/bootstrap5/index.js'

const getAttr = {
  exec: function (theme, { name, context, args }) {
    if (theme === 'bootstrap5') return bootstrap5.call(this, { name, context, args })
  }
}

export default getAttr
