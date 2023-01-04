import React from 'react';
import { ActivityIndicator, View} from 'react-native';
import styles from '../Styling';

export default function Loader(props) {
    const {size,color}=props
  return (
    <View style={[styles.my1]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}
