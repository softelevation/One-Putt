/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {darkGreenColor, whiteColor, backgroundColor} from '../../Common/theme';
import Slider from '@react-native-community/slider';
import {rectangle} from '../../Common/Images';
import TcpSocket from 'react-native-tcp-socket';
import ResponsiveImage from 'react-native-responsive-image';
const Practice = ({navigation}) => {
  // const [socket] = useSocket(config);
  const [LRValue, setLRValue] = useState(0);
  const [BTValue, setBTValue] = useState(0);
  const [tiltHorizontalAngle, setHorizontalTiltAngle] = useState('0000');
  const [tiltVerticalAngle, setVerticalTiltAngle] = useState('0000');
  const [status, setStatus] = useState('');
  const [rightLeftValue, setrightLeftValue] = useState('0deg');
  const [topDownValue, settopDownValue] = useState('0deg');
  const [command, setCommand] = useState('');
  const [socket, setSocket] = useState({});

  const changeValueTopDown = (e) => {
    setBTValue(e);
    settopDownValue(e * 5 + 'deg');
  };
  const changeValueLeftRight = (e) => {
    setLRValue(e);
    setrightLeftValue(e * 5 + 'deg');
  };
  useEffect(() => {
    if (BTValue === 0) {
      setVerticalTiltAngle('0000');
    } else if (BTValue === 0.5) {
      setVerticalTiltAngle('3F00');
    } else if (BTValue === 1.0) {
      setVerticalTiltAngle('3F80');
    } else if (BTValue === 1.5) {
      setVerticalTiltAngle('3FC0');
    } else if (BTValue === 2.0) {
      setVerticalTiltAngle('4000');
    } else if (BTValue === 2.5) {
      setVerticalTiltAngle('4020');
    } else if (BTValue === 3.0) {
      setVerticalTiltAngle('4040');
    } else if (BTValue === 3.5) {
      setVerticalTiltAngle('4060');
    } else if (BTValue === 4.0) {
      setVerticalTiltAngle('4080');
    } else if (BTValue === -0.5) {
      setVerticalTiltAngle('BF00');
    } else if (BTValue === -1.0) {
      setVerticalTiltAngle('BF80');
    } else if (BTValue === -1.5) {
      setVerticalTiltAngle('BFC0');
    } else if (BTValue === -2.0) {
      setVerticalTiltAngle('C000');
    } else if (BTValue === -2.5) {
      setVerticalTiltAngle('C020');
    } else if (BTValue === -3.0) {
      setVerticalTiltAngle('C040');
    } else if (BTValue === -3.5) {
      setVerticalTiltAngle('C060');
    } else if (BTValue === -4.0) {
      setVerticalTiltAngle('C080');
    }
    //Angle from horizintal axis
    if (LRValue === 0) {
      setHorizontalTiltAngle('0000');
    } else if (LRValue === 0.5) {
      setHorizontalTiltAngle('3F00');
    } else if (LRValue === 1.0) {
      setHorizontalTiltAngle('3F80');
    } else if (LRValue === 1.5) {
      setHorizontalTiltAngle('3FC0');
    } else if (LRValue === 2.0) {
      setHorizontalTiltAngle('4000');
    } else if (LRValue === -0.5) {
      setHorizontalTiltAngle('BF00');
    } else if (LRValue === -1.0) {
      setHorizontalTiltAngle('BF80');
    } else if (LRValue === -1.5) {
      setHorizontalTiltAngle('BFC0');
    } else if (LRValue === -2.0) {
      setHorizontalTiltAngle('C000');
    }
  }, [LRValue, BTValue]);
  // const ws = new WebSocket('http://192.168.1.100:8080');
  const handleSubmit = () => {
    let cmd = '500000FF03FF00';
    let cmd1 =
      '0040002814010000D*000000000A' +
      '0000' +
      tiltHorizontalAngle +
      '0000' +
      tiltVerticalAngle +
      '7FFF7FFF7FFF7FFF7FFF7FFF';
    const total = cmd + cmd1;
    setCommand(total);
    socket.write(total);
  };
  useEffect(() => {
    const client = TcpSocket.createConnection(
      {
        port: 8080,
        host: '192.168.1.100',
        tls: false,
      },
      () => {
        setStatus('Connected');
      },
    );
    client.on('data', function (data) {
      console.log('message was received', data);
    });
    client.on('error', function (error) {
      setStatus('Failed to connect');
    });
    client.on('close', function () {
      setStatus('Disconnected');
    });
    setSocket(client);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <SafeAreaView style={{backgroundColor: darkGreenColor}} />
      <MainView>
        <Top>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(3),
              marginTop: hp(1),
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ResponsiveImage
                source={require('../../assets/back-arrow.png')}
                initHeight="30"
                initWidth="30"
                style={{tintColor: darkGreenColor}}
              />
            </TouchableOpacity>
            <HeaderText>Practice</HeaderText>
            <HeaderText />
          </View>
          <ButtonTilted>
            <ButtonTiltedText>{'You are tilted : 0\u00b0'}</ButtonTiltedText>
          </ButtonTilted>
          {/* <HeaderText style={{fontSize: 18}}>Status : {status} </HeaderText> */}
        </Top>
        <Center>
          <SliderContainerView>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: -hp(8),
                justifyContent: 'center',
                transform: [{rotate: '270deg'}],
                width: hp(38),
                marginLeft: -hp(16),
              }}>
              <TextHeader
                style={{
                  marginTop: hp(3),
                  fontSize: 20,
                  transform: [{rotate: '90deg'}],
                }}>
                {'DOWN'}
              </TextHeader>
              <TopBottomSlider
                value={BTValue}
                minimumValue={-2}
                maximumValue={2}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#FFFFFF"
                onValueChange={(e) => changeValueTopDown(e)}
                step={1}
                thumbImage={rectangle}
              />
              <TextHeader
                style={{
                  marginTop: hp(1),
                  fontSize: 20,
                  transform: [{rotate: '90deg'}],
                }}>
                {'UP'}
              </TextHeader>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                transform: [{rotate: '270deg'}],
                width: wp(65),
                marginTop: hp(1.4),
                marginLeft: -wp(18),
              }}>
              <TextHeader
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  transform: [{rotate: '90deg'}],
                }}>
                {'-2\u00b0'}
              </TextHeader>
              <TextHeader
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  transform: [{rotate: '90deg'}],
                }}>
                {`${BTValue}\u00b0`}
              </TextHeader>
              <TextHeader
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  transform: [{rotate: '90deg'}],
                }}>
                {'2\u00b0'}
              </TextHeader>
            </View>
          </SliderContainerView>

          <GrassView
            style={{
              transform: [
                {perspective: 300},
                {skewX: '0deg'},
                {skewY: '0deg'},
                {scale: 0.8},
                {translateX: -wp(15)},
                // {rotateZ: '20deg'},
                {rotateX: topDownValue},
                {rotateY: rightLeftValue},
              ],
            }}
          />
          <View style={{width: wp(50), backgroundColor: 'red'}}>
            <View />
          </View>
        </Center>

        <Bottom>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(16),
            }}>
            <TextHeader
              style={{
                textAlign: 'center',
                fontSize: 12,
              }}>
              {'-3\u00b0'}
            </TextHeader>
            <TextHeader
              style={{
                textAlign: 'center',
                fontSize: 18,
              }}>{`${LRValue}\u00b0`}</TextHeader>
            <TextHeader style={{textAlign: 'center', fontSize: 12}}>
              {'3\u00b0'}
            </TextHeader>
          </View>
          <BottomLayout>
            <TextHeader>LR</TextHeader>
            <SliderStyle
              value={LRValue}
              minimumValue={-3}
              maximumValue={3}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#FFFFFF"
              onValueChange={(e) => changeValueLeftRight(e)}
              step={0.5}
              thumbImage={rectangle}
            />
            <TextHeader>RL</TextHeader>
          </BottomLayout>
          <BackButton onPress={() => handleSubmit()} activeOpacity={0.2}>
            <BackButtonText>Tilt table</BackButtonText>
          </BackButton>
        </Bottom>
      </MainView>
    </>
  );
};

