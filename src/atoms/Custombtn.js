import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Custombtn = () => {
 
  return (
    <View style={styles.main}>
      <View style={styles.view}>
        <TouchableOpacity  >
          <Text style={styles.btn} >
            Download Image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Custombtn;

const styles = StyleSheet.create({
  btn: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
  },
  view: {
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8F00',
    height: 60,
    width: '80%',
  },
  main: {
    alignItems: 'center',
  },
});
