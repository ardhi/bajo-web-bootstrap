import * as bs5 from '../../lib/get-attr/bootstrap5/index.js'

const getAttrHandler = {
  exec: function (theme) {
    if (theme === 'bootstrap5') return bs5
  }
}

export default getAttrHandler
