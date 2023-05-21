import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';


const Logo = () => {
  return (
    <View style={styles.logo}>
    <Image source={{uri:'http://clipart-library.com/images/kTMKgdKpc.png'}}
     style={styles.logo}
     />
    
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
    logo:{
        // aspectRatio:1,
        height:100,
        width:'100%',
        // alignItems:'center',
        resizeMode:'contain',
        marginTop:50,
        marginBottom:30,

    },
    main:{
        alignItems:'center',
        justifyContent:'center'
    }

})