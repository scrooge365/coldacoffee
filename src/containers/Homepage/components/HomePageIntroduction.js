/** @jsx jsx */
// import React from 'react';
// import PropTypes from 'prop-types';
import { ClassNames, jsx } from '@emotion/react';
import Container from '../../../components/Container';
import headlineImage from '../../../images/coffee-cup-header.webp';
import headlineMobileImage from '../../../images/coffee-cup-header-mobile.webp';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ButtonLink from '../../../components/ButtonLink';
import useTranslate from '@sprinx/react-globalize/useTranslate';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

function HomepageIntroduction() {
  const desktop = useMediaQuery('@media(min-width:960px)');
  const t = useTranslate();
  return (
    <Container>
      <ClassNames>
        {({ theme }) => (
          <div
            css={{
              '& > img': {
                width: 150,
              },
              '@media(min-width: 600px)': {
                '& > img': {
                  width: 'auto',
                },
              },
              display: 'flex',
              alignItems: 'center',
              padding: theme.spacing(4, 0),
            }}
          >
            <div css={{ display: 'flex', flexDirection: 'column', '& > div:nth-of-type(2)': { alignSelf: 'center' } }}>
              <Pulse>
                <h1 css={{ ...theme.typography.h1 }}>{t('homepage/introduction/title')}</h1>
              </Pulse>
              <Fade bottom timeout={2000} delay={1000}>
                <ButtonLink css={{ alignSelf: 'center' }} to={t('paths/contact')}>
                  {t('homepage/introduction/button')}
                </ButtonLink>
              </Fade>
            </div>
            <img src={desktop ? headlineImage : headlineMobileImage} alt='headline' />
          </div>
        )}
      </ClassNames>
    </Container>
  );
}

HomepageIntroduction.propTypes = {};
HomepageIntroduction.defaultProps = {};

export default HomepageIntroduction;
