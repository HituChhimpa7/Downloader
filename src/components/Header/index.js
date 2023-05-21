import {View, Text, StyleSheet, StatusBar, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import Search from '../Searchbar';
import Custombtn from '../../atoms/Custombtn';
import Img from '../../assets';
import Logo from '../../assets/logo';

const Header = () => {
  return (
    <KeyboardAvoidingView style={styles.main}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'mediumseagreen'}
      />
      <Text style={styles.header}>Image Downloader</Text>
      
      <Img  />
      <Logo />
      <Search />
      {/* <Custombtn /> */}
  </KeyboardAvoidingView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'mediumseagreen',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  main: {
    // flex: 1,
  },
});
