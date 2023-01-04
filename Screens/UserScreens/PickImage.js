import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from '../../Styling';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function PickImage() {
  const [PicImage, setPicImage] = useState(
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  );
  const pickImage = async () => {
    const res = await launchCamera({
      mediaType: 'photo',
    });
    console.log(res);
    
  };
  const goToGallery = () => {};
  return (
    <View>
      <Text style={[Styles.textCenter, Styles.m2, Styles.fs1]}>
        Image Picker
      </Text>
      <View style={[Styles.px2, Styles.w100]}>
        <TouchableOpacity onPress={pickImage} style={[Styles.btn, Styles.m2]}>
          <Text
            style={[
              Styles.textCenter,
              Styles.textLight,
              Styles.m1,
              {fontSize: 20},
            ]}>
            Open Camera
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[Styles.px2, Styles.w100]}>
        <TouchableOpacity onPress={goToGallery} style={[Styles.btn, Styles.m2]}>
          <Text
            style={[
              Styles.textCenter,
              Styles.textLight,
              Styles.m1,
              {fontSize: 20},
            ]}>
            Open Gallery
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[Styles.flexCenter]}>
        <Image
          source={{
            uri: PicImage,
          }}
          style={{width: 150, height: 150}}
        />
      </View>
    </View>
  );
}