const MainView = styled.View({
  flex: 1,
  // alignItems: 'center',
  backgroundColor: backgroundColor,
});
const MainText = styled.Text({
  fontSize: 30,
  fontWeight: '600',
});
const HeaderText = styled.Text({
  fontSize: 40,
  fontWeight: '400',
  color: whiteColor,
  textAlign: 'center',
});
const BackButton = styled.TouchableOpacity({
  width: wp(70),
  paddingVertical: hp(1.5),
  alignSelf: 'center',
  backgroundColor: darkGreenColor,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: hp(2),
  borderRadius: 20,
});
const Top = styled.View({flex: 1, justifyContent: 'flex-start'});
const Center = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const Bottom = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
});
const BackButtonText = styled.Text({
  color: whiteColor,
  fontSize: 16,
  textTransform: 'uppercase',
});
const GrassView = styled.View({
  backgroundColor: '#146A00',
  height: hp(30),
  width: wp(40),
});
const TextHeader = styled.Text({
  color: whiteColor,
  fontWeight: 'bold',
  fontSize: 30,
});
const BottomLayout = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: wp(3),
  marginBottom: hp(2),
});
const SliderStyle = styled(Slider)({
  width: wp(70),
  height: 40,
  alignSelf: 'center',
  // marginTop: hp(5),
  // marginBottom: hp(5),
  // backgroundColor: 'red',
});
const TopBottomSlider = styled(Slider)({
  width: wp(70),
  height: 40,
  alignSelf: 'center',
});
const SliderContainerView = styled.View({
  // alignItems: 'center',
});
const SliderMainView = styled.View({});
const ButtonTilted = styled.TouchableOpacity({
  borderWidth: 1,
  borderRadius: 10,
  borderColor: '#FFA78B',
  width: wp(70),
  alignSelf: 'center',
  paddingVertical: hp(2),
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: hp(3),
});
const ButtonTiltedText = styled.Text({
  color: whiteColor,
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: 24,
});
export default Practice;
