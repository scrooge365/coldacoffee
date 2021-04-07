/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import Container from '../../../components/Container';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '../../../icons/Facebook';
import FooterLogo from '../../../icons/FooterLogo';
import { useIntl } from 'react-intl';
// import InstagramIcon from '../../../icons/Instagram';
// import YoutubeIcon from '../../../icons/Youtube';

const MainLayoutFooter = () => {
  const intl = useIntl();
  return (
    <footer>
      <ClassNames css={{}}>
        {({ theme }) => (
          <div
            css={{
              background: theme.palette.secondary.main,
              color: theme.palette.common.white,
              padding: theme.spacing(4, 1),
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Container>
              <div
                css={{
                  '@media(min-width: 960px)': { padding: theme.spacing(4) },
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <MainLayoutFooterCard
                  title={intl.formatMessage({
                    id: 'footer.contact',
                    defaultMessage: 'Contact us',
                  })}
                >
                  <a href='mailto:company@kolda.coffee'>company@kolda.coffee</a>
                </MainLayoutFooterCard>
                <MainLayoutFooterCard
                  title={intl.formatMessage({
                    id: 'footer.social',
                    defaultMessage: 'Follow us',
                  })}
                >
                  <div css={{ display: 'flex', marginTop: -8 }}>
                    <IconButton
                      href='https://www.facebook.com/koldacoffee'
                      rel='noreferrer'
                      target='_blank'
                      aria-label='facebook'
                    >
                      <FacebookIcon />
                    </IconButton>
                    {/* <IconButton aria-label='instagram' rel='noreferrer' target='_blank'>
                      <InstagramIcon />
                    </IconButton>
                     <IconButton>
                    <YoutubeIcon />
                  </IconButton> */}
                  </div>
                </MainLayoutFooterCard>
              </div>
            </Container>
            <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FooterLogo
                coffeeColor={'rgba(255,255,255, .4)'}
                fontColor={theme.palette.common.white}
                css={{ width: 80, height: 90 }}
              />
              <p css={{ fontSize: 12, marginTop: theme.spacing(2), textAlign: 'center' }}>
                {intl.formatMessage({
                  id: 'footer.copyright',
                  defaultMessage: ` © 2021 Kolda coffee company s.r.o.. All rights reserved.`,
                })}
              </p>
            </div>
          </div>
        )}
      </ClassNames>
    </footer>
  );
};

MainLayoutFooter.displayName = 'MainLayoutFooter';

export default MainLayoutFooter;

const MainLayoutFooterCard = ({ children, title }) => {
  return (
    <ClassNames>
      {({ theme }) => (
        <div
          css={{
            '& a': {
              color: theme.palette.common.white,
              textDecoration: 'none',
            },
            '& a:hover': {
              textDecoration: 'underline',
            },
            '& svg': {
              fill: theme.palette.common.white,
              width: 24,
              height: 24,
            },
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(1, 0),
          }}
        >
          <p
            css={{
              ...theme.typography.body1,
              color: theme.palette.common.white,
              fontWeight: theme.typography.fontWeightBold,
              marginBottom: theme.spacing(1),
            }}
          >
            {title}
          </p>
          {children}
        </div>
      )}
    </ClassNames>
  );
};

MainLayoutFooterCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};
