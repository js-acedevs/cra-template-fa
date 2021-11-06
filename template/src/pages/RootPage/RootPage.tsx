// react
import { ReactElement } from 'react';

// organisms
import { InfoTemplate } from '@organisms/index';

// templates
import { PageTemplate } from '@templates/index';

const RootPage = (): ReactElement => (
  <PageTemplate title="Root">
    <div className="flex flex-col items-center pt-24 text-2xl">
      <InfoTemplate />
    </div>
  </PageTemplate>
);

export default RootPage;
