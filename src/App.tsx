import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
IconFA.loadFont();

import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Main />
    </>
  );
};

export default App;
