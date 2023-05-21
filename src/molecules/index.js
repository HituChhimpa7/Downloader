import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const Flat = () => {
  const data = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3y7hCJ_S169ZgP0QcEZP5xYJJ4tALjM8XA&usqp=CAU',
      name:'Hitu'
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
            <View>
          <Image source={{uri: item.img}} style={{height:300,width:'100%'}} />;
          <Text>{item.name}</Text>
          </View>
        }}
      />
    </View>
  );
};

export default Flat;
