// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'База знаний',
  tagline: 'Внутренняя документация',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://newvegas3.github.io',
  baseUrl: '/my-website-wiki/',

  // Нужно для корректных ссылок на GitHub Pages
  organizationName: 'NewVegas3',
  projectName: 'my-website-wiki',

  // Явно задаём — чтобы не было warning при деплое
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // либо укажи свой репозиторий, чтобы работала кнопка "Редактировать страницу":
          editUrl: 'https://github.com/NewVegas3/my-website-wiki/edit/main/',
          // если не нужна кнопка "Редактировать", просто закомментируй editUrl
        },
        blog: false, // ⬅️ блог выключен
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'База знаний',
      logo: { alt: 'Логотип', src: 'img/logo.svg' },
      items: [
        // Показываем ссылку на корень docs (первый сайдбар)
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Документация' },
        { href: 'https://github.com/NewVegas3/my-website-wiki', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [{ label: 'Введение', to: '/docs/intro' }],
        },
        {
          title: 'Ресурсы',
          items: [
            { label: 'GitHub', href: 'https://github.com/NewVegas3/my-website-wiki' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Вики компании.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
