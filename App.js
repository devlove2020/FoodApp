import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from './constants';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: COLORS.primary}}>Food App</Text>
      <Image source={ICONS.heart} style={{width: 25, height: 25}} />
    </View>
  );
};

export default App;
