/** @jsx jsx */
import PropTypes from 'prop-types';
import { ClassNames, jsx } from '@emotion/react';
import Container from '../../../components/Container';
import { useIntl } from 'react-intl';
import coffee from '../../../images/coffee.webp';
import coffeeSmall from '../../../images/coffeeSmall.webp';
import cascara from '../../../images/cascara.webp';
import greencoffee from '../../../images/greencoffee.webp';
import cascaraSmall from '../../../images/cascaraSmall.webp';
import Zoom from 'react-reveal/Zoom';
import HtmlParser from 'react-html-parser';

const products = [
  {
    title: 'products.coffee.title',
    description: 'products.coffee.description',
    image: 'coffee',
    imageSmall: 'coffeeSmall',
  },
  {
    title: 'products.greencoffee.title',
    description: 'products.greencoffee.description',
    image: 'greencoffee',
    imageSmall: 'coffeeSmall',
  },
  {
    title: 'products.cascara.title',
    description: 'products.cascara.description',
    image: 'cascara',
    imageSmall: 'cascaraSmall',
  },
];

const imageMap = {
  cascara,
  coffee,
  coffeeSmall,
  greencoffee,
  cascaraSmall,
};

function HomePageAbout() {
  const intl = useIntl();
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
            <h2 css={{ ...theme.typography.h2, marginBottom: theme.spacing(2) }}>
              {intl.formatMessage({ id: 'products.title', defaultMessage: 'Products' })}
            </h2>
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
  const intl = useIntl();
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
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            css={{
              '& img': { width: '100%' },
              '@media(min-width: 600px)': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& img': { width: 300 },
              },
              '@media(min-width: 960px)': {
                '& img': { width: 'auto' },
              },
              width: 150,
              flexShrink: 0,
            }}
          >
            <Zoom>
              <picture>
                <source media='(min-width:500px)' srcSet={imageMap[product?.image]} />
                <source media='(min-width:0px)' srcSet={imageMap[product?.imageSmall]} />
                <img src={imageMap[product?.image]} alt={product.title} />
              </picture>
            </Zoom>
          </div>
          <div
            css={{
              ...theme.typography.caption,
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              maxWidth: 550,
            }}
          >
            <Zoom>
              <h3
                css={{
                  '@media(min-width: 425px)': { textAlign: 'left' },
                  ...theme.typography.h3,
                  marginBottom: theme.spacing(1),
                  textAlign: 'center',
                }}
              >
                {product.title && intl.formatMessage({ id: product.title, defaultMessage: '' })}
              </h3>
              {product.description && HtmlParser(intl.formatMessage({ id: product.description, defaultMessage: '' }))}
            </Zoom>
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
