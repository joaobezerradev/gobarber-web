import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <ToastContainer />

    <GlobalStyles />
  </>
);

export default App;
