import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MyCheckbox from '../Components/MyCheckbox';
import Styles from '../Styling';
import MyModal from '../Components/MyModal';
import Loader from '../Components/Loader';
import {Avatar} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {signUpUser} from '../Redux/Actions/SignUpUser';
import mime from 'mime';
import axios from 'axios';

export default function SignUp({navigation}) {
  const [details, setDetails] = useState({});
  const [isSelected, setSelection] = useState(false);
  const [modalText, setModalText] = useState('');
  const [buttonBg, setButtonBg] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [myImage, setMyImage] = useState(false);

  // const {loading, error} = useSelector(state => state.auth);
  // console.log(loading);
  // console.log(error);
  const serverUrl = 'https://grumpy-calf-stole.cyclic.app/api';
  const dispatch = useDispatch();
  const signUp = async () => {
    if (
      !details.email ||
      details.email.length <= 0 ||
      !details.password ||
      details.password.length <= 0 ||
      !details.name ||
      details.name.length <= 0
      // !myImage
    ) {
      setModalVisible(true);
      setModalText('Please write the accurate Email and Password and Name');
    } else {
      // const formData = new FormData();
      // formData.append('name', details.name);
      // formData.append('email', details.email);
      // formData.append('password', details.password);
      // formData.append('avatar', {
      //   uri: myImage,
      //   type: mime.getType(myImage),
      //   name: myImage.split('/').pop(),
      // });
      const dataToSent = {
        name: details.name,
        email: details.email,
        password: details.password,
        // avatar: {
        //   uri: myImage,
        //   type: mime.getType(myImage),
        //   name: myImage.split('/').pop(),
        // },
      };

      setButtonBg(true);
      console.log('formData=====>', dataToSent);
      await axios
        .post(`${serverUrl}/signup`, dataToSent, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(data => {
          console.log('Signup Successfully and data =>', data);
        })
        .catch(err => {
          console.log('erroor==>', err);
        });
    }
  };

  const pickImage = async () => {
    const res = await launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
    });
    const {uri} = res.assets[0];
    setMyImage(uri);
  };
  const goToGallery = async () => {
    const res = await launchImageLibrary({
      mediaType: 'mixed',
    });
    const {uri} = res.assets[0];

    setMyImage(uri);
  };

  return (
    <>
      <ScrollView>
        <MyModal
          mainText={modalText}
          buttonText="cancel"
          visible={modalVisible}
          onPress={() => {
            // setHideModal(!modalVisible);
            setModalVisible(!modalVisible);
            setSelection(false);
            setButtonBg(false);
          }}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <View style={Styles.centeredView}>
          <Avatar.Image size={79} color="red" source={{uri: myImage ?? null}} />
          <TouchableOpacity
            style={[Styles.badge, {marginTop: 5}]}
            onPress={pickImage}>
            <Text style={Styles.textStyleWhite}>Pick Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.badge, {marginTop: 5}]}
            onPress={goToGallery}>
            <Text style={Styles.textStyleWhite}>Go to Gallery</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#eeeeee', flex: 1}}>
          <Text
            style={[
              Styles.textCenter,
              {padding: 15, fontSize: 40, color: 'blue', marginTop: 10},
            ]}>
            Sign Up
          </Text>
          <TextInput
            keyboardType="default"
            onChangeText={e => {
              setDetails({...details, name: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="name"
          />
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
          keyboardType="default"
            onChangeText={e => {
              setDetails({...details, password: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="password"
            secureTextEntry={true}
          />
          <MyCheckbox
            text="Accept the term and policies"
            value={isSelected}
            onValueChange={() => {
              setSelection(!isSelected);
            }}
          />
          <View style={[Styles.px2, Styles.w100]}>
            <TouchableOpacity
              style={[
                Styles.btn,
                {
                  backgroundColor:
                    !isSelected ||
                    !details.password ||
                    !details.name ||
                    !details.email ||
                    !buttonBg
                      ? 'black'
                      : 'darkblue',
                },
              ]}
              disabled={!isSelected || !buttonBg}
              onPress={signUp}>
              {/* {loading ? (
                <Loader color="fuchsia" size="small" />
              ) : ( */}
              <Text style={[Styles.textWhite, Styles.textCenter, Styles.fs4]}>
                SignUp
              </Text>
              {/* ) */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
