import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('节假日倒计时');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="修改文本" onPress={() => setOutputText('假期到了！')} />
      <TextInput placeholder="输入" style={{ borderWidth: 1, padding: 10 }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
