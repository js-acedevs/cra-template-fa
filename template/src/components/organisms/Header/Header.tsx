// react
import { ReactElement } from 'react';

// classNames
import clsx from 'clsx';

const Header = (): ReactElement => (
  <header className={clsx('header')}>
    <p>CRA Template Header</p>
  </header>
);

export default Header;
