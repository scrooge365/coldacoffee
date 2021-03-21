/** @jsx jsx */
// import React from 'react';
import PropTypes from 'prop-types';
import { ClassNames, jsx } from '@emotion/react';
import HtmlParser from 'react-html-parser';
import Container from '../../../components/Container';
// import useMediaQuery from '../../../hooks/useMediaQuery';
import useTranslate from '@sprinx/react-globalize/useTranslate';
import coffee from '../../../images/coffee.webp';
import cascara from '../../../images/cascara.webp';

const products = [
  {
    title: [
      { language: 'en', text: 'Coffee' },
      { language: 'cs', text: 'Kafe' },
    ],
    description: [
      {
        language: 'en',
        text: `<p>Harvest more than 20 tons</p><p>Producing only one species - Arabica</p><p>Two types of three plant - „Compact“ and „Nailon“</p><p>Two types coffee processing - "Washed or fully washed" and "Natural"</p>`,
      },
      {
        language: 'cs',
        text: `<p>Harvest more than 20 tons</p><p>Producing only one species - Arabica</p><p>Two types of three plant - „Compact“ and „Nailon“</p><p>Two types coffee processing - "Washed or fully washed" and "Natural"</p>`,
      },
    ],
    image: 'coffee',
  },
  {
    title: [
      { language: 'en', text: 'Cascara - "Coffee cherry' },
      { language: 'cs', text: 'Kaskara - "Kávová třešeň' },
    ],
    description: [
      {
        language: 'cs',
        text: `<p>Is the actual flesh of the coffee cherry, that has been dried and is tasty to drink as an infusion. </p><p>Coffee is a cherry about the size of a cranberry. </p><p>This is the flesh that surrounds the coffee seeds which is normally a waste product or is sometimes used as a blender in fertilizer. </p><p>Historically people would drink the coffee pulp as an infusion, and it still occurs in Yemen and some other coffee producing countries around the world.</p>`,
      },
      {
        language: 'en',
        text: `<p>Is the actual flesh of the coffee cherry, that has been dried and is tasty to drink as an infusion. </p><p>Coffee is a cherry about the size of a cranberry. </p><p>This is the flesh that surrounds the coffee seeds which is normally a waste product or is sometimes used as a blender in fertilizer. </p><p>Historically people would drink the coffee pulp as an infusion, and it still occurs in Yemen and some other coffee producing countries around the world.</p>`,
      },
    ],
    image: 'cascara',
  },
];

const imageMap = {
  cascara,
  coffee,
};

function HomePageAbout() {
  const t = useTranslate();
  return (
    <Container>
      <ClassNames>
        {({ theme }) => (
          <div
            css={{
              '@media(min-width: 600px)': {},
              ...theme.typography.body1,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              padding: theme.spacing(4, 0),
              width: '100%',
            }}
          >
            <h2 css={{ ...theme.typography.h2, marginBottom: theme.spacing(2) }}>{t('products/title')}</h2>
            {(products || []).map((product, idx) => (
              <HomePageProductsCard product={product} key={idx.toString()} />
            ))}
          </div>
        )}
      </ClassNames>
    </Container>
  );
}

HomePageAbout.propTypes = {};
HomePageAbout.defaultProps = {};

export default HomePageAbout;

const HomePageProductsCard = ({ product }) => {
  const t = useTranslate();
  return (
    <ClassNames>
      {({ theme }) => (
        <div
          css={{
            '@media(min-width: 425px)': {
              '&:nth-of-type(2)': {
                flexDirection: 'row-reverse',
              },
              flexDirection: 'row',
            },
            '@media(min-width: 600px)': {
              '& > div': { width: '50%' },

              alignItems: 'center',
              justifyContent: 'center',
            },
            '@media(min-width: 960px)': {},
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(2, 0),
            alignItems: 'stretch',
            width: '100%',
          }}
        >
          <div
            css={{
              '& > img': { width: '100%' },
              '@media(min-width: 600px)': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > img': { width: 300 },
              },
              '@media(min-width: 960px)': {
                '& > img': { width: 'auto' },
              },
              width: 150,
              flexShrink: 0,
            }}
          >
            <img src={imageMap[product.image]} alt={product.title} />
          </div>
          <div
            css={{ ...theme.typography.caption, display: 'flex', flexDirection: 'column', flexGrow: 1, maxWidth: 550 }}
          >
            <h3 css={{ ...theme.typography.h3, marginBottom: theme.spacing(1) }}>
              {t(product.title, { acceptString: true })}
            </h3>
            {HtmlParser(t(product.description, { acceptString: true }))}
          </div>
        </div>
      )}
    </ClassNames>
  );
};

HomePageProductsCard.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
