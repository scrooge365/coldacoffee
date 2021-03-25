/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/react';
import Page from '../../components/Page';
import ErrorPage from '../../pages/404';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import kafe from '../../images/kafee.webp';
import coffeList from '../../images/coffee-list.webp';
import Europe from '../../icons/Europe';
import { useIntl } from 'react-intl';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

const Contact = ({ error }) => {
  const intl = useIntl();
  if (error) return <ErrorPage error={error} />;

  return (
    <ClassNames>
      {({ theme }) => (
        <Container>
          <Page
            pageTitle={'Contact'}
            css={{
              width: '100%',
              padding: theme.spacing(1),
            }}
          >
            <div
              css={{
                '& > svg': {
                  width: 310,
                  height: 'auto',
                  maxHeight: '100vh',
                  position: 'absolute',
                  top: 60,
                  right: -70,
                  zIndex: -1,
                },
                '@media (min-width: 425px)': {
                  '& > svg': { width: 425 },
                },
                '@media (min-width: 600px)': {
                  '& > svg': { width: 500, right: 0 },
                },
                '@media (min-width: 960px)': { '& > svg': { width: 800, right: 0 }, padding: theme.spacing(4, 6) },
                '@media (min-width: 1180px)': { '& > svg': { maxHeight: 1200, right: 30 } },
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'flex-start',
                padding: theme.spacing(2, 0),
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Europe />
              <img
                src={coffeList}
                alt='coffee'
                css={{
                  '@media(min-width: 600px)': {
                    position: 'absolute',
                    top: 50,
                    right: 0,
                    display: 'block',
                    width: 200,
                  },
                  '@media(min-width: 960px)': { width: 300 },
                  '@media (min-width: 1180px)': { width: 300, top: 80 },
                  display: 'none',
                }}
              />
              <div
                css={{
                  '@media (min-width: 600px)': { maxWidth: 330 },
                  '@media (min-width: 960px)': { marginBottom: theme.spacing(4), maxWidth: 329 },
                  '@media (min-width: 1180px)': { maxWidth: 500 },
                  ...theme.typography.h2,
                  marginBottom: theme.spacing(2),
                  maxWidth: 230,
                  textAlign: 'left',
                }}
              >
                <Pulse>
                  {intl.formatMessage({
                    id: 'contact.title',
                    defaultMessage: `Kontaktujte nás, máme zastoupení v několika zemích Evropy`,
                  })}
                </Pulse>
              </div>
              <ContactInfoContact>
                <p>
                  {intl.formatMessage({
                    id: 'contact.business',
                    defaultMessage: `Obchod`,
                  })}
                </p>
                <a href='phone:+420605382389'>+420 605 382 389</a>
                <a href='mailto:radova@colda.coffee'>radova@colda.coffee</a>
              </ContactInfoContact>
              <ContactInfoContact>
                <p>
                  {intl.formatMessage({
                    id: 'contact.pharm',
                    defaultMessage: `Farma`,
                  })}
                </p>
                <a href='phone:+420775171410'>+420 775 171 410</a>
                <a href='mailto:kolar@colda.coffee'>kolar@colda.coffee</a>
              </ContactInfoContact>
              <ContactInfoContact>
                <p>
                  {intl.formatMessage({
                    id: 'contact.techsupport',
                    defaultMessage: `Technická podpora`,
                  })}
                </p>
                <a href='phone:+420739237900'>+420 739 237 900</a>
                <a href='mailto:david@colda.coffee'>david@colda.coffee</a>
              </ContactInfoContact>
              <ContactInfoContact>
                <p>
                  {intl.formatMessage({
                    id: 'contact.personal',
                    defaultMessage: `Personální oddělení`,
                  })}
                </p>
                <a href='phone:+420720165816'>+420 720 165 816</a>
                <a href='mailto:bitala@colda.coffee'>bitala@colda.coffee</a>
              </ContactInfoContact>
              <ContactInfoContact
                css={{
                  '& img': { width: 120, margin: theme.spacing(2, 0) },
                  '@media (min-width: 425px)': { maxWidth: 250 },
                  '@media (min-width: 600px)': { marginTop: theme.spacing(6), maxWidth: 290 },
                  '@media (min-width: 960px)': { maxWidth: 350, '& img': { width: 200 } },
                  fontSize: 11,
                  maxWidth: 200,
                }}
              >
                <picture>
                  <source media='(min-width:960px)' srcSet={kafe} />
                  <source media='(min-width:320px)' srcSet={kafe} />
                  <img src={kafe} alt='coffee' />
                </picture>
                <span>Kolda Coffee Company, s.r.o.</span>
                <span>Kolbenova 882/5a, 190 00 Praha 9</span>
                <span>
                  {intl.formatMessage({
                    id: 'contact.state',
                    defaultMessage: `Czech republic`,
                  })}
                </span>
                <br />
                <span>IČO: 01584472</span>
                <span>DIČ: CZ01584472</span>
                <span>
                  {intl.formatMessage({
                    id: 'contact.sro',
                    defaultMessage: `Zapsaný v obchodním rejstříku, vedeném Městským soudem v Praze oddíl C, vložka 208765`,
                  })}
                </span>
              </ContactInfoContact>
            </div>
          </Page>
        </Container>
      )}
    </ClassNames>
  );
};

export default Contact;

Contact.propTypes = {
  error: PropTypes.any, // eslint-disable-line
};
Contact.defaultProps = {};

const ContactInfoContact = ({ children, className }) => {
  return (
    <Zoom>
      <ClassNames>
        {({ theme, css, cx }) => (
          <div
            css={cx(
              css({
                ...theme.typography.body1,
                '& > a': { color: theme.palette.text.primary, textDecoration: 'none' },
                '& > a:hover': { textDecoration: 'underline' },
                '& > p': { color: theme.palette.primary.main, fontWeight: theme.typography.fontWeightMedium },
                '@media(min-width: 425px)': { fontSize: 16, lineHeight: '18px' },
                '@media(min-width: 600px)': { fontSize: 18, lineHeight: '22px' },
                '@media(min-width: 960px)': { fontSize: 20, lineHeight: '24px', margin: theme.spacing(2, 0) },
                display: 'flex',
                flexDirection: 'column',
                fontSize: 14,
                padding: theme.spacing(1, 0),
              }),
              className,
            )}
          >
            {children}
          </div>
        )}
      </ClassNames>
    </Zoom>
  );
};

ContactInfoContact.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
ContactInfoContact.defaultProps = {
  className: undefined,
};
