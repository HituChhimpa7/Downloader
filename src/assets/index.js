import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {responsiveWidth} from 'react-native-responsive-dimensions';
const Img = () => {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/03/17/23/07/abstract-1264071_1280.png',
        }}
        style={styles.img}
      />
    </View>
  );
};

export default Img;
const styles = StyleSheet.create({
  img: {
    // width: '100%',
    height:responsiveHeight(103),
    width:responsiveWidth(180),
    aspectRatio: 1,
    resizeMode: 'contain',
    position: 'absolute',
    overflow: 'visible',
    alignSelf: 'center',
  },
  view: {
    backgroundColor: 'red',
    flex: 1,
  },
});
