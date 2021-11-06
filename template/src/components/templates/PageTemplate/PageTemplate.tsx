// react
import { FC, ReactElement } from 'react';

// classNames
import clsx from 'clsx';

// helmet
import { Helmet } from 'react-helmet';

// types
import { PageTemplateProps } from './PageTemplate.types';

const PageTemplate: FC<PageTemplateProps> = ({
  title,
  children,
  className,
}): ReactElement => (
  <>
    <Helmet>
      <title>{`APP - ${title}`}</title>
    </Helmet>
    <main className={clsx('pageTemplate', className)}>{children}</main>
  </>
);

export default PageTemplate;
