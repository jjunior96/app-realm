import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default App;
