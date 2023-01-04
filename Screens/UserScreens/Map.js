import React from 'react';
import MapView, {
  Callout,
  Geojson,
  Marker,
  Polygon,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {StyleSheet, View, Text, Image} from 'react-native';
import styles from '../../Styling';
import {useEffect, useState} from 'react';
// import Geolocation from '@react-native-community/geolocation';

export default function Map({navigation, route}) {
  const [myLocation, setMyLocation] = useState({});
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(data => setMyLocation(data.coords));
  //   // console.log(myLocation);
  // }, []);
  return (
    <>
      <View style={[styles.paper, styles.bgPrimary]}>
        <Text style={[styles.textWhite, styles.textCenter, styles.p3]}>
          map
        </Text>
      </View>
      <View style={[styles.my2, styles.border2]}>
        <MapView
          mapType="standard"
          userInterfaceStyle="light"
          // showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
              // latitude: myLocation.latitude,
              // longitude: myLocation.longitude,
            }}
            title="MyTitle"
            description="myDescription">
            <Callout tooltip>
              <View
                style={[
                  styles.bgWhite,
                  styles.p2,
                  styles.rounded,
                  styles.border1,
                ]}>
                <Text style={styles.fs3}>name</Text>
                <Text style={[styles.fs4, styles.textSuccess]}>capital</Text>
                <Text style={[styles.fs5, styles.textDanger]}>
                  country_code
                </Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </>
  );
}
