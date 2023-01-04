import {useLinkTo} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Loader from '../Components/Loader';
import {getData} from '../Firebase/FirebaseMethods';
import styles from '../Styling';
export default function ShowPizzas({navigation}) {
  const [pizzasList, setPizzasList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getPizzaData = () => {
    setLoading(true);
    getData('Pizzas')
      .then(succ => {
        setPizzasList(succ);
        setLoading(false);
        // console.log(succ);
      })
      .catch(err => {
        // console.log('error=====>', err);
        setLoading(false);
        ToastAndroid.show(err, 3000);
      });
  };
  const linkTo = useLinkTo();
  const move = val => {
    navigation.navigate('Details', val);
  };
  useEffect(() => {
    getPizzaData();
  }, []);
  return (
    <View style={[styles.bgLightWhite]}>
      {loading ? (
        <Loader color="fuchsia" size="large" />
      ) : (
        <ScrollView>
          <View style={[styles.paper, styles.bgPrimary]}>
            <Text style={[styles.textWhite, styles.textCenter, styles.p3]}>
              Total No of Pizza: {pizzasList.length}
            </Text>
          </View>
          {pizzasList.length <= 0 ? (
            <View style={[styles.flexCenter, styles.my3]}>
              <Text style={[styles.fs, styles.textBold, styles.textDanger]}>
                No Pizzas to Show
              </Text>
            </View>
          ) : (
            pizzasList.map((element, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.paper,
                  styles.bgWhite,
                  styles.my1,
                  styles.shadow5,
                  {
                    borderRightWidth: 7,
                    borderRadius: 16,
                    borderRightColor: 'orange',
                    margin: 10,
                  },
                ]}
                onPress={() => move(element)}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={[{width: 100}]}>
                    <Text style={[styles.fs, {color: 'orange'}]}>
                      {element.Discount} % Off
                    </Text>
                    <Text
                      style={[{color: 'rey', fontSize: 15, marginVertical: 5}]}>
                      Super Value
                    </Text>
                    <Text
                      style={[
                        styles.textBold,
                        {fontSize: 22, height: 50},
                        styles.textBlack,
                      ]}>
                      {element.name}
                    </Text>
                    <View
                      style={[
                        styles.shadow1,
                        {
                          backgroundColor: 'orange',
                          position: 'relative',
                          bottom: 0,
                          top: 30,
                          marginLeft: 0,
                          left: 0,
                          width: 70,
                          borderRadius: 10,
                        },
                      ]}>
                      {/* <View style={[styles.label]}>  */}

                      <Text
                        style={[
                          styles.textCenter,
                          styles.textPrimary,
                          styles.textWhite,
                        ]}>
                        Rs: {element.prize}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      {marginRight: 10, marginTop: 0, borderRadius: 5},
                      styles.border1,
                      styles.mx3,
                    ]}>
                    <Image
                      source={{
                        uri: element.Image,
                      }}
                      style={{width: 150, height: 150}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}
