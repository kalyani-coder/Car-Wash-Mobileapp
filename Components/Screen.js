import React from 'react';
import { View, Button } from 'react-native';

function Screen({ navigation }) {
  return (
    <View>
      {/* Your home screen UI */}
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

export default Screen;