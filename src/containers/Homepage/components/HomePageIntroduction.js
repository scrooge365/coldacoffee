/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/react';
import Container from '../../../components/Container';
import headlineImage from '../../../images/coffee-cup-header.webp';
import headlineMobileImage from '../../../images/coffee-cup-header-mobile.webp';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ButtonLink from '../../../components/ButtonLink';
import { useIntl } from 'react-intl';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

function HomepageIntroduction() {
  const desktop = useMediaQuery('@media(min-width:960px)') || false;
  const intl = useIntl();
  return (
    <Container>
      <ClassNames>
        {({ theme }) => (
          <div
            css={{
              '& img': {
                width: 150,
              },
              '@media(min-width: 600px)': {
                '& img': {
                  width: 'auto',
                },
              },
              display: 'flex',
              alignItems: 'center',
              padding: theme.spacing(4, 0),
            }}
          >
            <div
              css={{
                '& > div:nth-of-type(2)': { alignSelf: 'center' },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Pulse>
                <h1 css={{ ...theme.typography.h1 }}>
                  {intl.formatMessage({
                    id: 'homepage.introduction.title',
                    defaultMessage: 'Kolda coffee producing 100% bio coffee products to all over the world',
                  })}
                </h1>
              </Pulse>
              <Fade bottom timeout={2000} delay={1000}>
                <ButtonLink
                  css={{ alignSelf: 'center', marginTop: theme.spacing(2) }}
                  to={intl.formatMessage({ id: 'paths.contact', defaultMessage: '/en/contact' })}
                >
                  {intl.formatMessage({ id: 'homepage.introduction.button', defaultMessage: 'contact us' })}
                </ButtonLink>
              </Fade>
            </div>
            <picture>
              <source media='(min-width:960px)' srcSet={headlineImage} />
              <source media='(min-width:320px)' srcSet={headlineMobileImage} />
              <img src={desktop ? headlineImage : headlineMobileImage} alt='headline' />
            </picture>
          </div>
        )}
      </ClassNames>
    </Container>
  );
}

HomepageIntroduction.propTypes = {};
HomepageIntroduction.defaultProps = {};

export default HomepageIntroduction;
