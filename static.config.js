// import path from 'path';
import React from 'react';
import { messages } from './src/i18n';

const language = ['cs-CS', 'en-EN'];

const getPath = (page) => ({
  pathUrls: {
    cs: `/${messages.cs[`paths.${page}`]}`,
    en: `/${messages.en[`paths.${page}`]}`,
  },
});

const langPaths = async (lang) => {
  return [
    {
      path: `${lang}/`,
      template: 'src/containers/Homepage',
      ...getPath('homepage'),
    },
    {
      path: `${messages[lang]['paths.contact']}`,
      template: 'src/containers/Contact',
      ...getPath('contact'),
    },
    {
      path: `/`,
      template: 'src/pages/index',
    },
    {
      path: `/404`,
      template: 'src/pages/404',
    },
  ];
};

export default {
  getSiteData: async () => ({
    title: 'Kolda Coffee Company',
  }),
  getRoutes: async () =>
    Promise.all(language.map((culture) => langPaths(culture.substring(0, 2), culture))).then((paths) =>
      paths.reduce((rts, i) => [...rts, ...i]),
    ), // eslint-disable-line
  Document: (
    { Html, Head, Body, children }, // eslint-disable-line
  ) => (
    <Html lang='cs'>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='application-name' content='Kolda coffee company' />
        <meta name='description' content='Kolda coffee producing 100% bio coffee products to all over the world.' />
        <meta name='keywords' content='Kolda coffee company, coffee, cascara, kafe' />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  // siteRoot: 'https://kolda.coffee',
  maxThreads: 2,
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: './src/pages',
      },
    ],
    'react-static-plugin-react-router',
    // 'react-static-plugin-sitemap',
  ],
};
