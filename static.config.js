// import path from 'path';
import React from 'react';
import messages from './src/i18n';

const language = ['cs-CS', 'en-EN'];

const getPath = (page) => ({
  pathUrls: {
    cs: `/${messages.cs.paths[page]}`,
    en: `/${messages.en.paths[page]}`,
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
    title: 'React Static',
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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='application-name' content='Kolda coffee company' />
        <meta name='description' content='' />
        <meta name='keywords' content='Kolda coffee company' />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  // siteRoot: 'http://kolda.coffee',
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: './src/pages',
      },
    ],
    'react-static-plugin-react-router',
  ],
};
