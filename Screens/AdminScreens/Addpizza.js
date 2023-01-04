import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import MyModal from '../../Components/MyModal';
import Styles from '../../Styling';
import Loader from '../../Components/Loader';
import {sendData} from '../../Firebase/FirebaseMethods';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
export default function Addpizza() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const [buttonBg, setButtonBg] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const SendDetails = () => {
    setLoading(true);
    if (
      !details.name ||
      details.name.length <= 0 ||
      !details.prize ||
      details.prize.length <= 0 ||
      !details.Discount ||
      details.Discount.length <= 0 ||
      !details.Image ||
      details.Image.length <= 0 ||
      !details.Category ||
      details.Category.length <= 0 ||
      !details.Size ||
      details.Size.length <= 0 ||
      !details.Delivery ||
      details.Delivery.length <= 0 ||
      !details.Cheeze ||
      details.Cheeze.length <= 0
    ) {
      setModalVisible(true);
      setModalText('Please Fill All the above Text Boxes');
      setLoading(false);
    } else {
      sendData(details, 'Pizzas')
        .then(succ => {
          ToastAndroid.show(succ, 3000);
          setLoading(false);
          setDetails({
            name: '',
            prize: '',
            Discount: '',
            Image: '',
            Size: '',
            Category: '',
            Cheeze: '',
            Delivery: '',
          });
        })
        .catch(dbError => {
          setLoading(false);
          setModalVisible(true);
          setModalText(dbError);
        });
    }
  };
  return (
    <>
      <ScrollView>
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
              {padding: 15, fontSize: 30, color: 'blue', marginTop: 10},
            ]}>
            Add Your Pizza Here
          </Text>
          <TextInput
            value={details.name}
            onChangeText={e => {
              setDetails({...details, name: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Add The Pizza Name"
          />
          <TextInput
            value={details.prize}
            onChangeText={e => {
              setDetails({...details, prize: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Add the Prize of Pizza"
            keyboardType="numeric"
          />
          <TextInput
            value={details.Discount}
            onChangeText={e => {
              setDetails({...details, Discount: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Any Discount,Write in (0to100%)"
            keyboardType="numeric"
          />
          <TextInput
            value={details.Image}
            onChangeText={e => {
              setDetails({...details, Image: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Add the URL of Image"
          />
          <TextInput
            value={details.Size}
            onChangeText={e => {
              setDetails({...details, Size: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Add the Size of Pizza"
          />
          <TextInput
            value={details.Cheeze}
            onChangeText={e => {
              setDetails({...details, Cheeze: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Extra cheeze or not"
          />
          <TextInput
            value={details.Delivery}
            onChangeText={e => {
              setDetails({...details, Delivery: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Add The Dilevery Time In Min"
          />
          <TextInput
            value={details.Category}
            onChangeText={e => {
              setDetails({...details, Category: e});
              e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
            }}
            style={[Styles.myInput, Styles.textCenter]}
            placeholder="Add The Dilevery Time In Min"
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
              onPress={SendDetails}>
              {loading ? (
                <Loader color="fuchsia" size="large" />
              ) : (
                <Text style={[Styles.textWhite, Styles.textCenter, Styles.fs4]}>
                  Add Details Of Your Pizza
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.textCenter}>
          <Icon name="inactive_Order" size={40} color="pink" />
        </View>
      </ScrollView>
    </>
  );
}
