/** @jsx jsx */
import { ClassNames, jsx } from '@emotion/react';

const MainLayoutFooter = () => {
  return (
    <footer>
      <ClassNames>
        {({ theme }) => (
          <div
            css={{
              background: theme.palette.secondary.main,
              color: theme.palette.common.white,
              padding: theme.spacing(4, 0),
            }}
          >
            footer
          </div>
        )}
      </ClassNames>
    </footer>
  );
};

MainLayoutFooter.displayName = 'MainLayoutFooter';

export default MainLayoutFooter;
