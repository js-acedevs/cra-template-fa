// react
import { Suspense } from 'react';
import ReactDOM from 'react-dom';

// i18n
import i18n from '@config/i18n';
import { I18nextProvider } from 'react-i18next';

// apollo
import { client as apolloClient } from '@graphql/client';
import { ApolloProvider } from '@apollo/client';

// app
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback={<div className="mx-auto">Loading...</div>}>
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </I18nextProvider>
  </Suspense>,
  document.querySelector('#root')
);

reportWebVitals();
