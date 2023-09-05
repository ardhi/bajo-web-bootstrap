import icon from './icon.js'

async function themes () {
  const { virtualDir } = this.bajoWebStatic.helper
  return [{
    name: 'bootstrap5',
    description: 'Bootstrap 5.3',
    script: [
      `${virtualDir('bajoWebMpaBootstrap')}/bs5/js/bootstrap.bundle.min.js`
    ],
    css: [
      `${virtualDir('bajoWebMpaBootstrap')}/bs5/css/bootstrap.min.css`,
      `${virtualDir('bajoWebMpaBootstrap')}/icons/font/bootstrap-icons.min.css`
    ],
    icon,
    mapping: {
      sizing: {
        small: 'sm',
        medium: 'md',
        large: 'lg',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        xxl: 'xxl'
      }
    }
  }, {
    name: 'bootstrap4',
    description: 'Bootstrap 4.6',
    script: [
      `${virtualDir('bajoWebMpa')}/jquery/jquery.min.js`,
      `${virtualDir('bajoWebMpaBootstrap')}/bs4/js/bootstrap.bundle.min.js`
    ],
    css: [
      `${virtualDir('bajoWebMpaBootstrap')}/bs4/css/bootstrap.min.css`,
      `${virtualDir('bajoWebMpaBootstrap')}/icons/font/bootstrap-icons.min.css`
    ],
    icon,
    mapping: {
      sizing: {
        small: 'sm',
        medium: 'md',
        large: 'lg',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        xxl: 'xxl'
      }
    }
  }]
}

export default themes
