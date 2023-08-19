async function themes () {
  const { virtualDir } = this.bajoWebStatic.helper
  return [{
    name: 'bootstrap5',
    description: 'Bootstrap 5.3',
    script: [
      `${virtualDir('bajoWebMpaBootstrap')}/bs5/js/bootstrap.bundle.min.js`
    ],
    css: [
      `${virtualDir('bajoWebMpaBootstrap')}/bs5/css/bootstrap.min.css`
    ]
  }, {
    name: 'bootstrap4',
    description: 'Bootstrap 4.6',
    script: [
      `${virtualDir('bajoWebMpa')}/jquery/jquery.min.js`,
      `${virtualDir('bajoWebMpaBootstrap')}/bs4/js/bootstrap.bundle.min.js`
    ],
    css: [
      `${virtualDir('bajoWebMpaBootstrap')}/bs4/css/bootstrap.min.css`
    ]
  }]
}

export default themes
