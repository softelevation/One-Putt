import React, {useState, useRef} from 'react';

import {
  Dimensions,
  Linking,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {darkGreenColor} from '../../Common/theme';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import WifiManager from 'react-native-wifi-reborn';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {View} from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const QrCode = ({navigation}) => {
  const qrscan = useRef();
  const [status, setStatus] = useState('Scanning');
  const onSuccess = (e) => {
    const code = e.data;
    const codes = code.split('-').filter((c) => c !== '');
    const ssid = codes[0];
    const password =
      codes[1].substr(codes[1].length - 2, 2) +
      codes[1].substr(codes[1].length - 4, 2) +
      codes[1].substr(codes[1].length - 6, 2) +
      codes[1].substr(codes[1].length - 8, 2) +
      codes[1].substr(0, 4);
    console.log(password, 'password', ssid);
    console.log(e);
    wifiConnect(password, ssid);
  };

  const wifiConnect = async (password, ssid) => {
    WifiManager.setEnabled(true);
    WifiManager.disconnect();
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: '',
        message: '',
        buttonNegative: '',
        buttonPositive: '',
      },
    ).then((granted) => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        })
          .then((data) => {
            WifiManager.connectToProtectedSSID(ssid, password, false).then(
              () => {
                console.log('connectToProtectedSSID successfully!');
                setStatus('Connected');
                setTimeout(() => {
                  navigation.navigate('Home');
                }, 2000);
              },
              (reason) => {
                setStatus('Connection failed');
                console.log(reason);
              },
            );
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log('permission denied');
      }
    });
  };
  const scanAgain = () => {
    setStatus('Scanning');
    qrscan.current.reactivate();
  };
  const renderFailedView = () => {
    return (
      <>
        <Text style={styles.errorText}>
          Open the App settings to allow the camera permissions.
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('app-settings:')}>
          <Text style={[styles.buttonText, styles.openSettingsText]}>
            Open Settings
          </Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: darkGreenColor}} />
      <QRCodeScanner
        topViewStyle={{height: 0, flex: 0}}
        bottomViewStyle={{height: 0, flex: 0}}
        ref={qrscan}
        cameraStyle={{height: heightPercentageToDP(100)}}
        style={{flex: 1}}
        onRead={(e) => onSuccess(e)}
        notAuthorizedView={renderFailedView()}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>Wifi Status : {status}</Text>
        }
        showMarker
        customMarker={
          <View style={styles.rectangleContainer}>
            <View style={styles.topOverlay}>
              <Text style={{fontSize: 30, color: 'white'}}>
                Scanning Wifi Network
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.leftAndRightOverlay} />

              <View style={styles.rectangle} />

              <View style={styles.leftAndRightOverlay} />
            </View>

            <View style={styles.bottomOverlay}>
              <TouchableOpacity
                onPress={() => scanAgain()}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>Scan Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        }>
        <View style={{position: 'absolute', top: heightPercentageToDP(30)}}>
          <Text style={styles.buttonText}>Read</Text>
        </View>
      </QRCodeScanner>
    </>
  );
};

const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = 'red';

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = '#22ff00';

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 20,
  },
  openSettingsText: {textAlign: 'center', marginTop: heightPercentageToDP(2)},
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: 1,
    borderColor: rectBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  },
});
export default QrCode;
