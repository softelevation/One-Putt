import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {darkGreenColor, whiteColor} from '../../Common/theme';
const Games = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: darkGreenColor}} />
      <MainView>
        <Top>
          <HeaderText>Games</HeaderText>
        </Top>
        <Center>
          <MainText>Second Phase Activity</MainText>
        </Center>
        <Bottom>
          <BackButton activeOpacity={0.2} onPress={() => navigation.goBack()}>
            <BackButtonText>Back</BackButtonText>
          </BackButton>
        </Bottom>
      </MainView>
    </>
  );
};

const MainView = styled.View({
  flex: 1,
  alignItems: 'center',
});
const MainText = styled.Text({
  fontSize: 30,
  fontWeight: '600',
});
const HeaderText = styled.Text({
  fontSize: 24,
  fontWeight: '400',
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
const Center = styled.View({flex: 1, justifyContent: 'center'});
const Bottom = styled.View({flex: 1, justifyContent: 'flex-end'});
const BackButtonText = styled.Text({
  color: whiteColor,
  fontSize: 16,
});
export default Games;
