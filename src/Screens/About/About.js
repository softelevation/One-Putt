import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {darkGreenColor, whiteColor} from '../../Common/theme';
const About = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: darkGreenColor}} />
      <MainView
        contentContainerStyle={{paddingBottom: hp(8)}}
        showsVerticalScrollIndicator={false}>
        <HeaderText>About K&A GOLF</HeaderText>
        <MainText>
          K&A Golf is a company started in 2008 by two golf professionals, Karan
          Bindra and Anitya Chand, with the primary objective to work in the
          field of Golf. The various verticals in which the company works in
          includes Golf Academies and Golf in Schools, Retail, Player and Event
          Management; and provides consultancy to various corporate clients,
          golf clubs and associations. The company has recently forayed into
          golfing holidays and providing Indoor Golf Solutions.
        </MainText>
        <MainText>
          The founders, themselves golfers who have played and taught golf at an
          elite level, have brought together a team of highly qualified
          professionals to deliver world class experiences and golfing solutions
          to their clients. The company is known for their hands on personal
          approach and the level of hospitality they deliver.
        </MainText>
        <HeaderText>About OnePutt</HeaderText>
        <MainText>
          The One Putt platform uses patented technology to change slope and
          undulation to mimic any putting contour in golf. Eight of individual
          actuator modules instant changes to the topography.
        </MainText>
        <MainText>
          One Putt is a tilting platform that allows you to reproduce real game
          situations in order to train effectively. Includes a laser aiming
          system and an automated projection line. The new One Putt technology
          is suitable for all level players to progress quickly with fun
          exercises. The different programs will help you understand and build
          different putting strategies. We implement all our knowledge in
          putting training through this system.
        </MainText>
        <MainText>
          We have created this concept to meet the needs of many golfers wanting
          to practice and improve their putting skills with different green
          slopes. By recreating real life game situations. It can be installed
          anywhere. In the comfort of your living room, your basement, your
          clubhouse, your golf academy or your putting studio
        </MainText>
      </MainView>
      <Bottom>
        <BackButton activeOpacity={0.2} onPress={() => navigation.goBack()}>
          <BackButtonText>Back</BackButtonText>
        </BackButton>
      </Bottom>
    </>
  );
};

const MainView = styled(ScrollView)({
  flex: 1,
  // alignItems: 'center',
  paddingHorizontal: wp(3),
});
const MainText = styled.Text({
  fontSize: 16,
  marginVertical: hp(0.5),
});
const HeaderText = styled.Text({
  fontSize: 30,
  fontWeight: 'bold',
  marginVertical: hp(1),
  marginTop: hp(3),
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
const Bottom = styled.View({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
});
const BackButtonText = styled.Text({
  color: whiteColor,
  fontSize: 16,
});
export default About;
