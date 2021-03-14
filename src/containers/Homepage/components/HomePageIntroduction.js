/** @jsx jsx */
// import React from 'react';
// import PropTypes from 'prop-types';
import { ClassNames, jsx } from '@emotion/react';
import Container from '../../../components/Container';
import headlineImage from '../../../images/coffee-cup-header.webp';

function HomepageIntroduction() {
  return (
    <Container>
      <ClassNames>
        {() => (
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <div css={{ display: 'flex', flexDirection: 'column' }}>
              <h1>Kolda coffee producing 100% bio coffee products to all over the world</h1>
              <a href='/'>contact us</a>
            </div>
            <img src={headlineImage} alt='headline' />
          </div>
        )}
      </ClassNames>
    </Container>
  );
}

HomepageIntroduction.propTypes = {};
HomepageIntroduction.defaultProps = {};

export default HomepageIntroduction;
