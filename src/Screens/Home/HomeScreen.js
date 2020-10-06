import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Alert,
  BackHandler,
  NativeModules,
} from 'react-native';
import {background} from '../../Common/Images';
import styled from 'styled-components/native';
import {whiteColor, yellowColor} from '../../Common/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RNExitApp from 'react-native-exit-app';

const HomeScreen = ({navigation}) => {
  const dialog = () => {
    Alert.alert(
      'Exit One-Putt',
      'Are you sure you want to exit',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => RNExitApp.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  };
  const data = [
    {
      name: 'Practice',
    },
    {
      name: 'Play',
    },
    {
      name: 'About',
    },
    {
      name: 'Manual',
    },
    {
      name: 'Faq',
    },
    {
      name: 'Report',
    },
    {
      name: 'Player',
    },
    {
      name: 'Shutdown',
    },
  ];
  return (
    <Background source={background}>
      <SafeAreaView />
      <HeaderView>
        <HeaderText>
          One-<SecondHeaderText>Putt</SecondHeaderText>
        </HeaderText>
      </HeaderView>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return (
            <BoxView
              onPress={() =>
                item.name === 'Shutdown'
                  ? dialog()
                  : navigation.navigate(item.name)
              }
              key={index}>
              <BoxText>{item.name}</BoxText>
            </BoxView>
          );
        }}
      />
    </Background>
  );
};

const Background = styled(ImageBackground)({
  flex: 1,
});
const HeaderView = styled.View({
  alignItems: 'center',
});
const HeaderText = styled.Text({
  fontSize: 40,
  color: whiteColor,
});
const SecondHeaderText = styled.Text({
  fontSize: 40,
  color: yellowColor,
});
const BoxView = styled.TouchableOpacity({
  borderWidth: 2,
  borderRadius: 20,
  width: wp(40),
  paddingVertical: hp(1),
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: wp(7),
  marginVertical: hp(3),
  borderColor: whiteColor,
});
const BoxText = styled.Text({
  color: whiteColor,
  fontSize: 16,
  fontWeight: 'bold',
  textTransform: 'uppercase',
});
export default HomeScreen;
