// react
import { ReactElement } from 'react';

// atoms
import { FollowLink } from '@molecules/index';

const InfoTemplate = (): ReactElement => (
  <div className="infoTemplate">
    <h1>Welcome to Ornio CRA Template</h1>
    <p>Visit package.json for scripting information and dependencies.</p>
    <i>or</i>
    <FollowLink />
  </div>
);

export default InfoTemplate;
