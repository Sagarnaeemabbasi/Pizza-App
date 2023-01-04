import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import MyModal from '../Components/MyModal';
import Styles from '../Styling';
import Loader from '../Components/Loader';
import {loginUser} from '../Firebase/FirebaseMethods';

export default function Login({navigation}) {
  const [details, setDetails] = useState({});
  const [modalText, setModalText] = useState('');
  const [buttonBg, setButtonBg] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const moveToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const login = () => {
    setLoading(true);
    if (
      !details.email ||
      details.email.length <= 0 ||
      !details.password ||
      details.password.length <= 0
    ) {
      setModalVisible(true);
      setModalText('Please write the accurate Email and Password');
      setLoading(false);
    } else {
      loginUser(details)
        .then(succ => {
          if (succ.user.uid === 'gjZnqz1q3OS36BEvITb4Hv3bJwo1') {
            navigation.navigate('AdminScreen');
          } else {
            navigation.navigate('home');
          }

          setLoading(false);
          ToastAndroid.show('Login Successfully', 3000);
        })
        .catch(error => {
          // const errMessage = error.code;
          console.log(error);

          setLoading(false);
          setModalVisible(true);
          setModalText(error);
        });

      setButtonBg(true);
    }

  };

  return (
    <>
      <MyModal
        mainText={modalText}
        buttonText="cancel"
        visible={modalVisible}
        onPress={() => {
          setModalVisible(!modalVisible);
          setButtonBg(false);
        }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <View style={{backgroundColor: '#eeeeee', flex: 1}}>
        <Text
          style={[
            Styles.textCenter,
            {padding: 15, fontSize: 40, color: 'blue', marginTop: 10},
          ]}>
          Log In
        </Text>
        <TextInput
          keyboardType="email-address"
          onChangeText={e => {
            setDetails({...details, email: e});
            e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
          }}
          style={[Styles.myInput, Styles.textCenter]}
          placeholder="e-mail"
        />
        <TextInput
          onChangeText={e => {
            setDetails({...details, password: e});
            e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
          }}
          style={[Styles.myInput, Styles.textCenter]}
          placeholder="password"
          secureTextEntry={true}
        />
        <View style={[Styles.p2, Styles.w100]}>
          <TouchableOpacity
            style={[
              Styles.btn,
              {
                backgroundColor: !buttonBg ? 'black' : 'darkblue',
              },
            ]}
            disabled={!buttonBg}
            onPress={login}>
            {loading ? (
              <Loader color="fuchsia" size="large" />
            ) : (
              <Text style={[Styles.textWhite, Styles.textCenter, Styles.fs4]}>
                Log In
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={[Styles.px2, Styles.w100]}>
          <View style={Styles.checkboxContainer}>
            <Text style={[Styles.m1, {fontSize: 18}]}>Are You New User ?</Text>
            <TouchableOpacity
              style={[Styles.badge, Styles.m1, {paddingTop: 5}]}
              onPress={moveToSignUp}>
              <Text style={[Styles.textCenter, Styles.textWhite]}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
