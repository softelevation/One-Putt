/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {blackColor, whiteColor} from '../../Common/theme';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'QrCode'}],
      });
    }, 3000);
  }, []);
  return (
    <MainView>
      <Header> OnePutt.in </Header>
      <Subtitle>Golf course at your door step</Subtitle>
    </MainView>
  );
};

const MainView = styled.View({
  flex: 1,
  backgroundColor: blackColor,
  justifyContent: 'center',
  alignItems: 'center',
});
const Header = styled.Text({
  color: whiteColor,
  fontSize: 35,
  fontWeight: '500',
});
const Subtitle = styled.Text({
  color: whiteColor,
  fontSize: 22,
  fontWeight: '300',
});
export default SplashScreen;
