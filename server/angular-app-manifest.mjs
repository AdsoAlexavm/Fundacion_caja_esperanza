
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/history"
  },
  {
    "renderMode": 2,
    "route": "/programs"
  },
  {
    "renderMode": 2,
    "route": "/voluntariado"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "route": "/quiero-saber-mas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8322, hash: '8eb2c2c4d6f2c3c85dfd58c6836dbc30d8a8a8aebb858e3fdc378d5927fb62aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7135, hash: 'a1fca78724db8be04522a9f5df90b258e27ca5d5440d5fea8ede26a1ed181396', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23692, hash: 'a3fc3986170f0dc90701453179a61b5782715f420a4bfb333b15b9725f835af3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'history/index.html': {size: 24890, hash: '85296ce656313921c58516317a6e1e5fcb10bc49d7e90d4874053c7d62a33e4e', text: () => import('./assets-chunks/history_index_html.mjs').then(m => m.default)},
    'voluntariado/index.html': {size: 23914, hash: 'c37caa17e5f5a5b17721167f2cc04cecde2fcb340d3bb9c0d68115c4dcc7e78a', text: () => import('./assets-chunks/voluntariado_index_html.mjs').then(m => m.default)},
    'programs/index.html': {size: 22429, hash: '75845d5e3d7df5f4a3829cbd67bbe8751c20dba96fd357399d44c5a5af983a55', text: () => import('./assets-chunks/programs_index_html.mjs').then(m => m.default)},
    'quiero-saber-mas/index.html': {size: 17693, hash: 'e212b2a422fb35ec12e211c5e97049f0c03540e01e6f63b0c079591a253ec448', text: () => import('./assets-chunks/quiero-saber-mas_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 23135, hash: 'e2ce066a4f07210482ee3b9a952b5a50dfbfd92b0a1953b829c98f3a7b8a747a', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-U4WRIY4H.css': {size: 15161, hash: 'jCNl+6bXurY', text: () => import('./assets-chunks/styles-U4WRIY4H_css.mjs').then(m => m.default)}
  },
};
