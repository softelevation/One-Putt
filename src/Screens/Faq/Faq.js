import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {darkGreenColor, whiteColor} from '../../Common/theme';
import {Content, Accordion, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ResponsiveImage from 'react-native-responsive-image';
import {expand_down, expand_up} from '../../Common/Images';
Ionicons.loadFont();
const Faq = ({navigation}) => {
  const dataArray = [
    {
      index: 0,
      title: 'Can it be installed in a domestic floor?',
      content:
        'Yes, One Putt is a very popular addition to the home studio or games room, with its weight distributed evenly across the surface area. A durable base board which acts as a soft barrier between One Putt and the existing floor surfaces adds an additional layer of protection.',
    },
    {
      index: 1,
      title: 'How long does it take to install?',
      content:
        'Depending on the size chosen, a typical One Putt installation without projection system is under 4 hours and 6 hours with projection system considering 2 persons for installation.',
    },
    {
      index: 2,
      title: 'Can I have a custom size?',
      content:
        'Yes. One Putt uses modular technology to make various sizes. Custom sizes are available to fit your room / requirement. Please get in touch with us to know more.',
    },
    {
      index: 3,
      title: 'How do you change the green speed?',
      content:
        'You can simply adjust the contour up to 2 degrees uphill or downhill to play a putt of different speeds.',
    },
    {
      index: 4,
      title: 'Can it re-create the greens on my course?',
      content:
        'One Putt is working on green-mapping technology to make this feature available in the future. Please visit our website or follow us on Facebook to be updated',
    },
    {
      index: 5,
      title: 'How extreme are the contours?',
      content:
        'One Putt has a gradient of 0 to 4 degrees (in intervals of 0.5 degrees) on the left to right and the right to left plane. It can also be tilted up to 2 degrees uphill and downhill.',
    },
    {
      index: 6,
      title: 'Can it be used outside?(It cannot be used outside)',
      content:
        'One Putt is principally designed for use in a dry, indoors environment.',
    },
    {
      index: 7,
      title: 'How heavy is it?',
      content:
        'It depends on the size you choose, a typical One Putt weighs less than 250KG',
    },
    {
      index: 8,
      title:
        'Can I stand on it while it is moving? And how many people can stand on it?',
      content:
        'It is safe to stand on One Putt while it is moving, as the movement is gradual, although we do not recommend this for people who are unsteady on their feet. We recommend that no more than one people stand on One Putt at any one time.',
    },
    {
      index: 9,
      title: 'How is it powered?',
      content: 'One Putt plugs into a standard 200V AC domestic power supply.',
    },
    {
      index: 10,
      title: 'How accurate are the contours?',
      content: 'One Putt is incredibly accurate to within 0.2% gradient.',
    },
    {
      index: 11,
      title: 'How long does it take to move into position?',
      content:
        'One Putt takes around 8-9 seconds to move into your chosen position. The transition from one shape to another is virtually silent, and exceptionally smooth.',
    },
    {
      index: 12,
      title: 'Are the controls wireless?',
      content:
        'One Putt has a dedicated remote-control system, and you can also control it with the attached control panel, your tablet or with your mobile phone',
    },
    {
      index: 13,
      title: 'Safety features. What happens in the event of an emergency?',
      content:
        'One Putt is fitted with an emergency stop feature which immediately arrests any operation of the platform.',
    },
    {
      index: 14,
      title: 'What do I do if a fault occurs?',
      content:
        'In the unlikely incidence of failure during normal operation, please contact the One Putt Customer Services Department where staff will assist with your enquiry. All parts and labour are covered with a 12-month guarantee from date of installation. Thereafter, an optional maintenance package is available.',
    },
    {
      index: 15,
      title: 'Can it be used in conjunction with a projection system?',
      content:
        'It can be used with the projection system provided by One Putt.',
    },
    {
      index: 16,
      title: 'Is there a training program?',
      content:
        'We are developing a multi-player module which will allow users to compete online and compare scores.',
    },
    {
      index: 17,
      title: 'Can I compete with other One Putt owners?',
      content: ' ',
    },
    {
      index: 18,
      title: 'What is the lead-time between ordering and delivery?',
      content: 'Standard production time is six weeks from receipt of deposit.',
    },
    {
      index: 19,
      title: 'What is the life of the projector?',
      content:
        'Life of projector is 5000 hours in standard operating conditions.',
    },
    {
      index: 20,
      title: 'What is the warranty on the One Putt?',
      content: '12 months from date of invoice.',
    },
    {
      index: 21,
      title: 'How often do I need to have it serviced / maintained?',
      content: 'Once in 6 months as per service manual provided.',
    },
    {
      index: 22,
      title: 'What do I do if One Putt is not starting?',
      content: 'Please refer to troubleshoot manual.',
    },
  ];
  const _renderHeader = (item, expanded) => {
    return (
      <AccordionHeader key={item.index}>
        {expanded ? (
          <NativeIcon source={expand_up} initHeight="13" initWidth="13" />
        ) : (
          <NativeIcon source={expand_down} initHeight="13" initWidth="13" />
        )}
        <Title>{item.title}</Title>
      </AccordionHeader>
    );
  };
  const _renderContent = (item) => {
    return (
      <ContentView>
        <AccordionContent key={item.index}>{item.content}</AccordionContent>
      </ContentView>
    );
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: darkGreenColor}} />
      <MainView>
        <Top>
          <HeaderText>Frequent asked questions</HeaderText>
          <Content padder>
            <Content style={{backgroundColor: 'white'}}>
              <Accordion
                dataArray={dataArray}
                animation={true}
                expanded={true}
                renderHeader={_renderHeader}
                renderContent={(item) => _renderContent(item)}
              />
            </Content>
          </Content>
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

const MainView = styled.View({
  flex: 1,
  backgroundColor: 'white',
});
const HeaderText = styled.Text({
  fontSize: 24,
  fontWeight: '400',
  textAlign: 'center',
  marginVertical: hp(2),
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
const Bottom = styled.View({justifyContent: 'flex-end', marginTop: hp(2)});
const BackButtonText = styled.Text({
  color: whiteColor,
  fontSize: 16,
});
const AccordionHeader = styled.View({
  flexDirection: 'row',
  padding: hp(1.5),
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0,0,0,.2)',
});
const Title = styled.Text({
  fontWeight: '600',
  color: 'black',
  width: wp(87),
  marginLeft: wp(3),
});
const NativeIcon = styled(ResponsiveImage)({
  tintColor: 'gray',
});
const ContentView = styled.View({
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0,0,0,.1)',
  paddingVertical: hp(1),
  paddingRight: wp(6),
});
const AccordionContent = styled.Text({
  fontSize: 14,
  marginLeft: wp(9),
});
export default Faq;
