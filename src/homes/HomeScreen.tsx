import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import CardComponent from '../components/CardComponent';
import {Element4, Notification, SearchNormal1} from 'iconsax-react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';
import moment from 'moment';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element4 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
          {/* <IonIcons name='notifications' size={24} color={colors.desc} /> */}
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Quyền" />
        <TitleComponent text="Be productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => Alert.alert('Welcome!!!')}>
          <TextComponent text="Search task" color="#696B6F" />
          <SearchNormal1 size={28} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent
                  text={moment().format('MMMM DD')}
                  onPress={() => console.log('Hello!!!')}
                />
              </RowComponent>
            </View>
            <View>
              <TextComponent text="CircleChar" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
