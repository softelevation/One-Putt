import React from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';
import {KandA, Logo, texture} from '../../Common/Images';
import styled from 'styled-components/native';
import {whiteColor} from '../../Common/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RNExitApp from 'react-native-exit-app';
import ResponsiveImage from 'react-native-responsive-image';
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
      name: 'Play',
    },
    {
      name: 'Practice',
    },
    {
      name: 'Player',
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
      name: 'Help',
    },
    {
      name: 'Shutdown',
    },
  ];

  return (
    <Background>
      <SafeAreaView />
      <HeaderView source={texture}>
        <ResponsiveImage source={Logo} initHeight="100" initWidth="160" />
        <HeaderText>The Art of Putting</HeaderText>
      </HeaderView>
      <WelcomeText>Welcome</WelcomeText>
      <View>
        <FlatList
          numColumns={3}
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
      </View>
      <Divider />
      <Row>
        <ResponsiveImage source={KandA} initHeight="60" initWidth="190" />
        <BoxText>Follow Us</BoxText>
      </Row>
    </Background>
  );
};

const Background = styled.View({
  flex: 1,
  backgroundColor: '#000E58',
});
const HeaderView = styled(ImageBackground)({
  alignItems: 'center',
  paddingVertical: hp(4),
});
const Row = styled.View({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: wp(3),
  marginTop: hp(4),
});
const HeaderText = styled.Text({
  fontSize: 20,
  color: whiteColor,
});
const BoxView = styled.TouchableOpacity({
  borderRadius: 20,
  width: wp(30),
  paddingVertical: hp(5),
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: wp(2.5),
  marginTop: hp(2),
  backgroundColor: '#193f8f',
});
const BoxText = styled.Text({
  color: whiteColor,
  fontSize: 16,
  fontWeight: 'bold',
  textTransform: 'uppercase',
});
const WelcomeText = styled.Text({
  color: whiteColor,
  fontSize: 30,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: hp(2),
});
const Divider = styled.View({
  marginTop: hp(3),
  width: wp(90),
  alignSelf: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#ffffff',
});
export default HomeScreen;
