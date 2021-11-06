// react
import { FC, ReactElement } from 'react';

// organisms
import { Header } from '@organisms/index';

const AppLayout: FC = ({ children }): ReactElement => (
  <div className="appLayout">
    <Header />
    {children}
  </div>
);

export default AppLayout;
