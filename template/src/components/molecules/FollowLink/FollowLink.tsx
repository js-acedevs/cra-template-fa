// react
import { ReactElement } from 'react';

// atoms
import { CustomLink } from '@atoms/index';

const FollowLink = (): ReactElement => (
  <div className="followLink">
    <p>
      Visit{' '}
      <CustomLink
        target="_blank"
        to={{
          pathname: 'https://github.com/albrim-devfront/cra-template-fa.git',
        }}
      >
        cra-template-fa
      </CustomLink>{' '}
      for template details
    </p>
  </div>
);

export default FollowLink;
