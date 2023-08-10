async function themes () {
  const { getConfig, readJson } = this.bajo.helper
  const cfg = getConfig('bajoWebMpaBootstrap', { full: true })
  const cfgStat = getConfig('bajoWebStatic', { full: true })
  const virts = readJson(`${cfg.dir}/bajoWebStatic/virtuals.json`)
  return {
    name: 'bootstrap',
    description: 'Bootstrap 5.3',
    script: `/${cfgStat.prefix}/${cfgStat.virtualsPrefix}/${cfg.alias}/${virts[0].prefix}/js/bootstrap.bundle.min.js`,
    css: [
      `/${cfgStat.prefix}/${cfgStat.virtualsPrefix}/${cfg.alias}/${virts[0].prefix}/css/bootstrap.min.css`,
      `/${cfgStat.prefix}/${cfgStat.virtualsPrefix}/${cfg.alias}/${virts[1].prefix}/font/bootstrap-icons.min.css`
    ]
  }
}

export default themes
