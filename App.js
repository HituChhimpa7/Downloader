import {View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import Flat from './src/molecules';

const App = () => {
  return (
    <KeyboardAvoidingView>
      <Flat/>
      <Header />
    </KeyboardAvoidingView>
  );
};

export default App;


