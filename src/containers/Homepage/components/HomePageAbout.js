/** @jsx jsx */
// import React from 'react';
// import PropTypes from 'prop-types';
import { ClassNames, jsx } from '@emotion/react';
import Container from '../../../components/Container';
import useMediaQuery from '../../../hooks/useMediaQuery';
import coffeecups from '../../../images/cofee-cups.webp';
import coffeecupsMobil from '../../../images/cofee-cups-mobile.webp';
import { useIntl } from 'react-intl';
import Bounce from 'react-reveal/Bounce';

function HomePageAbout() {
  const desktop = useMediaQuery('@media(min-width:600px)') || false;
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
            }}
          >
            <h2 css={{ ...theme.typography.h2, marginBottom: theme.spacing(2) }}>
              {intl.formatMessage({ id: 'homepage.about.title', defaultMessage: 'About us' })}
            </h2>
            <Bounce bottom>
              <p css={{ textAlign: 'center' }}>
                {intl.formatMessage({
                  id: 'homepage.about.description',
                  defaultMessage: `In southern Tanzania, we have been producing and growing coffee since 2012. We currently operate two farms, Hezya and Mwaya.`,
                })}
              </p>
            </Bounce>
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
