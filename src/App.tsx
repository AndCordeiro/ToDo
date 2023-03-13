import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {StatusBar, useColorScheme, View} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';
import Routes from '@routes/index.routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#ECF2FF' : '#3E54AC',
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <View
        style={{
          height: getStatusBarHeight(true),
        }}
      />
      <StatusBar
        animated
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Routes />
    </>
  );
};

export default App;
