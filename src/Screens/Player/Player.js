import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {darkGreenColor, whiteColor} from '../../Common/theme';
import {Item, Input} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Player = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: darkGreenColor}} />
      <MainView contentContainerStyle={{flexGrow: 1}}>
        <Top>
          <HeaderText>Player Profile</HeaderText>
          <InputView regular>
            <Input keyboardType={'email-address'} placeholder="Name" />
          </InputView>
          <InputView regular>
            <Input keyboardType={'number-pad'} placeholder="Age" />
          </InputView>
          <InputView regular>
            <Input keyboardType={'email-address'} placeholder="Email" />
          </InputView>
          <InputView regular>
            <Input keyboardType={'email-address'} placeholder="Level" />
          </InputView>
          <BackButton activeOpacity={0.2} onPress={() => navigation.goBack()}>
            <BackButtonText>Submit</BackButtonText>
          </BackButton>
          <Center>
            <MainText>Metadata</MainText>
          </Center>
        </Top>
        <Bottom>
          <BackButton activeOpacity={0.2} onPress={() => navigation.goBack()}>
            <BackButtonText>Back</BackButtonText>
          </BackButton>
        </Bottom>
      </MainView>
    </>
  );
};

const MainView = styled(KeyboardAwareScrollView)({});
const MainText = styled.Text({
  fontSize: 30,
  fontWeight: '600',
});
const HeaderText = styled.Text({
  fontSize: 24,
  fontWeight: '400',
  textAlign: 'center',
});
const BackButton = styled.TouchableOpacity({
  width: wp(90),
  paddingVertical: hp(1.5),
  alignSelf: 'center',
  backgroundColor: darkGreenColor,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: hp(2),
  borderRadius: 10,
});
const Top = styled.View({flex: 1, justifyContent: 'flex-start'});
const Center = styled.View({
  alignItems: 'center',
});
const Bottom = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
});
const BackButtonText = styled.Text({
  color: whiteColor,
  fontSize: 16,
});
const InputView = styled(Item)({
  marginVertical: hp(2),
  width: wp(90),
  alignSelf: 'center',
});
export default Player;
