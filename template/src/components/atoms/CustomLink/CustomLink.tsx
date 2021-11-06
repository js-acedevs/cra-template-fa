// react
import { FC, ReactElement } from 'react';

// classNames
import clsx from 'clsx';

// router
import { Link } from 'react-router-dom';

// types
import { CustomLinkProps } from './CustomLink.types';

const CustomLink: FC<CustomLinkProps> = ({
  className,
  children,
  ...rest
}): ReactElement => (
  <Link className={clsx('link', className)} {...rest}>
    {children}
  </Link>
);

export default CustomLink;
