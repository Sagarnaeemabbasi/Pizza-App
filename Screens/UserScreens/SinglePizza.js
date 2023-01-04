import React, {useState} from 'react';
import {Image, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import MyButton from '../../Components/MyButton';
import styles from '../../Styling';

export default function SinglePizza({navigation, route}) {
  const data = route.params;
  const goToOrder=()=>{
    navigation.navigate("")
  }

  return (
    <View style={styles.mx1}>
      <Text
        style={[styles.textBlack, styles.textBold, {fontSize: 28, margin: 5}]}>
        {data.name}
      </Text>
      <Text
        style={[styles.textBlack, styles.textBold, {fontSize: 28, margin: 5}]}>
        {data.Category}
      </Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={[{width: 150}]}>
          <Text style={[{color: 'orange', fontSize: 30}, styles.textBold]}>
            {data.prize} Rs
          </Text>
          <Text style={[{color: 'rey', fontSize: 20, marginVertical: 10}]}>
            Size
          </Text>
          <Text style={[styles.textBold, {fontSize: 22}, styles.textBlack]}>
            {data.Size}
          </Text>
          <Text style={[{color: 'rey', fontSize: 20, marginVertical: 10}]}>
            Cheese
          </Text>
          <Text style={[styles.textBold, {fontSize: 22}, styles.textBlack]}>
            {data.Cheeze}
          </Text>
          <Text style={[{color: 'rey', fontSize: 20, marginVertical: 10}]}>
            Delivery
          </Text>
          <Text
            style={[
              styles.textBold,
              {fontSize: 22, height: 50},
              styles.textBlack,
            ]}>
            {data.Delivery}min
          </Text>
        </View>
        <View
          style={[
            {marginRight: 5, marginTop: 0, borderRadius: 5},
           
            styles.mx1,
          ]}>
          <Image
            source={{
              uri: data.Image,
            }}
            style={{width: 180, height: 250}}
          />
        </View>
      </View>
      <View style={[styles.my6]}>
        <MyButton style={{backgroundColor:"orange"}}  text="Place Order" onPress={goToOrder}/>
      </View>
    </View>
  );
}
