/** @jsx jsx */
// import React from 'react';
// import PropTypes from 'prop-types';
import { ClassNames, jsx } from '@emotion/react';
import Container from '../../../components/Container';
import useMediaQuery from '../../../hooks/useMediaQuery';
import coffeecups from '../../../images/cofee-cups.webp';
import coffeecupsMobil from '../../../images/cofee-cups-mobile.webp';
import useTranslate from '@sprinx/react-globalize/useTranslate';

function HomePageAbout() {
  const desktop = useMediaQuery('@media(min-width:600px)');
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
            }}
          >
            <h2 css={{ ...theme.typography.h2, marginBottom: theme.spacing(2) }}>{t('homepage/about/title')}</h2>
            <p css={{ textAlign: 'center' }}>{t('homepage/about/description')}</p>
            <div css={{ '& > img': { width: '100%' }, width: '100%' }}>
              <img src={desktop ? coffeecups : coffeecupsMobil} alt='headline' />
            </div>
          </div>
        )}
      </ClassNames>
    </Container>
  );
}

HomePageAbout.propTypes = {};
HomePageAbout.defaultProps = {};

export default HomePageAbout;
