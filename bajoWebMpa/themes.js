async function themes () {
  const { virtualsDir } = this.bajoWebStatic.helper
  return [{
    name: 'bootstrap5',
    description: 'Bootstrap 5.3',
    script: [
      `${virtualsDir('bajoWebMpaBootstrap')}/bs5/js/bootstrap.bundle.min.js`
    ],
    css: [
      `${virtualsDir('bajoWebMpaBootstrap')}/bs5/css/bootstrap.min.css`
    ]
  }, {
    name: 'bootstrap4',
    description: 'Bootstrap 4.6',
    script: [
      `${virtualsDir('bajoWebMpa')}/jquery/jquery.min.js`,
      `${virtualsDir('bajoWebMpaBootstrap')}/bs4/js/bootstrap.bundle.min.js`
    ],
    css: [
      `${virtualsDir('bajoWebMpaBootstrap')}/bs4/css/bootstrap.min.css`
    ]
  }]
}

export default themes
