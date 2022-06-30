import {View, Text, Image} from 'react-native';
import React from 'react';
import {heart, image1} from './assets';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Food App</Text>
      <Image source={heart} style={{width: 25, height: 25}} />
    </View>
  );
};

export default App;
